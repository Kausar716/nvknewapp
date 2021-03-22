import React from "react";
import react from "react"

import './userProfile.css';
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col} from 'reactstrap';
// import Plus3 from '../Plus3.png'
// import Plus1 from '../Plus1.png'
import { node } from "prop-types";
import {getAllImageAssets} from "../Utility/Utility";
const IconAssets =  getAllImageAssets();


export  default class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            phone:"",
            email:"",
            locationAccess:false,
            displayRecords:false,
            profileImage:"",
            displayExestingProfile:false,
            errorObj:{
                firstNameError:0,
                lastNameError:0,
                phoneError:0,
                emailError:0,                
            },
            errorCount:0,
            display:false
        }
    }
    handleInput = (e) => {
        const {target:{name,value}} =e
        let {errorObj,errorCount} = this.state
        this.setState({[name]:value})
        if(name == "firstName" ){
            errorObj.firstNameError=0
            errorCount--
        }
        else if(name == "lastName" ){
            errorObj.lastNameError=0
            errorCount--
        }
        else if(name == "phone" ){
            errorObj.phoneError=0
            errorCount--
        }
        else if(name == "email" ){
            errorObj.emailError=0
            errorCount--
        }
        this.setState({errorObj,errorCount})
    }
    validate = () =>{
        let {errorObj,errorCount}=this.state
        let phoneReg=/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/
        let emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        console.log(emailReg.test(this.state.email))
        if(this.state.firstName.length == 0){
           errorObj.firstNameError=1
           errorCount++
        }
        else{
            errorObj.firstNameError=0
        }
         if(this.state.lastName.length == 0){
            errorObj.lastNameError=1
            errorCount++
        }
        else{
            errorObj.lastNameError=0
        }
         if(!phoneReg.test(this.state.phone)){
            errorObj.phoneError=1
            errorCount++
        }
         if(! emailReg.test(this.state.email)){
            errorObj.emailError=1
            errorCount++
        }
        this.setState({errorObj,errorCount})
        return errorCount
    }
    handleSubmit = (e) => {
       let count= this.validate()
        if(count == 0){
            console.log(this.state)
            console.log("success")
        }
        console.log(this.state)


    }
    handleImageUpload = (e) => {
        console.log(e.target.files)
        let profileImage = e.target.files[0]
        // var reader = new FileReader();
        // // var url = reader.readAsDataURL(profileImage);
        // // reader.onloadend = function (e) {

        // //     var image = new Image();
        // //     image.src = e.target.result;
        // //     image.onload = function (e) {
        // //         var height = 100
        // //         var width = 100
         
        // //     };

            this.setState({profileImage})         
        // }
    }
    handleCreateuser = () => {
        this.setState({display:true,displayExestingProfile:false})
    }
    handleUserProfileSelect = () => {
        this.setState({displayExestingProfile:true,display:true})
    }

        render(){
            console.log(this.state.displayRecords)
            return(
                <div>
                    <Label className="profileHeader">User Profiles</Label>
                    <div className="userProfileDiv">
                        <p className="divTitle boldTitle">Add,Edit or Remove User</p>
                    <div style={{padding:"10px"}}>
                    <div>
                        <Row>
                            <Col xs="1" >
                            <Label>image tag</Label>
                            </Col>
                            <Col>
                            <Label>Did you know?</Label><br/>
                            <Label className="smallText">nactive users will not have access to this system.</Label><br/>
                            <Label className="smallText">User permissions can be sent via <a href="/userAccess">User Access</a>. </Label><br/>
                            </Col>
                            <Col xs="3">
                            <Col >
                             <img src={IconAssets["Plus2"]} style={{width:"15%",height:"15%"}} onClick={this.handleCreateuser}/> 
                            {/* </Col>
                            <Col> */}
                            <Label className="fieldHeaderSize" style={{color:"#76A2F6",marginLeft:"10px"}} onClick={this.handleCreateuser}>Create New User</Label>
                            </Col>
                            
                            </Col>
                        </Row>
                   
                    {/* <Button className="createUser">Create new User</Button><br/> */}
                    <Label className="smallText ">Select user profile to edit or choose ADD NEW.</Label> <br/>
                    </div>
                    <Label className="boldTitle ">Select User Profile</Label>
                    <Row>
                        <Col>                           
                            <select style={{width:"100%"}} onChange={this.handleUserProfileSelect}>
                                <option>Select...</option>
                                <option>Select...</option>
                            </select>                             
                        </Col>
                        <Col xs="10">
                            <Input type="checkbox" value={this.state.displayRecords} name="displayRecords" onChange={this.handleInput}/>
                            <Label>Display deleted records</Label>
                        </Col>
                    </Row>                    
                  
                    <Label>Active</Label>
                    <span className="requiredField">*Required fields</span> 
                    {this.state.display || this.state.displayExestingProfile?<div>
                    <Row>
                        <Col>
                            <Label className="boldTitle">First Name <spam>*</spam></Label>
                            <Input type="text" name="firstName" value={this.state.firstName} placeholder="FIRST NAME" onChange={this.handleInput}/>
                            {this.state.errorObj.firstNameError!=0?<span className="errorSpan">Enter First Name</span>:""}
                        </Col>
                        <Col>
                            <Label className="boldTitle">Last Name <spam>*</spam></Label>
                            <Input type="text" name="lastName" value={this.state.lastName} placeholder="LAST NAME" onChange={this.handleInput}/>
                            {this.state.errorObj.lastNameError!=0?<span className="errorSpan">Enter Last Name</span>:""}
                        </Col>
                       {this.state.displayExestingProfile ?<Col>
                            <Label className="boldTitle">Locations Assigned:</Label><br/>
                            <select style={{width:"80%"}}>
                                <option>Select Location..</option>
                                <option>Select Location..</option>
                            </select><br/>
                            <Input type="checkbox" name="locationAccess" style={{marginLeft:"10px"}} value={this.state.locationAccess} onChange={this.handleInput}/> <Label style={{marginLeft:"30px",width:"80%"}}>User has access to all locations</Label>
                        </Col>:null}
                        {this.state.displayExestingProfile ? <Col>
                        <img src={IconAssets["Plus1"]} style={{width:"10%",height:"45%"}}/>                           
                        <Label style={{color:"#76A2F6",marginLeft:"10px"}}>Add Location</Label>
                        </Col>:null} 

                    </Row>
                    <Row>
                        <Col>
                        <Row>
                            <Col>
                            <Label className="boldTitle">Position<spam>*</spam></Label><br/>
                            <select style={{width:"100%"}}>
                                <option>Select Location..</option>
                                <option>Select Location..</option>
                            </select>
                        </Col>
                        <Col>
                            <Label className="boldTitle">Phone<spam>*</spam></Label>
                            <Input  placeholder="(XXXX)XXX-XXX" value={this.state.phone} onChange={this.handleInput} name="phone"/>
                            {this.state.errorObj.phoneError!=0?<span className="errorSpan">Enter Valid Phone Number</span>:""}
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className="boldTitle">Email<spam>*</spam></Label>
                                <Input type="text" placeholder="EMAIL" value={this.state.email} onChange={this.handleInput} name="email"/>
                                {this.state.errorObj.emailError!=0?<span className="errorSpan">Enter Valid Email</span>:""}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className="boldTitle">Avatar</Label>
                            </Col>                            
                        </Row>
                        <Row>                       
                            <Col>
                                <img src={this.state.profileImage?URL.createObjectURL(this.state.profileImage):null} style={{width:"100px",borderRadius:"180px",height:"100px"}}/>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <p>Image should print quality PNF or JPG</p>
                                    </Col>
                                </Row> 
                                <Row>
                                      
                                        {/* <Button > */}
                                        {/* <Input type="file" onChange={this.handleImageUpload} style={{width:"150px", height:"20px",backgroundColor:"black"}} />
                                            Upload
                                        {/* </Button> */}
                                        {/* <Button>Remove</Button> */} 
                                        <Input type="file" id="file-upload"  onChange={this.handleImageUpload} style={{opacity:0,zIndex:-1,position:"absolute"}} />
                                        <Col>
                                        <Label for="file-upload" className="updateButton">Upload</Label>
                                        </Col>
                                        <Col>
                                        <Label className="updateButton">Remove</Label>
                                        </Col>
                                        
                                </Row>
                            </Col>
                            {this.state.displayExestingProfile ?<Col>
                                <Button style={{background:"#9bc156",width:"inherit"}}>Access</Button>
                            </Col>:null}
                        </Row>
                        
                        </Col>
                        {this.state.displayExestingProfile ? <Col>
                            <br/>
                            <div className="listing" style={{borderRadius:"12px"}}>
                                <li style={{listStyle:"none",padding:"10px"}}>
                                    <Row>
                                        <Col>
                                        <span className="addressTitle">Address Title</span><br/>
                                        <span>Address</span>
                                        </Col>
                                        <Col xs="3">
                                        <Label style={{marginTop:"30px",color:"#76A2F6"}}>Remove</Label>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </li>
                                <li style={{listStyle:"none",padding:"10px"}}>
                                    <Row>
                                        <Col>
                                        <span className="addressTitle">Address Title</span><br/>
                                        <span>Address</span>
                                        </Col>
                                        <Col xs="3">
                                        <Label style={{marginTop:"30px",color:"#76A2F6"}}>Remove</Label>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </li>
                                <li style={{listStyle:"none",padding:"10px"}}>
                                    <Row>
                                        <Col>
                                        <span className="addressTitle">Address Title</span><br/>
                                        <span>Address</span>
                                        </Col>
                                        <Col xs="3">
                                        <Label style={{marginTop:"30px",color:"#76A2F6"}}>Remove</Label>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </li>
                                <li style={{listStyle:"none",padding:"10px"}}>
                                    <Row>
                                        <Col>
                                        <span className="addressTitle">Address Title</span><br/>
                                        <span>Address</span>
                                        </Col>
                                        <Col xs="3">
                                        <Label style={{marginTop:"30px",color:"#76A2F6"}}>Remove</Label>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </li>
                                <li style={{listStyle:"none",padding:"10px"}}>
                                    <Row>
                                        <Col>
                                        <span className="addressTitle">Address Title</span><br/>
                                        <span>Address</span>
                                        </Col>
                                        <Col xs="3">
                                        <Label style={{marginTop:"30px",color:"#76A2F6"}}>Remove</Label>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </li>
                                

                            </div>
                        </Col>:null}
                    </Row> 
                    {this.state.displayExestingProfile ? <div style={{float:"right"}}>
                        <Label style={{marginRight:"20px",color:"red"}}>Delete Profile</Label>
                        <Button style={{marginRight:"20px",background:"transparent",color:"black"}}>Cancel</Button>
                        <Button onClick={this.handleSubmit} style={{marginRight:"20px",background:"#1167b1",color:"white"}}>Update</Button>
                        </div>
                   :null}
                        </div>:null}
                  </div>
                  </div>
                </div>
            )
        }
  
    
}