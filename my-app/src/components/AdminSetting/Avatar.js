import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './avatar.css';

export default class Avatar extends Component {

    constructor(props){
        super(props)
        
            this.state = {file: '',imagePreviewUrl: ''};      
    }


    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }



    render() {
        console.log(this.state)
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
        $imagePreview = (<div className="previewText"></div>);
        }
        return (
            <>
                    <Row>
                            <Col>

                                <div className="previewComponent">
                                    <form onSubmit={(e)=>this._handleSubmit(e)}>
                                    <input className="fileInput" 
                                        type="file" 
                                        onChange={(e)=>this._handleImageChange(e)} />
                                    <Button  color="primary" className="submitButton" 
                                        type="submit" 
                                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</Button>
                                    </form>
                                    <div style={{width:"50%", height:"50%"}}>
                                    {$imagePreview}
                                    </div>
                                </div>
                                
                            </Col>
                    </Row>

                
            </>
        )
    }
}
