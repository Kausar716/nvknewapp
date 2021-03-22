import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import * as BiIcons from "react-icons/bs";





// const formValidators ={
//   ReadyToLateNotice: validators.required('ReadyToLateNotice not found '),
//   ReserveExpiryNotice: [validators.required('ReserveExpiryNotice required'), validators.maxLength(2)]
// }


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
      <input {...input}  placeholder={label}  type={type}/>
      <Row>
      {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </Row>
      
    </div>
  </div>
)




const onSubmit = (values) =>{
  console.log(values);
}




const InrestRates = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { handleSubmit, pristine, reset, submitting } = props;
  
  return (
    <>
      <Button color="primary" onClick={toggle}  className="dropDownB dropDownB--active">
      <Label className="subFont">Intrest Rates</Label> 
      <span className="updownSymbolContainer"> 
          {isOpen ? <BiIcons.BsCaretUpFill className="updownSymbol" /> : <BiIcons.BsCaretDownFill className="updownSymbol" /> } 
        </span>
        </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <div className="docDetails">
                  <Label className="secondHeader">
                  Customers Orders and Invoices
                  </Label>
          </div>
          <Row>
              <Col sm="4">
                    <Label style={{fontWeight:"bold"}}>Monthly</Label>
                        <Row>
                            <Col>
                                        
                                        <Field
                                            name="MonthlyCOI"
                                            component={renderField}
                                            type="text"
                                            label="2.5"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                            
                            <Col>
                           <Label>%
                             </Label> 
                            </Col>
                            
                           
                        </Row>
              </Col>


              <Col sm="4">
                    <Label style={{fontWeight:"bold"}}>Yearly</Label>
                        <Row>
                            <Col>
                           
                            <Field
                                            name="YearlyCOI"
                                            component={renderField}
                                            type="text"
                                            label="2.5"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                            <Col>
                            <Label>%</Label>
                            </Col>
                        </Row>
              </Col>


              <Col sm="4">
                    <Label style={{fontWeight:"bold"}}>Tax Rate</Label>
                        <Row>
                            <Col>
                            <Field
                                            name="TaxRateCOI"
                                            component={renderField}
                                            type="text"
                                            label="2.5"
                                            validate={[ required, number,]}
                                        />
                            
                            </Col>
                            <Col>
                            <Label>%</Label>
                            </Col>
                        </Row>
              </Col>

             
</Row>

<br />
              <Row>

              <Col sm="4">
                    <Label style={{fontWeight:"bold"}}>Tax Rate Label</Label>
                        <Row>
                            <Col>
                            
                           
                            <Field
                                            name="TaxRateLabel"
                                            component={renderField}
                                            type="text"
                                            label="Sales tax (HST)@ 13%"
                                            validate={[ required,]}
                                        />
                            </Col>
                        </Row>
              </Col>


                    <Col sm="4">
                                        <Label style={{fontWeight:"bold"}}>Tax Rate Number</Label>
                                            <Row>
                                                <Col>
                                              
                                                <Field
                                                                name="TaxRateNumber"
                                                                component={renderField}
                                                                type="text"
                                                                label="HST: 013455647812 RT0001"
                                                                validate={[ required,]}
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

          </CardBody>



        </Card>
      </Collapse>


    </>
  );
}

export default reduxForm({
  form: 'notify',
})(InrestRates);