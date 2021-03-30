import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import * as BiIcons from "react-icons/bs";

const onSubmit = (values) =>{
  console.log(values);
}



const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
value && value < min ? `Must be at least ${min}` : undefined
const minValue2 = minValue(2)


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input style={{width:"90%"}} {...input} placeholder={label}   type={type}/>
      <Row>
      {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </Row>
      
    </div>
  </div>
)


const CustomerPrintRates = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <Button color="primary" onClick={toggle}  className="dropDownB dropDownB--active">
      <Label className="subFont">Customer Print Rates</Label>
      <span className="updownSymbolContainer"> 
          {isOpen ? <BiIcons.BsCaretUpFill className="updownSymbol" /> : <BiIcons.BsCaretDownFill className="updownSymbol" /> } 
        </span>
        
        </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
                <div className="docDetails">
                    <Label className="secondHeader">
                    Print Tag & Label Pricing
                    </Label>
                    </div>
          
          <Row>
              <Col>
                    <Label style={{fontWeight:"bold"}}>Base Price</Label>
                        <Row>
                            <Col sm="0"><Label>$</Label></Col>
                            <Col sm="4">
                            <Field
                                            name="BasePrice"
                                            component={renderField}
                                            type="text"
                                            label="0.05"
                                            
                                            validate={[ required, number,]}
                                        />
                              </Col>
                            
                            <Col sm="0">
                            <Label>per tag/label </Label>
                            </Col>
                        </Row>
              </Col>

              <Col>
                    <Label style={{fontWeight:"bold"}}>Custom Logo</Label>
                        <Row>
                            <Col sm="0"><Label>$</Label></Col>
                            <Col sm="4">
                            <Field
                                            name="CustomLogo"
                                            component={renderField}
                                            type="text"
                                            label="0.00"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                           
                            <Col sm="0">
                            <Label>per tag/label </Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                    <Label style={{fontWeight:"bold"}}>Custom Pricing</Label>
                        <Row>
                            <Col sm="0"><Label>$</Label></Col>
                            <Col sm="4">

                         
                            <Field
                                            name="CustomPricing"
                                            component={renderField}
                                            type="text"
                                            label="0.10"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                            <Col sm="0">
                            <Label>per tag/label </Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                    <Label style={{fontWeight:"bold"}}>Custom Application</Label>
                        <Row>
                            <Col sm="0"><Label>$</Label></Col>
                            <Col sm="4">

                           
                            <Field
                                            name="CustomApplication"
                                            component={renderField}
                                            type="text"
                                            label="0.20"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                            <Col sm="0">
                            <Label>per tag/label </Label>
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


    </>
  );
}


export default reduxForm({
  form: 'CustomerPrintRates', // a unique identifier for this form
})(CustomerPrintRates);
