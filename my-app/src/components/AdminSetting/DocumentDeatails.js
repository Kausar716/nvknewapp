import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import { useForm } from "react-hook-form";
import { Field, reduxForm } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Avatar from './Avatar.js';
import input1 from './input'
import * as BiIcons from "react-icons/bs";
// const  { DOM: { input, select, textarea } } = React


// const onChange = (event, allowPattern = null) =>{
//   if(allowPattern){
//       const regex = new RegExp(allowPattern);
//       if(!regex.test(event.target.value)){
//           event.target.value =input.value;
//       }
//   }
//   onChange(event);
// }

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

const onlyText = value => 
  value && /[^a-zA-Z ]/i.test(value)
    ? 'only alphabets allowed'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined



    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
          
          <div style={{color:"red"}}>
            <input style={{width:"100%"}}{...input}  placeholder={label}  type={type}/>
            <Row >
            {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
            </Row>
            
          </div>
        </div>
      )



const onSubmit = (values) =>{
    console.log(values);
}



const DocumentDetails = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div>
      <Button  onClick={toggle}  className="dropDownB dropDownB--active">
        <Label className="subFont">Site Configuration</Label>
        <span className="updownSymbolContainer"> 
          {isOpen ? <BiIcons.BsCaretUpFill className="updownSymbol" /> : <BiIcons.BsCaretDownFill className="updownSymbol" /> } 
        </span>
        </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          
          <div className="docDetails">
            <Label className="secondHeader">
            Document Details
            </Label>
            </div>


          <Row>
              <Col sm="6">
              Following details will appear on all printed ites including invoice, order, bills of lading, etc...
              Logo
              </Col>
              <Col sm="6">
                  <Label className="subHeadingLabels" >Name</Label>
                  
                 
                                        <Field
                                            name="DocName"
                                            component={renderField}
                                            type="text"
                                            placeholder="30"
                                            style={{width:"100%", backgroundColor:"red"}}
                                            validate={[required,onlyText, maxLength15, minLength2]}
                                            warn={alphaNumeric}
                                            // allowPattern="^[a-zA-Z]*$"  
                                            label="NAME"
                                        />
              </Col>
          </Row>



            <Row>
                <Col sm="6">
                    <Avatar />
                </Col>
                


               

                <Col sm="6">
                  <br></br>
                    <Row>
                        <Col>
                           
                            <Label className="subHeadingLabels">Sending Email Address</Label>

                            <Field
                                            name="SendingEmailAddress"
                                            component={renderField}
                                            type="email"
                                            validate={[required, email, minLength2]}
                                            label="DISPATCH EMAIL ADDRESS"
                                        />
                        </Col>

                        <Col>
                         
                                <Label className="subHeadingLabels">Phone</Label>
                                <Field
                                        name="phone"
                                        type="number"
                                        component={renderField}
                                        label="Phone number"
                                        validate={[required, phoneNumber]}
                                    />
                        </Col>
                    </Row> 
              </Col>
            </Row>

            <br/>
            <Row>
           
                <Col sm="6">
                 
                        
                            <Label className="subHeadingLabels">Main Title(bold)</Label>
                            <Field
                                            name="MainTitle"
                                            component={renderField}
                                            type="text"
                                            placeholder="30"
                                            validate={[required, ]}
                                            label="NWY No. 5 (SIX MILES WEST OF HWY. 6)"
                                        />
                </Col>

                <Col sm="6">
                
                            <Label className="subHeadingLabels">Secondary Title (bold)</Label>

                            
                            <Field
                                            name="SecondaryTitle"
                                            component={renderField}
                                            type="text"
                                            placeholder="30"
                                            validate={[required]}
                                            label="MAILING ADDRESS  "
                                            
                                        />
                </Col>
            </Row>
            <br/>

            <Row>
                <Col sm="6">
                   
                        <Label className="subHeadingLabels">Main Body</Label>

                       <Row>
                           <Col>
                           {/* <Field name="MainBody" 
                        component="textarea" 
                        validate={[required, ]}
                        style={{width:"100%"}}
                        placeholder = " Sales and Shipping (905 628-0112/0116, 523-0442)
                                        ADMINISTRATION: (905628-4144)
                                        FAX:(905) 628-3155 " /> */}
                           </Col>
                       </Row>
                  
                 
                </Col>
               

                <Col sm="6">
               
                        <Label className="subHeadingLabels">Secondary Body</Label>

                       <Row>
                      
                           <Col>
                           <Field name="SecondaryBody" 
                        component="textarea" 
                        validate={[required, ]}
                        style={{width:"100%"}}
                        placeholder="P.O. BOX 200 
                              WATERDOWN, ONTARIO, L0R 2H0  "
                        />
                           </Col>
                       </Row>
                  
                 
                </Col>

            </Row>


                <Row>
                    <Col sm="9">
                    </Col>

                    <Col sm="3">
                    <Button  outline color="secondary" type="button" disabled={pristine || submitting} onClick={reset}  >Cancel</Button>
                    <Button  color="primary" type="submit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting} style={{margin:"5%"}} >Save</Button>
                   
                    </Col>
                </Row>
                {/* <Input type="submit" /> */}
         
          </CardBody>
        </Card>
      </Collapse>


    </div>
  );
}

export default reduxForm({
    form: 'DocumentDetails' // a unique identifier for this form
  })(DocumentDetails)