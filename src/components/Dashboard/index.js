import React,  { Component } from 'react' ;
import {connect} from "react-redux";
// import {Button,Badge,Form,Input,FormGroup,Label} from 'reactstrap'
import {getAllImageAssets} from "../Utility/Utility";
import '../Dashboard/index.css'
// import quotes from '../Dashboard/quotes.png'
// import Inventory from '../Dashboard/Inventory.png'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

// import { Left } from 'react-bootstrap/lib/Media';


const IconAssets =  getAllImageAssets();
console.log(IconAssets)



  const data = true;

  class Dashboard extends Component{

    render(){
    
		return (
			<>
			<div className="Container_dashboard">
				<div className="box-1">
				<img src={IconAssets["Cart Total"]} alt="no iamge" className="card_img" />
					<h4>quotes and order</h4>
					{/* <p>text to show</p> */}
				</div>
				<div className="box-1">
				<img src={IconAssets["Cart Total"]} alt="no iamge" className="card_img" />
					<h4>quotes and order</h4>
					{/* <p>text to show</p> */}
				</div>
				<div className="box-1">
				<img src={IconAssets["Cart Total"]} alt="no iamge" className="card_img" />
					<h4>quotes and order</h4>
					{/* <p>text to show</p> */}
				</div>
			</div>
					<div className="Container_dashboard">
					
					<div className="box-1">
					<img src={IconAssets["Cart Total"]} alt="no iamge" className="card_img" />
						<h4>quotes and order</h4>
						{/* <p>text to show</p> */}
					</div>
					<div className="box-1">
					<img src={IconAssets["Cart Total"]} alt="no iamge" className="card_img" />
						<h4>quotes and order</h4>
						{/* <p>text to show</p> */}
					</div>
					<div className="box-1">
					<img src={IconAssets["Cart Total"]} alt="no iamge" className="card_img" />
						<h4>quotes and order</h4>
						{/* <p>text to show</p> */}
					</div>
				</div>
				</>
		
		);
  }
}
export default Dashboard

// export default Sidebar
