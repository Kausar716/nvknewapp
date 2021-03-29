import react, {Component} from "react"
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import {connect} from "react-redux";
import {getProductPage} from "../../actions/productAction";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class Description extends Component{

        state = {
            showAddProduct:false,
            editorState:EditorState.createEmpty(),
            editorState1:EditorState.createEmpty(),
         
            searchFilter:{
                category:"",
                sub_cateory:""
            }
        }
    
    
 

 productFormAction = ()=>{
     this.setState({showAddProduct:!this.state.showAddProduct})
 }
 onEditorStateChange =(editorState)=>{
     this.setState({editorState:editorState})

 }
 onEditorStateChange1 =(editorState1)=>{
     this.setState({editorState1})

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
 onPageChange =({selected}) =>{
     this.props.getPageWiseData(selected)

 }
    render(){
        const {pageCount,pageToOpen} =this.props.productList
        return(
            <div className={`description ${pageToOpen =='description'?'diplay_data':'hide_data'}`} >
            <div className="headerbar_toggle">
                <p>Product Description</p>
            </div>
            <p>Main Content(visible on website)</p>
            <Editor
                editorState={this.state.editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
            />
            <p style={{marginTop:10}}>Bullet Point(visible on website)</p>
            <Editor
                editorState={this.state.editorState1}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange1}
            />
    

        </div>
        )

    }

}
const mapStateToProps = (state)=> ({
    productList:state.productList
})
export default connect(mapStateToProps,{})(Description)
