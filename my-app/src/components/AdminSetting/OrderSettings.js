import React, { useState , useEffect} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import input from './input';

import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bs";


const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue2 = minValue(2)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 20 ? <span style={{color:"orange"}}>Make sure You have to taken permission for above 20%</span> : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input}  placeholder={label} type={type}/>
        <Row>
        {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </Row>
        
      </div>
    </div>
  )



const onSubmit = (values) =>{
    console.log(values);
}


const OrderSettings = props => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      {/* <BiIcons.BsPlusCircleFill /> */}
        <Button  onClick={toggle}  className= "dropDownB ">
          
          <Label className="subFont">Order Settings</Label>
        <span className="updownSymbolContainer"> 
          {isOpen ? <BiIcons.BsCaretUpFill className="updownSymbol" /> : <BiIcons.BsCaretDownFill className="updownSymbol" /> } 
        </span>
        </Button>
        
        
        <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                <div className="docDetails">
                  <Label className="secondHeader">
                  Order Settings
                  </Label>
                </div>
                
                    <Row>
                        <Col >
                            <Label className="subHeadingLabels">Discount Limit</Label>
                            <Label>(Require permission aove 20%)
                              </Label>
                        <Row>
                            <Col sm="1.6">
                                    <Field
                                            name="DiscountLimit"
                                            component={renderField} 
                                            validate={[ required, number, minValue2 ]}
                                            warn={tooOld}
                                            label="20.0"
                                            
                                        /> 
                                       
                            </Col>
                            <Col>
                            <Label>%</Label>
                            </Col>
                            
                        </Row>
                        </Col>

                        


                    
                    </Row>

                <Row>
                    <Col sm="9">
                    </Col>

                    <Col sm="3">
                    <Button type="submit" onClick={handleSubmit(onSubmit)} disabled={submitting} style={{margin:"5%"}} color="primary" size="sm">Save</Button>
                    <Button  type="button" disabled={pristine || submitting} onClick={reset} color="secondary" size="sm">Clear</Button>
                    </Col>
                </Row>
                    
                </CardBody>
            </Card>
        </Collapse>
      
   
    </div>
  );
};





export default reduxForm({
  form: 'orderSetting', // a unique identifier for this form
})(OrderSettings);
