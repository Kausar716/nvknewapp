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
					<h4>Order Quotes Management</h4>
					<ul className="list_style_data">
						<li>75 Opens</li>
						<li>50 Drafts</li>
					</ul>
					
					
					
					
					{/* <p>text to show</p> */}
				</div>
				<div className="box-1">
				<img src={IconAssets["Purchase-Orders"]} alt="no iamge" className="card_img" />
					<h4>Purchase Orders</h4>
					<ul className="list_style_data">
						<li>75 Opens</li>
						<li>50 Drafts</li>
					</ul>
					
					{/* <p>text to show</p> */}
				</div>
				<div className="box-1">
				<img src={IconAssets["Inventory-managemnet"]} alt="no iamge" className="card_img" />
					<h4>Inventory Management</h4>
					<ul className="list_style_data">
						<li>75 Opens</li>
						<li>50 Drafts</li>
					</ul>
					
					{/* <p>text to show</p> */}
				</div>
			</div>
					<div className="Container_dashboard">
					
					<div className="box-1">
					<img src={IconAssets["Tools-and-settings"]} alt="no iamge" className="card_img" />
						<h4>Tools & Settings</h4>
						<ul className="list_style_data">
						<li>75 Opens</li>
						<li>50 Drafts</li>
					</ul>
					
						{/* <p>text to show</p> */}
					</div>
					<div className="box-1">
					<img src={IconAssets["Reports"]} alt="no iamge" className="card_img" />
						<h4>Reports</h4>
						{/* <p>text to show</p> */}
					</div>
					<div className="box-1">
						<p>Order Assigned</p>
						<p>5</p>
						<p>Task Assigned</p>
						<p>Request Assigned</p>
					</div>
				</div>
				
				</>
		
		);
  }
}
export default Dashboard

// export default Sidebar
