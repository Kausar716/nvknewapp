import React from "react";
import react from "react"

import './userProfile.css';
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col,Card,CardBody,CardFooter} from 'reactstrap';


export  default class StaffDirectory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:[
                {name:"name1",
                desig:"name1",
                email:"name1",
                phone:"321",
                image:""
                },
                {
                name:"name2",
                desig:"name2",
                email:"name2",
                phone:"322",
                image:""   
                },     
                {
                name:"name3",
                desig:"name3",
                email:"name3",
                phone:"332",
                image:"" 
                },
                {name:"name1",
                desig:"name1",
                email:"name1",
                phone:"321",
                image:""
                },
                {
                name:"name2",
                desig:"name2",
                email:"name2",
                phone:"322",
                image:""   
                },     
                {
                name:"name3",
                desig:"name3",
                email:"name3",
                phone:"332",
                image:"" 
                },
                {name:"name1",
                desig:"name1",
                email:"name1",
                phone:"321",
                image:""
                },
                {
                name:"name2",
                desig:"name2",
                email:"name2",
                phone:"322",
                image:""   
                },     
                {
                name:"name3",
                desig:"name3",
                email:"name3",
                phone:"332",
                image:"" 
                },
                {name:"name1",
                desig:"name1",
                email:"name1",
                phone:"321",
                image:""
                },
                {
                name:"name2",
                desig:"name2",
                email:"name2",
                phone:"322",
                image:""   
                },     
                {
                name:"name3",
                desig:"name3",
                email:"name3",
                phone:"332",
                image:"" 
                }
            ],
            loadCount:3,
            searchValue:""
            
        }
    }
    handleLoadMore = () => {
        let loadCount=this.state.loadCount
        loadCount+=3
        this.setState({loadCount})
    }
    handleInput = (e) => {
        this.setState({searchValue:e.target.value})
    }


        render(){
            console.log(this.state.user)
            return(
                <div>  
                    <div className="directoryHeading">Staff Directory</div>              
                    <Row>
                        <Col>
                           <Input type="text" placeholder="search staff name or department" onChange={this.handleInput} value={this.state.searchValue}/>                            
                        </Col>
                        <Col>
                            <Input type="checkbox" value={this.state.displayRecords} name="displayRecords" onChange={this.handleInput}/>
                            <Label>Display deleted records</Label>
                        </Col>
                    </Row> 
                    <Row >
                    {this.state.user.map((user,i)=>{  
                        if(i<this.state.loadCount){                      
                        return <Col className="col-sm-4"  style={{padding:"15px"}}>
                            <Card style={{width:"75%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                            <CardBody style={{backgroundColor:"#00bfff",opacity:.6,color:"black"}} >
                            <Label>{user.name}</Label><br/>
                            <Label>{user.desig}</Label><br/>
                            <Label>{user.email}</Label><br/>
                            <Label>{user.phone}</Label><br/>
                            </CardBody>   
                            <CardFooter>footer</CardFooter> 
                            </Card>  
                            </Col> 
                        }
                    })}
                   </Row>

                   <div className="wrapper">
                   <Button onClick={this.handleLoadMore} className="loadButton">Load More</Button>
                   </div>
                   

                </div>
            )
        }
  
    
}