import React,  { Component } from 'react' ;
import {v4 as uuidv4} from 'uuid';
import {Button,Badge,Form,Input,FormGroup,Label} from 'reactstrap'
// import { Left } from 'react-bootstrap/lib/Media';


class SignIn extends Component{
    state = {
        email:'',
        password:''
    }

    onChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    onSubmitForm = async(e) =>{
        e.preventDefault();

    }
    render(){
        return(
            <div className="signin">
              
             <Form className="signin_form" id="submit" onSubmit={this.onSubmitForm}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label for="Email" className="me-sm-2">Email</Label>
                    <Input type="email" name="email" id="Email" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label for="Password" className="me-sm-2">Password</Label>
                    <Input type="password" name="password" id="Password" placeholder="Enter Password"/>
                </FormGroup>
                <br/>
                <div style={{float:"left"}}>
                <FormGroup check >
                        <Label check>
                            <Input type="checkbox" />{' '}
                            <span className="infostyle">Check me out</span>
                        </Label>
                        
                    </FormGroup>
                    <p className="infostyle">Not yest registered <span className="infostyle" style={{color:"blue"}}>click here</span></p>
                </div>
                <div style={{float:"right",marginTop:7}}>
                <FormGroup >
                    <Label>
                    <p className="infostyle">I forgot my passord</p>
                    <Button className="loginbutton" style={{backgroundColor:"#FF8C00",border:"1px solid white"}} >Submit</Button>
                    </Label>
                </FormGroup>
                    
                </div>
                <hr style={{marginTop:90}}/>
                <div className="infostyle" style={{textAlign:"center"}}>
                    <p className="logincontactInfo">Trouble accessing your account or registering ?</p>
                    <p className="logincontactInfo">Contact <span  style={{color:"blue"}}>webmaster@nvknurseries.com</span></p>
                </div>
            </Form>
   
            </div>
        )
    }

}
export default SignIn

