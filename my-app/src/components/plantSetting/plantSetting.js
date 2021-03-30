import React from "react";
import '../userManagement/userProfile.css'
import '../userManagement/supplier.css'
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col, Card,CardHeader,Collapse} from 'reactstrap';
import { node } from "prop-types";
import {getAllImageAssets} from "../Utility/Utility";
const IconAssets =  getAllImageAssets();
console.log(IconAssets)



export  default class PlantSetting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardToggle:false,
            positionName:"",
            selectedId:""
        }
        let positionObj={
            name:""
        }
    }
   
    cardToggle = () => {
        let cardToggle = !this.state.cardToggle
        this.setState({cardToggle})
    }
    handleNewPosition = () => {
      

    }
    handleInput = (e) => {
        let positionName=e.target.value
        this.setState({positionName})
    }
    handleButton= (e)=>{
   
    }
    handleListClick = (e)=>{
        console.log(e.target.id)
        this.setState({selectedId:e.target.id})
    }
        render(){
            console.log(this.state.displayRecords)
            return(
                <div>
                    {/* <Card>
                   <CardHeader  onClick={this.cardToggle} style={{background:"#357ebd",color:"white"}}>{this.props.title} </CardHeader>
                    <Collapse isOpen = {this.state.cardToggle} className={"quizCollapse"}>                                         */}
                      <div>
                      <p className="divTitle boldTitle" style={{padding:"7px"}}>{this.props.subTitle}</p>
                      <div style={{padding:"2%"}}>
                     <Row>
                         {/* <Col>
                            <img src=""/>
                         </Col> */}
                         <Col>
                         <img src={IconAssets[this.props.imageName]} className="reasonsImg"/><br/>
                         <Label>{this.props.labelOne}</Label>
                         <Input type="text"/><br/>
                         {this.props.imperial?<Row>
                         <Col  >
                         <Label style={{flexGrow:"1"}} >Imperial</Label><span>*</span>
                         </Col>
                         <Col style={{flexGrow:"5"}}>
                         <Input type="text"/>
                         </Col>
                         </Row>:null}
                         <br/>
                        {this.props.skuValue?<Row>
                         <Col  >
                         <Label style={{flexGrow:"1"}} >SKU Value</Label><span>*</span>
                         </Col>
                         <Col style={{flexGrow:"5"}}>
                         <Input type="text"/>
                         </Col>
                         </Row>
                         :null}
                         
                        
                         <img src={IconAssets["Plus2"]} className="addImage"/> {'   '}
                         <Label className="addText">Add new {this.props.addButton}</Label>
                         </Col>
                         <Col xs="3">
                         <p className="addText">Inactive</p>
                         <div className="inActiveListingPosition" style={{borderRadius:"12px"}}>
                                <li style={{listStyle:"none",padding:"10px"}}>
                            
                                <button onClick={this.handleListClick} id={"Chef"} className="inActiveList">
                                    Chef
                                </button><br/>
                                </li>
                        </div>
                     
                         </Col>
                         <Col xs="1">
                         <button id="add" className="settingButtons" onClick={this.handleButton}>Add</button><br/>
                         <button id="addAll" className="settingButtons" onClick={this.handleButton}>Add All</button><br/>
                         <button id="remove"className="settingButtons" onClick={this.handleButton}>Remove</button><br/>
                         <button id="delete" className="settingButtons" onClick={this.handleButton}>Delete</button><br/>
                         <button id="edit" className="settingButtons" onClick={this.handleButton}>Edit</button>
                         </Col>
                         <Col xs="3">
                         <p className="addText">Active (display alphanumeric Order)</p>
                         <div className="inActiveListingPosition" style={{borderRadius:"12px"}}>
                        <button onClick={this.handleListClick} id={"CSF"} className="inActiveList">
                         CSF
                        </button><br/>
                        <button onClick={this.handleListClick} id={"aaaaa"} className="inActiveList">
                         aaaaa
                        </button>
                          
                               
                        </div>
                     
                         </Col>
                         
                     </Row>
                    
                      </div>
                      <div style={{marginTop:"6%"}}>
                      <p style={{float:"right"}}>Please note saving is automatic{' '}</p>   
                      </div>
                      <div></div>
                         
                
                          
              
                        
                       
                         </div>            
                    {/* </Collapse>
                    </Card> */}
                  
                             
                              
                </div>
            )
        }
  
    
}