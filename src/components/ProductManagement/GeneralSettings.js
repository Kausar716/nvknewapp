
import React,  { Component } from 'react';
import {connect} from "react-redux";
import {getProductPage} from "../../actions/productAction";



class GeneralSettings extends Component{

    render(){
        const {pageToOpen} =this.props.productList
        return(
            <div  className={ ` general_setting ${pageToOpen =='general'?'diplay_data':'hide_data'}`}>
          <div className="row_1">
              <div className="input-form-group1">
                  <label>Item Name</label>
                  <input type="text" className="name1"/>
              </div>
              <div className="input-form-group2">
                  <label>Common Name</label>
                  <div  className="tags"><a>Tag 1</a><a>Tag 2</a></div>
              </div>
          </div>
          <div className="row_2">
              <div className="input-form-group select1">
                  <label>Category <span style={{color:"red"}}>*</span></label>
                  <select id="category">
                      <option>data to show</option>
                      <option>data to show</option>
                      <option>data to show</option>
                      <option>data to show</option>
                  </select>
              </div>
              <div className="input-form-group select2">
                  <label>Manufacture <span style={{color:"red"}}>*</span></label>
                  <select id="category1">
                      <option>data to show</option>
                      <option>data to show</option>
                      <option>data to show</option>
                      <option>data to show</option>
                  </select>
              </div>  
          </div>
          <div className="row_3">
              <div className="input-form-group">
                  <label>Internal Notes(not shown to customer)</label>
                  <textarea></textarea>
              
              </div>      
          </div>

      </div> 

)

    }
       
    
       
    
}
const mapStateToProps = (state)=> ({
    productList:state.productList
})
export default connect(mapStateToProps,{})(GeneralSettings)
