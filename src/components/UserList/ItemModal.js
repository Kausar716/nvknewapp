import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions/itemActions';
import {v4 as uuidv4} from 'uuid';
import {Button, FormGroup, Label, ModalBody, ModalHeader,Modal,Form,Input} from 'reactstrap'




class ItemModal extends Component{
    state = {
        modal:false,
        names:''
    }

    toggle = () => {
        this.setState({
            modal:!this.state.modal
        })
    }

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        
        const newItem = {
            id:uuidv4(),
            names:this.state.names
        }
        this.props.addItem(newItem)
        this.toggle();

    }
    render(){
        return(
            <div>
                <Button
                color="dark"
                style ={{
                    marginBottom:'2rem'
                }}
                onClick ={this.toggle}
                >Add Item</Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Shopping List </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input 
                                type="text"
                                name="names"
                                id="item"
                                // value ={this.state.names}
                                placeholder="Add shopping item"
                                onChange={this.onChange}
          
                                />
                                <Button
                                color="dark"
                                style={{marginTop:"2rem"}}
                                block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}
const mapStateToProps = state =>({
    item: state.item

})

export default connect(mapStateToProps,{addItem})(ItemModal)