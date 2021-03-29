import React, { useState , useEffect} from 'react';
import { Field, reduxForm } from 'redux-form';
import * as TiIcons from "react-icons/ti";
import * as BiIcons from "react-icons/bs";

import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import { blue } from '@material-ui/core/colors';

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
      <label>{label}</label>
      <div>
        <input {...input}  type={type}/>
        <Row>
        {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </Row>
        
      </div>
    </div>
  )


const AdjustmentReasons = props => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const items = [...Array(25)].map((val, i) => `Item ${i}`);

  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
        <Button color="primary" onClick={toggle}  className="dropDownB dropDownB--active">
        <Label className="subFont">Adjustment Reasons</Label>
        <span className="updownSymbolContainer"> 
          {isOpen ? <BiIcons.BsCaretUpFill className="updownSymbol" /> : <BiIcons.BsCaretDownFill className="updownSymbol" /> } 
        </span>
            </Button>
        <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                <div className="docDetails">
                  <Label className="secondHeader">
                  Return Reasons for Adjustment
                  </Label>
                </div>
                
                    <Row>
                        {/* 1st colomn starts here */}
                        <Col sm="3">
                        <TiIcons.TiSpanner style={{fontSize:"3rem", color:"#117ef1ee"}} />
                        <br/>

                        <Label style={{fontWeight:"bold"}}>Second Notice</Label>
                        <Row>
                        
                            <Col>
                            <Input />
                            
                            </Col>
                        </Row>
<br />
                        <Row>
                            <Col>
                                    <Label style={{fontWeight:"bold"}}>Return to Inventory</Label>
                            </Col>
                        </Row>

                           <Row>
                           <Col>
                                    <Label ><Field name="ReturntoInventory" component="input" type="radio" value="ReturntoInventoryYes"/> Yes</Label>
                                    <Label style={{marginLeft:"1rem"}}><Field name="ReturntoInventory" component="input" type="radio" value="ReturntoInventoryNo"/> No</Label>
                                </Col>
                           </Row>
                                    <br/>
                           <Row>
                               <Col>  <BiIcons.BsPlusCircleFill style={{fontSize:"2rem", color:"#117ef1ee", marginLeft:"2rem"}}>
                                   </BiIcons.BsPlusCircleFill>

                                   <Label style={{marginLeft:"1rem"}}> Add New Reason</Label>
                              
                               </Col>
                           </Row>

                        </Col>

                        
                        

                        {/* 2nd colomn starts here */}
                        <Col sm="3">
                        <Label style={{fontWeight:"bold", color:"#117ef1ee"}}>Inactive</Label>
                        <Row>
                           <Col>

                           <div className="container">
                                
                                
                                <div className="center-col">
                                <span>List</span>
                                <ul>
                                    {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
                                </ul>
                                </div>
                            </div>

                           </Col>
                        </Row>
                        </Col>

{/* 3rd colomn starts here */}
                        <Col sm="3">
                        <br/>
                            <div className="buttonContainer">

                           
                            <div className="makeCeneter">
                            <Row>
                                    <Col>
                                    <Button className="buttonGrp" outline color="secondary" size="sm"> Add   </Button>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                    <Button className="buttonGrp" outline color="secondary" size="sm" >Add All</Button>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                    <Button  className="buttonGrp" outline color="secondary" size="sm" >Remove</Button>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                    <Button  className="buttonGrp" outline color="secondary" size="sm" >Delete</Button>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                    <Button className="buttonGrp" outline color="secondary" size="sm" >Edit</Button>
                                    </Col>
                                </Row>
                            </div>
                                
                            </div>
                        </Col>



{/* 4th colomn starts here */}
                        <Col sm="3">
                        <Row>
                        <Label style={{fontWeight:"bold", color:"#117ef1ee"}}>active</Label>
                            <Col>    <Label >(displayed Alphabetical)</Label>
                            </Col>
                        </Row>


                        <Row>
                           <Col>

                           <div className="container">
                                
                                
                                <div className="center-col">
                                <span>List</span>
                                <ul>
                                    {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
                                </ul>
                                </div>
                            </div>

                           </Col>
                        </Row>

                        

                        </Col>

                        
                    </Row>
                    
                </CardBody>
            </Card>
        </Collapse>
      
   
    </div>
  );
};

export default reduxForm({
  form: 'AdjustmentReasons', // a unique identifier for this form
})(AdjustmentReasons);
