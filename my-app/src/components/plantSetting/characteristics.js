import React from "react";
import '../userManagement/supplier.css'
import '../userManagement/userProfile.css'
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col, Card,CardHeader,Collapse} from 'reactstrap';
import { node } from "prop-types";
import {getAllImageAssets} from "../Utility/Utility";
const IconAssets =  getAllImageAssets();
console.log(IconAssets)



export  default class CharacterSetting extends React.Component{
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
                   <CardHeader  onClick={this.cardToggle} style={{background:"#357ebd",color:"white"}}>General plant information </CardHeader>
                    <Collapse isOpen = {this.state.cardToggle} className={"quizCollapse"}>                                        */}
                      <div>
                      <p className="divTitle boldTitle" style={{padding:"7px"}}>Characters</p>
                      <div style={{padding:"2%"}}>
                     <Row>
                         {/* <Col>
                            <img src=""/>
                         </Col> */}
                         <Col>
                         <img src={IconAssets['img_avatar']} className="reasonsImg"/><br/>
                         <Label>Section Name</Label>
                         <Input type="text"/><br/>
                         {/* <Row> */}
                             {/* <Col> */}
                             <img src={IconAssets["Plus2"]} className="addImage"/> {'   '}
                            <Label className="addText">Add new Section</Label> <br/><br/>
                             {/* </Col> */}
                         {/* </Row> */}
                         <Label>Feature Name</Label>
                         <Input type="text"/><br/>
                         <img src={IconAssets["Plus2"]} className="addImage"/> {'   '}
                         <Label className="addText">Add new Feature</Label>
                         <p>Select active section to add Feature</p>
                         </Col>
                         
                         <Col xs="3">
                         <p className="addText">Inactive</p>
                         <div className="inActiveListingPosition " style={{borderRadius:"12px",}}>
                                <li style={{listStyle:"none"}}>
                            
                                <button onClick={this.handleListClick} id={"Chef"} className="characterInActiveList">
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
                        <button onClick={this.handleListClick} id={"CSF"} className="characterInActiveList" style={{borderBottom:"1%"}}>
                         CSF
                        </button> <br/>
                        <button onClick={this.handleListClick} id={"aaaaa"} className="characterInActiveList">
                         aaaaa
                        </button>
                          
                               
                        </div>
                     
                         </Col>
                         
                     </Row>
                    
                      </div>
                      <div style={{marginTop:"6%"}}>
                      <p style={{float:"right"}}>Please note saving is automatic{' '}</p>   
                      </div>
                         
                
                          
              
                        
                       
                         </div>            
                    {/* </Collapse> */}
                    {/* </Card> */}
                  
                             
                              
                </div>
            )
        }
  
    
}