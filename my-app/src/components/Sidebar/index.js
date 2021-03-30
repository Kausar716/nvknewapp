import React,  { Component } from 'react' ;
import {connect} from "react-redux";
import {Button,Badge,Form,Input,FormGroup,Label} from 'reactstrap'
import Navbar from '../NavBar'
import {getMenuItems} from "../../actions/sideMenuAction";
import UserList from "../UserList";
import Dashboard from "../Dashboard";
import {getAllImageAssets} from "../Utility/Utility";
import AdminSetting from '../AdminSetting/DropDown';
import SignIn from "../SignIn/index";
import ProductManagement from '../ProductManagement'

import UserProfile from '../userManagement/userProfile'
import UserAccess from '../userManagement/userAccess'
import StaffDirectory from '../userManagement/staffDirectory'
import SupplierSetting from '../plantSetting/plantSetting'
import PlantSettingParent from '../plantSetting/plantSettingParent'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  const IconAssets =  getAllImageAssets();
  
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Dashboard/>
    },
    {
      path: "/UserManagement",
      main: () => <UserProfile/>
    },
    {
      path: "/userAccess",
      main: () => <UserAccess/>
      },
    {
      path: "/StaffDirectory",
      main: () => <StaffDirectory/>
    },
	  {
		path: "/SignIn",
		main: () => <SignIn/>
	},
	{
		path: "/ProductManagement",
		main: () => <ProductManagement/>
	},

    {
      path: "/AdminSetting",
      main: () => <AdminSetting/>
    },
    {
      path: "/SupplierSetting",
      main: () => <SupplierSetting/>
    },
    {
      path: "/PlantSetting",
      main: () => <PlantSettingParent/>
    }
  ];
  const data = true;

  class Sidebar extends Component{
    
    state ={
        widths:"59px",
        backgroundColors:"",
        mainMargin:"50px",
        closeOpenState:false,
        marginleft:"12px",
        top:"0px",
        left:"15px",
        selectedType:"Dashboard"
    }
    openSlideMenu = ()=> {
        
        // this.setState({widths:"250px",mainMargin:"250px"})
        this.setState({ // no previous or latest old state passed 
            closeOpenState:!this.state.closeOpenState
          }, ()=>{
             if(this.state.closeOpenState){
                 this.setState({widths:"273px",mainMargin:"260px",left:"232px"})
             }else{
                this.setState({widths:'59px',mainMargin:'50px',left:"15px"})
             }
        }) 

    }
    activePage =(id)=>{
      this.setState({selectedType:id})
    }
      render(){
    
    return (
    //   <Router>
        // <div style={{ display: "flex" }}>
		
         <>
			  {data? <>
 
			<Navbar/>
            <div id="main" style={{marginLeft:`${this.state.mainMargin}`}}>
                <Router>
                <div  className="side-nav" id="side-menu" style={{width:`${this.state.widths}`}}>
                  	<div href="#" className="btn-close" onClick={this.openSlideMenu} style={{position:"absolute",top:`${this.state.top}`,left:`${this.state.left}`}}><i class={this.state.mainMargin=="50px"?"bx bxs-chevron-right":"bx bxs-chevron-left"} style={{color:"white",fontSize:30,marginTop:5}}></i></div>
                    <div  className="sidemenu_div">
                      	<a id="dashboard" className={this.state.selectedType =="Dashboard" &&this.state.mainMargin!="50px"?"show_highlighted":"hide_highlighted"} onClick={this.activePage.bind(this,"Dashboard")}><Link to="/" style={{padding:0,margin:0}}><span className="menu_Names_dashboard">Dashboard</span></Link></a>
                      	<a className={this.state.selectedType =="UserManagement"?"show_highlighted":"hide_highlighted" } onClick={this.activePage.bind(this,"UserManagement")}>	<Link to="/UserManagement" style={{padding:0,margin:0}}><img src={IconAssets["Staff directory_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">User Management</span></Link></a>
                      	<a  className={this.state.selectedType =="Staff Directory"?"show_highlighted":"hide_highlighted" } onClick={this.activePage.bind(this,"Staff Directory")}><Link to="/StaffDirectory" style={{padding:0,margin:0}}><img src={IconAssets["Message center_Active"]} alt="no imsgr" className="side_menu_images" onClick={this.activePage.bind(this,"Staff Directory")}/><span className="menu_Names">Staff Directory</span></Link></a>
						            <a className={this.state.selectedType =="Purchase Order"?"show_highlighted":"hide_highlighted" } onClick={this.activePage.bind(this,"Purchase Order")}><Link to="/SignIn" style={{padding:0,margin:0}}><img src={IconAssets["Map locator_Active"]} alt="no imsgr" className="side_menu_images" onClick={this.activePage} onClick={this.activePage.bind(this,"Purchase Order")}/><span className="menu_Names">Purchase Order</span></Link></a>
						            <a className={this.state.selectedType =="Product Management"?"show_highlighted":"hide_highlighted" } onClick={this.activePage.bind(this,"Product Management")}><Link to="/ProductManagement" style={{padding:0,margin:0}}><img src={IconAssets["Map locator_Active"]} alt="no imsgr" className="side_menu_images" onClick={this.activePage} onClick={this.activePage.bind(this,"Product Management")}/><span className="menu_Names">Product Management</span></Link></a>
                        <a className={this.state.selectedType =="Plant Settingt"?"show_highlighted":"hide_highlighted" } onClick={this.activePage.bind(this,"Plant Setting")}><Link to="/PlantSetting" style={{padding:0,margin:0}}><img src={IconAssets["Map locator_Active"]} alt="no imsgr" className="side_menu_images" onClick={this.activePage} onClick={this.activePage.bind(this,"Product Management")}/><span className="menu_Names">Product Management</span></Link></a>
                  {/* 
                
                	<Link to="/StaffDirectory" style={{padding:0,margin:0}}><a><img src={IconAssets["Message center_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Staff Directory</span></a></Link>
                	<Link to="/SignIn" style={{padding:0,margin:0}}><a><img src={IconAssets["Map locator_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Purchase Order</span></a></Link>
                  <Link to ="/AdminSetting" style={{padding:0,margin:0}}><a><img src={IconAssets["Inventory1_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Admin Setting</span></a></Link>  */}
					      
                    </div>
                    
                	
               
                {/* </div> */}
            </div>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={data?<route.main />:""}
                            />
                        ))}
                    </Switch>
                </Router>
        </div>
        </>:<SignIn/>}
         
          
  </>
       
      
    
    );
  }
}
export default Sidebar

// export default Sidebar
