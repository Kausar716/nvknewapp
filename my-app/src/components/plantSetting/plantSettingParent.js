import React from "react";
import react from "react"
import '../userManagement/userProfile.css'
import '../userManagement/supplier.css'
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col} from 'reactstrap';
import { node } from "prop-types";
import {getAllImageAssets} from "../Utility/Utility";
import ModalExample from '../modals/userManagementModals/index'
// import { Switch } from 'antd';
import { Switch } from 'antd'
import {connect} from "react-redux";
import {getUsers,getUser} from "../../actions/userAction";
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import PlantSetting from '../plantSetting/plantSetting'
import CharacterSetting from '../plantSetting/characteristics'
import { Card,CardHeader,Collapse} from 'reactstrap';
const IconAssets =  getAllImageAssets();
class PlantSettingParent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardToggle1:false,
            cardToggle2:false,
            cardToggle3:false
        }
    }
    componentDidMount(){
        console.log(this.props.plantSettingPage)
    }
    cardToggle1 = (e) => {
        let id=e.target.id
        let cardToggle 
        if(id=== "1"){
            cardToggle  = !this.state.cardToggle1
            this.setState({cardToggle1:cardToggle})
        }
        if(id== "2"){
            cardToggle  = !this.state.cardToggle2
            this.setState({cardToggle2:cardToggle})
        }
        if(id== "3"){
            cardToggle  = !this.state.cardToggle3
            this.setState({cardToggle3:cardToggle})
        }
        
    }
    handleAddbutton = () => {

    }
    handleAddAllButton = () => {

    }
    handleRemoveAll = () => {

    }
    handleDelete = () => {

    }
    handleEdit = () => {

    }
    render(){
        return(
            <div>
                <Label className="profileHeader">Plant Setting</Label>
                <Card>
                   <CardHeader id="1" onClick={this.cardToggle1} style={{background:"#357ebd",color:"white"}}>General Plant Information </CardHeader>
                    <Collapse isOpen = {this.state.cardToggle1} className={"quizCollapse"}>   

                    <PlantSetting subTitle="Categories" labelOne="Category Name" addButton="Category" inActiveList="lista"
                    activeList="list" imageName="img_avatar" page="Categories"
                    //  handleAddbutton={this.handleAddbutton} handleAddAllButton={this.handleAddAllButton} 
                    //  handleRemoveAll={this.handleRemoveAll} handleDelete={this.handleDelete} handleEdit={this.handleEdit} 
                     />
                    <PlantSetting subTitle="Bloom & Foilage Colors" labelOne="Color Name" addButton="Color" inActiveList="lista"
                    activeList="list" imageName="name" page="bloom"/>
                    <PlantSetting subTitle="Hardiness Zones" labelOne="Hardiness Zone" addButton="Zone" inActiveList="lista"
                    activeList="list" imageName="name"/>
                    <CharacterSetting/>
                    <PlantSetting subTitle="Volume Tiers" labelOne="Volume Tier" addButton="Volume Tier" inActiveList="lista"
                    activeList="list" imageName="name" page="volume"/>
                    
                    </Collapse>
                    </Card>
                    <Card>
                   <CardHeader id="2"  onClick={this.cardToggle1} style={{background:"#357ebd",color:"white"}}>Adjustment Status Reasons </CardHeader>
                    <Collapse isOpen = {this.state.cardToggle2} className={"quizCollapse"}>   

                    <PlantSetting subTitle="Inventory Reasons" labelOne="Reason Value" addButton="Reason" inActiveList="lista"
                    activeList="list" imageName="img_avatar" page="inventory"/>
                 
                    
                    </Collapse>
                    </Card>
                    <Card>
                   <CardHeader id="3"  onClick={this.cardToggle1} style={{background:"#357ebd",color:"white"}}>Plant SKU Configuration Settings</CardHeader>
                    <Collapse isOpen = {this.state.cardToggle3} className={"quizCollapse"}>   

                    <PlantSetting subTitle="Form" labelOne="Form Name" skuValue={true} addButton="Reason" inActiveList="lista"
                    activeList="list" imageName="img_avatar" page="form"/>
                    <PlantSetting subTitle="Caliper" labelOne="Caliper Name" skuValue={true} imperial={true} addButton="Caliper" inActiveList="lista"
                    activeList="list" imageName="img_avatar" page="caliper"/>
                   <PlantSetting subTitle="Height" labelOne="Height Name" skuValue={true} imperial={true} addButton="Height" inActiveList="lista"
                    activeList="list" imageName="img_avatar" page="height"/>
                    <PlantSetting subTitle="Packaging" labelOne="Packaging Name" skuValue={true} addButton="Pcakaging" inActiveList="lista"
                    activeList="list" imageName="img_avatar" page="packaging"/>
                    </Collapse>
                    </Card>
                    

                {/* <div>
                <PlantSetting title="General Plant Information" subTitle="Categories" labelOne="Category Name" addButton="Category" nActiveList="lista"
                activeList="list" imageName="img_avatar" />
                </div>
                
                <PlantSetting title="Bloom & Foilage Colors" subTitle="Bloom & Foilage Colors" labelOne="Color Name" addButton="Color" nActiveList="lista"
                activeList="list" imageName="name"/> */}

            </div>
        )
    }
}

 
 
const mapStateToProps = (state)=> ({
    plantSettingPage:state.plantSettingPage
})

export default connect(mapStateToProps,{getUsers,getUser})(PlantSettingParent)