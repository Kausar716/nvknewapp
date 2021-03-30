
import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import {connect} from "react-redux";
import {getItems,deleteItem} from "../../actions/itemActions";
import PropTypes from 'prop-types';


class UserList extends Component{
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteItem = (id) =>{
        this.props.deleteItem(id);

    }

    render(){
        const {items} = this.props.item
        return(
            <div>
                {/* <button onClick={()=>{
                    const names = prompt("Enter Item")
                    if(names){
                        this.setState(state=>({
                            items:[...state.items,{id:uuidv4(),names}]

                        }))
                    }
                }}>Add Item</button> */}
                <ul>
                    {items.map(({id,names})=>(
                        <li key={id}><button className="remove-btn" onClick={this.onDeleteItem.bind(this,id)}>X</button>{names}</li>

                    ))}
                </ul> 

                
            </div>

        )
    }
}
UserList.propTtypes = {
    getItems:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}
const mapStateToProps = (state)=> ({
    item:state.item
})

export default connect(mapStateToProps,{getItems,deleteItem})(UserList)