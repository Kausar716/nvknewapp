import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import * as BiIcons from "react-icons/bs";




// const formValidators ={
//     ReadyToLateNotice: validators.required('ReadyToLateNotice not found '),
//     ReserveExpiryNotice: [validators.required('ReserveExpiryNotice required'), validators.maxLength(2)]
//   }
  
  
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
        <input {...input}   placeholder={label}  type={type}/>
        <Row>
        {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </Row>
        
      </div>
    </div>
  )


  const onSubmit = (values) =>{
    console.log(values);
  }
  
  
    



const CurencyRates = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { handleSubmit, pristine, reset, submitting } = props;

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Button color="primary" onClick={toggle}  className="dropDownB dropDownB--active">
      <Label className="subFont">Currency and Rates</Label>
        <span className="updownSymbolContainer"> 
          {isOpen ? <BiIcons.BsCaretUpFill className="updownSymbol" /> : <BiIcons.BsCaretDownFill className="updownSymbol" /> } 
        </span>
        </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          
          <div className="docDetails">
                  <Label className="secondHeader">
                  Customer Exchange Details
                  </Label>
          </div>

          <Row>
              <Col>
                    <Label className="subHeadingLabels">From Currency</Label>
                        <Row>
                            <Col><Label>CAD</Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><Label>US</Label>
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Rates</Label>
                        <Row>
                            <Col> 
                          
                            <Field
                                            name="CExchangeRates"
                                            component={renderField}
                                            type="text"
                                           
                                            //validate={formValidators.ReadyToLateNotice}
                                            validate={[ required, number, minValue2]}
                                            label="0.72"
                                        />
                           
                            
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Date</Label>
                        <Row>
                            <Col>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </Col>
                        </Row>
              </Col>

          </Row>

          </CardBody>

          <CardBody>
          <div className="docDetails">
                  <Label className="secondHeader">
                  Suppliear Exchange Details
                  </Label>
          </div>
          <Row>
              <Col>
                    <Label className="subHeadingLabels">From Currency</Label>
                        <Row>
                            <Col><Label>CAD</Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><Label>US</Label>
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Rates</Label>
                        <Row>
                            <Col> 
                           
                            <Field
                                            name="SExchangeRates"
                                            component={renderField}
                                            type="text"
                                            
                                            //validate={formValidators.ReadyToLateNotice}
                                            validate={[ required, number, minValue2]}
                                            label="0.72"
                                        />
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Date</Label>
                        <Row>
                            <Col>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
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
  form: 'CurencyRates',
})(CurencyRates);