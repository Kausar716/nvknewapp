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

import UserProfile from '../userManagement/userProfile'
import UserAccess from '../userManagement/userAccess'
import StaffDirectory from '../userManagement/staffDirectory'
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
      path: "/AdminSetting",
      main: () => <AdminSetting/>
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
        left:"20px"
    }
    openSlideMenu = ()=> {
        
        // this.setState({widths:"250px",mainMargin:"250px"})
        this.setState({ // no previous or latest old state passed 
            closeOpenState:!this.state.closeOpenState
          }, ()=>{
             if(this.state.closeOpenState){
                 this.setState({widths:"273px",mainMargin:"260px",left:"232px"})
             }else{
                this.setState({widths:'59px',mainMargin:'50px',left:"20px"})
             }
        }) 

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
                  	<div href="#" className="btn-close" onClick={this.openSlideMenu} style={{position:"absolute",top:`${this.state.top}`,left:`${this.state.left}`}}><i class='bx bxs-chevron-right' style={{color:"white",fontSize:30,marginTop:5}}></i></div>
                	<Link to="/" style={{padding:0,margin:0}}><a><img src={IconAssets["Dashboard_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Dashboard</span></a></Link>
                	<Link to="/UserManagement" style={{padding:0,margin:0}}><a><img src={IconAssets["Staff directory_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">User Management</span></a></Link>
                	<Link to="/StaffDirectory" style={{padding:0,margin:0}}><a><img src={IconAssets["Message center_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Staff Directory</span></a></Link>
                	<Link to="/SignIn" style={{padding:0,margin:0}}><a><img src={IconAssets["Map locator_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Purchase Order</span></a></Link>
                  <Link to ="/AdminSetting" style={{padding:0,margin:0}}><a><img src={IconAssets["Inventory1_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Admin Setting</span></a></Link>
					        {/* <a><img src={IconAssets["Staff directory_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Inventory</span></a>
                	<a><img src={IconAssets["Inventory1_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Customer Management</span></a> */}
                	{/* <a><img src={IconAssets["Inventory1_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Supplier Management</span></a>
                	<a><img src={IconAssets["Map locator_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Customer Order Quotes</span></a>
                	<a><img src={IconAssets["Message center_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Customer Order Quotes</span></a>
                	<a><img src={IconAssets["Tools and settings_Active"]} alt="no imsgr" className="side_menu_images"/><span className="menu_Names">Customer Order Quotes</span></a> */}
               
                {/* </div> */}
            </div>
                    <Switch>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
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
