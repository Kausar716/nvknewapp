import React,  { Component } from 'react' ;
import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
import {getProductItems} from "../../actions/productAction";
import ReactPaginate from 'react-paginate'
// import {connect} from "react-redux";
class ProductTable extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            pageNumber:0,
      
        }
    }

    componentDidMount(){
        this.props.getProductItems();
    }
    changePage =({selected})=>{
      
        this.setState({pageNumber:selected})

    }

    render(){
        const productPerPage =2;
        const pagesVisited= (this.state.pageNumber*2);
        const {productList} = this.props.productList
        const displayProductList = productList.slice(pagesVisited,pagesVisited+productPerPage)
        const pageCount = Math.ceil(productList.length/productPerPage)
        return(<div>
            <div className="pagination_area">
            <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel ={">>"}
                    pageCount ={pageCount}
                    onPageChange ={this.changePage}
                    containerClassName ={"paginationBttns"}
                    previousLinkClassName ={"previousBttn"}
                    nextLinkClassName ={"nextBttn"}
                    disabledClassName ={"paginationDiabled"}
                    activeClassName = {"paginationActive"}
                    
                       />   
            </div>
              
                    <div className="table_area">
                        <Table bordered className="table_section">
                            <thead>
                                <tr className="table_header_row"> 
                                <th>Status</th>
                                <th>Product Name</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>on Website</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {displayProductList.map(({id,status, productName, location, category, onWebsite})=>(
                                    // <li key={id}><button className="remove-btn" onClick={this.onDeleteItem.bind(this,id)}>X</button>{names}</li>
                                    <tr>
                                    <td style={{backgroundColor:"lightgray"}}>{status}</td>
                                    <td>{productName}</td>
                                    <td>{location}</td>
                                    <td>{category}</td>
                                    <td style={{textAlign:"center"}}><input type="checkbox" /></td>
                                    <td style={{textAlign:"center"}}><i className='bx bx-pencil icon_color'></i><i className='bx bxs-trash-alt icon_color'></i><i className='bx bx-copy icon_color'></i></td>
                                    </tr> 

                                ))}
                            </tbody>
                        </Table>
                    </div>
        </div>
            
        )
    }
}
const mapStateToProps = (state)=> ({
    productList:state.productList
})
export default connect(mapStateToProps,{getProductItems})(ProductTable)
