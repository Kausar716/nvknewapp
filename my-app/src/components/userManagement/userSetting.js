import React from "react";

import './userProfile.css';
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col, Card,CardHeader,Collapse} from 'reactstrap';
import { node } from "prop-types";


export  default class UserSetting extends React.Component{
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
                    <Card>
                   <CardHeader  onClick={this.cardToggle} style={{background:"#357ebd",color:"white"}}>Question </CardHeader>
                    <Collapse isOpen = {this.state.cardToggle} className={"quizCollapse"}>                                       
                      <div>
                      <p className="divTitle boldTitle" style={{padding:"2px"}}>Position for User Profile</p>
                     <Row>
                         {/* <Col>
                            <img src=""/>
                         </Col> */}
                         <Col>
                         <Label>
                             Position Name
                         </Label>
                         <Input type="text" placeholder="Accounting"/>
                         <Label onClick={this.handleNewPosition}>
                             Add New Position
                         </Label>
                         </Col>
                         <Col>
                         <p>Inactive</p>
                         <div className="listingPosition" style={{borderRadius:"12px"}}>
                                {/* <li className="listPositionClick" style={{listStyle:"none",padding:"10px"}}>
                                Chef
                                </li> */}
                                <button onClick={this.handleListClick} id={"Chef"} className={this.state.selectedId=="Chef"?"buttonListClick":"buttonList"}>
                                Chef
                                </button><br/>
                                </div>
                     
                         </Col>
                         <Col xs="1">
                         <button id="add" className="settingButtons" onClick={this.handleButton}>Add</button><br/>
                         <button id="addAll" className="settingButtons" onClick={this.handleButton}>Add All</button><br/>
                         <button id="remove"className="settingButtons" onClick={this.handleButton}>Remove</button><br/>
                         <button id="delete" className="settingButtons" onClick={this.handleButton}>Delete</button><br/>
                         <button id="edit" className="settingButtons" onClick={this.handleButton}>Edit</button>
                         </Col>
                         <Col>
                         <p>Active</p>
                         <div className="listingPosition" style={{borderRadius:"12px"}}>
                        <button onClick={this.handleListClick} id={"CSF"} className={this.state.selectedId=="CSF"?"buttonListClick":"buttonList"}>
                         CSF
                        </button><br/>
                        <button onClick={this.handleListClick} id={"aaaaa"} className={this.state.selectedId=="aaaaa"?"buttonListClick":"buttonList"}>
                         aaaaa
                        </button>
                          
                               
                        </div>
                     
                         </Col>
                         
                     </Row>
                    
                      </div>
                    <Row>
                        <Col>
                        <p style={{float:"right"}}>Please note saving is automatic</p>     
                        </Col></Row>        
                                     
                    </Collapse>
                    </Card>
                    
                             
                              
                </div>
            )
        }
  
    
}