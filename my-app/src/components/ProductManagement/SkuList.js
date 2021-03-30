import react, {Component} from "react"
import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
import {getProductPage} from "../../actions/productAction";




class SkuList extends Component{
    render(){
        const {pageToOpen} =this.props.productList
        return(
            <div className={`skulList ${pageToOpen =='skuList'?'diplay_data':'hide_data'}`}>
                <div className="sku_list">
            <div className="header_normal">
                <h4>GENERATED SKU : 1243245435</h4>

            </div>
            <div className="row_1">
                <div className="input-form-sku">
                    <label>SKU Item Name</label>
                    <input type="text" className="name1"/>
                </div>
                <div className="input-form-sku1">
                    <label>Sub Category</label>
                    <input type="text" className="name1"/>
                    
                </div>
                <div className="input-form-sku2">
                    <label>Location</label>
                    <input type="text" className="name1"/>
                    
                </div>
            </div>
            <div className="row_2">
                <div className="input-form-sku3">
                    <label>Each Cost</label>
                    <input type="text" className="name1"/>
                </div>
                <div className="input-form-sku3">
                    <label>Each Price</label>
                    <input type="text" className="name1"/>
                    
                </div>
                <div className="input-form-sku3">
                    <label>Sale Price</label>
                    <input type="text" className="name1"/>
                    
                </div>
                <div className="input-form-sku3">
                    <label>Sales Expiry Date</label>
                    <input type="text" className="name1"/>
                    
                </div>
                <div className="input-form-sku3">
                <i class='bx bxs-toggle-right'></i>
                    
                </div>
            </div>
            
                <div className="action_area1">
                    <button className="button_style1">Add SKU & Retain</button>
                    <button className="button_style1">Add SKU & Clear</button>
                

                </div>
                <div style={{clear:"both"}}></div>
            <div className="pagination_area">
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">
                    1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>
        <div style={{clear:"both"}}></div>
        <div className="table_area">
            <Table bordered className="table_section">
                <thead>
                    <tr className="table_header_row"> 
                    <th>Status</th>
                    <th>SKU</th>
                    <th>Each Cost</th>
                    <th>Each Price</th>
                    <th>Sale Price</th>
                    <th>Sale Active</th>
                    <th>Volume Per Unit</th>
                    <th>Volume QTY</th>
                    <th>ActionsY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Active</td>
                    <td>Bent weeding fork-2-line long handle</td>
                    <td>12.5</td>
                    <td>12.5</td>
                    <td>12.5</td>
                    <td><i class='bx bx-check' style={{color:"#4c7a34",fontSize:30}}></i></td>
                    <td>0</td>
                    
                    
                    <td style={{textAlign:"center"}}>-</td>
                    <td style={{textAlign:"center"}}><i className='bx bx-pencil icon_color'></i><i className='bx bxs-trash-alt icon_color'></i></td>
                    </tr>
                </tbody>
            </Table>
        </div>
                

        </div> 
        </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    productList:state.productList
})
export default connect(mapStateToProps,{})(SkuList)