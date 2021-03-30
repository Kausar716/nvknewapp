import React,  { Component } from 'react' ;
import {v4 as uuidv4} from 'uuid';
import {Button,Badge,Form,Input,FormGroup,Label} from 'reactstrap'
import '../index.css'
import {getAllImageAssets} from "../Utility/Utility";
// import { Left } from 'react-bootstrap/lib/Media';
const IconAssets =  getAllImageAssets();


class Navbar extends Component{

    render(){
        return(
            <div className="navbar_data">
                <div  className="navbar_div">
                    <a href="#" style={{float:"left"}}><img src={IconAssets["logo"]} alt="no iamge" id="logo"/></a>
                    <a href="#"  className="navbar_right"><i class="material-icons">view_headline</i></a>
                    <a href="/UserManagement" className="navbar_right"><img src={IconAssets["img_avatar"]} alt="no iamge" id="logo" style={{borderRadius:"50%"}}/><span style={{marginTop:-30}}>User Name</span></a>
                    <a href="#"  className="navbar_right"><i class="material-icons">email</i></a>
                    <a href="#" className="navbar_right"><i class="material-icons">notifications</i></a>
                </div>
            </div>
        )
    }

}
export default Navbar