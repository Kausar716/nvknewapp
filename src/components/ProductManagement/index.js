import React,  { Component } from 'react' ;
import {connect} from "react-redux";
import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {getAllImageAssets} from "../Utility/Utility";
import '../ProductManagement/index.css'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import ProductTable from './ProductTable'
import GeneralSettings from './GeneralSettings'
import Description from './Description'
import SkuList from './SkuList'
import {getProductItems,filterDataByCategory,getPageWiseData,getProductPage} from "../../actions/productAction";
import ReactPaginate from 'react-paginate'
import ReactToPrint from 'react-to-print';
import Printer, { print } from 'react-pdf-print'
// import Printer, { print } from 'react-pdf-print'


import ComponentToPrint  from './ComponentToPrint';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import quotes from '../Dashboard/quotes.png'
// import Inventory from '../Dashboard/Inventory.png'
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

// import { Left } from 'react-bootstrap/lib/Media';


const IconAssets =  getAllImageAssets();
console.log(IconAssets)



  class ProductManagement extends Component{
      constructor(props){
          super(props)
        this.state = {
            showAddProduct:false,
            searchFilter:{
                category:"",
                sub_cateory:""
            },
 
       }

      }
      
  
    productFormAction = ()=>{
        this.props.getProductPage("general")
        this.setState({pageToOpen:"general"})
        this.setState({showAddProduct:!this.state.showAddProduct})
    }
    categorySelected = (e)=>{
        // alert(e.target.id)
        // this.props.filterDataByCategory(e.target.value);
        this.setState(prevState => ({
            searchFilter: {                   // object that we want to update
                ...prevState.searchFilter,    // keep all other key-value pairs
                [e.target.id]: e.target.value       // update the value of specific key
            }
        }))
    }
    searchProduct = () =>{
        console.log(this.state.searchFilter)
        // alert("hi")
        this.props.filterDataByCategory(this.state.searchFilter);
    }
    openPage = (e)=>{
        this.setState({pageToOpen:e.target.id})
        this.props.getProductPage(e.target.id)

    }

    render(){
    
		return (
            <>

                <div className="product_manager_page">
                    <div className="headerbar">
                        <p>Product Manager</p>
                    </div>
                    <div className="action_buttons_area">
                        <a href="#"><ReactToPrint
                            trigger={() => (
                               
                                    <i class='bx bxs-printer'></i>   
                                
                            )}
                            content={() => this.componentRef}documentTitle="Delivery_Sheet"/>
                        </a>
                        <a href="#"><i class='bx bx-search'></i></a>
                        <a href="#" className="right_float" onClick={this.productFormAction}><i class='bx bxs-plus-circle' ></i></a>
           

                    </div>
                   
                    <div className="selection_area">
                        <div className="input-form-group">
                            <label>Category</label>
                            <select className="classic" onChange={this.categorySelected} id="category">
                                <option value="Fork">Fork</option>
                                <option value="Fork 1">Fork 1</option>
                                <option value="Fork 2">Fork 2</option>
                            </select>
                        </div>
                        <div className="input-form-group">
                            <label>Sub-Category</label>
                            <div class="selectdiv">
                                <label>
                                    <select className="classic" onChange={this.categorySelected} id="sub_category">
                                        <option value="Sub Fork">Sub Fork </option>
                                        <option value="Sub Fork 1">Sub Fork 1</option>
                                        <option value="Sub Fork 2">Sub Fork 2</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    
                    </div>
                    <div className="action_area">
                    <button className="button_style" onClick={this.searchProduct}>Search</button>
                    <button className="button_style" onClick={this.resetSearch}>Reset</button>
                    </div>
                    <div style={{clear:"both"}}></div>
                
                    <div style={{clear:"both"}}></div>
                    {/* <ProductTable/> */}
                    <ComponentToPrint ref={(el) => (this.componentRef = el)}/>
                </div>
                <div className={`${this.state.showAddProduct?"show_add_product":"hide_add_product"} "add_product_page"`}>
                    <div className="headerbar">
                        <p>Add Product</p>
                    </div>
                    <div className="action_buttons_area">
                        <a  className="right_float" onClick={this.productFormAction}><i class='bx bxs-trash-alt'></i></a>
                        <a  className="right_float" onClick={this.productFormAction}><i class='bx bx-copy'></i></a>
                       
                    </div>
                    <div style={{clear:"both"}}></div>
                    
                    <div className="product_add_navigation">
                        <span onClick={this.openPage} id="general" className={this.state.pageToOpen=="general"?"selected_link":"normal_link"}>GENERAL</span>
                        <span onClick={this.openPage} id="description" className={this.state.pageToOpen=="description"?"selected_link":"normal_link"}>DESCRIPTION</span>
                        <span  onClick={this.openPage} id="skuList" className={this.state.pageToOpen=="skuList"?"selected_link":"normal_link"}>SKU LISTS</span>
                        <span  onClick={this.openPage} id="images" className={this.state.pageToOpen=="images"?"selected_link":"normal_link"}>IMAGES</span>
                    </div>
                     <GeneralSettings/>
                    <Description/>
                    <SkuList/>
          
                  

      
                    {/* sku list */}

                    {/* sku list end */}
                    {/* <div className="image_add">
                        <p>Product Images for</p>

                    </div> */}
                </div>
            </>
	
		
		
		);
  }
}
const mapStateToProps = (state)=> ({
    productList:state.productList
})
export default connect(mapStateToProps,{filterDataByCategory,getProductPage})(ProductManagement)

// export default Sidebar
