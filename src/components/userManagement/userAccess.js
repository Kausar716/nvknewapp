import React from "react";

import './userProfile.css';
import { Button, FormGroup, Input ,Label,Dropdown,DropdownToggle,DropdownMenu,Row,Col, DropdownItem} from 'reactstrap';
import CreateRole from '../modals/createRole'
import DeleteRole from '../modals/deleteRole'

export  default class UserAccess extends React.Component{
    constructor(props){
        super(props)
        this.state={
            supervisorRole:false,
            supervisorRole:false,
            quotes:false,
            openOrder:false,
            actionDeleteOrder:false,
            actionCreateQuotes:false,
            closedAndCancledOrder:false,
            pickingOrder:false,
            readyOrder:false,
            actionReturnToOrder:false,
            reservations:false,
            shippedInvoicesAdjustment:false,
            receiveInvoice:false,
            quickPicks:false,
            actionOveride:false,
            digAndPlantRequest:false,
            supervisorRolePurchase:false,
            createAndModifyDraftPurchase:false,
            createModifyDeleteOpenOrder:false,
            receiveAndCheckinOpenOrder:false,
            viewClosedCancelledOrder:false,
            actionClosedOpenOrder:false,
            supervisorRole:false,
            PlantManager:false,
            addEdit:false,
            printPlant:false,
            inventoryManagement:false,
            dashboardView:false,
            dashboardModify:false,
            masterInventoryView:false,
            masterInventoryModify:false,
            taskQueueView:false,
            taskQueueModify:false, 
            ToolsAndsettings:false,
            TagsAndLabels:false,
            organizationSettings:false,
            mapLocator:false,
            maplocatorEditMaps:false,
            customerManagement:false,
            customerListAddEdit:false,
            customerListViewPrint:false,
            customerSettings:false,
            supplierManagement:false,
            supplierListAddEdit:false,
            supplierListView:false,
            supplierSetting:false,
            userManagement:false,
            userProfile:false,
            userAccess:false,
            staffDirectory:false,
            userSetting:false,
            inventoryManagement:false,
            plantSetting:false,
            productSetting:false,
            locationSetting:false, 
            role:"" ,
            createRoleToggle:false,
            createRole:false,
            selectedRole:"sales",
            deleteRoleToggle:false,
            deleteRole:false         
        }
    }
    handleCheckBox = (e) => {
        console.log(e.target.checked)

        const {target:{name,checked}} =e
        // let {errorObj,errorCount} = this.state
        this.setState({[name]:checked})

    }
    handleSelect= (e) => {
        let checkBoxGroup = e.target.id
        let name = e.target.name

        if(checkBoxGroup == "QuotesPermission" || checkBoxGroup=="allPermissionOff" || checkBoxGroup=="allPermissionOn"){            
            this.setState({
                supervisorRole: name == "selectAll"?true:false,
                supervisorRole:name == "selectAll"?true:false,
                quotes:name == "selectAll"?true:false,
                openOrder:name == "selectAll"?true:false,
                actionDeleteOrder:name == "selectAll"?true:false,
                actionCreateQuotes:name == "selectAll"?true:false,
                closedAndCancledOrder:name == "selectAll"?true:false,
                pickingOrder:name == "selectAll"?true:false,
                readyOrder:name == "selectAll"?true:false,
                actionReturnToOrder:name == "selectAll"?true:false,
                reservations:name == "selectAll"?true:false,
                shippedInvoicesAdjustment:name == "selectAll"?true:false,
                receiveInvoice:name == "selectAll"?true:false,
                quickPicks:name == "selectAll"?true:false,
                actionOveride:name == "selectAll"?true:false,
                digAndPlantRequest:name == "selectAll"?true:false,
            })

        }
         if(checkBoxGroup=="purchaseOrderPermission"|| checkBoxGroup=="allPermissionOff" || checkBoxGroup=="allPermissionOn"){
            this.setState({
            supervisorRolePurchase: name == "selectAll"?true:false,
            createAndModifyDraftPurchase: name == "selectAll"?true:false,
            createModifyDeleteOpenOrder: name == "selectAll"?true:false,
            receiveAndCheckinOpenOrder: name == "selectAll"?true:false,
            viewClosedCancelledOrder: name == "selectAll"?true:false,
            actionClosedOpenOrder: name == "selectAll"?true:false,
            })
        }
         if(checkBoxGroup == "inventoryManagementPermission" || checkBoxGroup=="allPermissionOff"|| checkBoxGroup=="allPermissionOn"){
            this.setState({
            supervisorRole: name == "selectAll"?true:false,
            PlantManager: name == "selectAll"?true:false,
            addEdit: name == "selectAll"?true:false,
            printPlant: name == "selectAll"?true:false,
            inventoryManagement: name == "selectAll"?true:false,
            dashboardView: name == "selectAll"?true:false,
            dashboardModify: name == "selectAll"?true:false,
            masterInventoryView: name == "selectAll"?true:false,
            masterInventoryModify: name == "selectAll"?true:false,
            taskQueueView: name == "selectAll"?true:false,
            taskQueueModify: name == "selectAll"?true:false,
            })
        }
         if(checkBoxGroup == "toolsAndSettingDiv" || checkBoxGroup=="allPermissionOff" || checkBoxGroup=="allPermissionOn"){
            this.setState({
               ToolsAndsettings: name == "selectAll"?true:false,
               TagsAndLabels: name == "selectAll"?true:false,
               organizationSettings: name == "selectAll"?true:false,
               mapLocator: name == "selectAll"?true:false,
               maplocatorEditMaps: name == "selectAll"?true:false,
               customerManagement: name == "selectAll"?true:false,
               customerListAddEdit: name == "selectAll"?true:false,
               customerListViewPrint: name == "selectAll"?true:false,
               customerSettings: name == "selectAll"?true:false,
               supplierManagement: name == "selectAll"?true:false,
               supplierListAddEdit: name == "selectAll"?true:false,
               supplierListView: name == "selectAll"?true:false,
               supplierSetting: name == "selectAll"?true:false,
               userManagement: name == "selectAll"?true:false,
               userProfile: name == "selectAll"?true:false,
               userAccess: name == "selectAll"?true:false,
               staffDirectory: name == "selectAll"?true:false,
               userSetting: name == "selectAll"?true:false,
               inventoryManagement: name == "selectAll"?true:false,
               plantSetting: name == "selectAll"?true:false,
               productSetting: name == "selectAll"?true:false,
               locationSetting: name == "selectAll"?true:false,
            })
        }

    }
    handleUpdate = () => {
        console.log(
            this.state.supervisorRole,
            this.state.supervisorRole,
            this.state.quotes,
            this.state.openOrder,
            this.state.actionDeleteOrder,
            this.state.actionCreateQuotes,
            this.state.closedAndCancledOrder,
            this.state.pickingOrder,
            this.state.readyOrder,
            this.state.actionReturnToOrder,
            this.state.reservations,
            this.state.shippedInvoicesAdjustment,
            this.state.receiveInvoice,
            this.state.quickPicks,
            this.state.actionOveride,
            this.state.digAndPlantRequest,
            this.state.supervisorRolePurchase,
            this.state.createAndModifyDraftPurchase,
            this.state.createModifyDeleteOpenOrder,
            this.state.receiveAndCheckinOpenOrder,
            this.state.viewClosedCancelledOrder,
            this.state.actionClosedOpenOrder,
            this.state.supervisorRole,
            this.state.PlantManager,
            this.state.addEdit,
            this.state.printPlant,
            this.state.inventoryManagement,
            this.state.dashboardView,
            this.state.dashboardModify,
            this.state.masterInventoryView,
            this.state.masterInventoryModify,
            this.state.taskQueueView,
            this.state.taskQueueModify, 
            this.state.ToolsAndsettings,
            this.state.TagsAndLabels,
            this.state.organizationSettings,
            this.state.mapLocator,
            this.state.maplocatorEditMaps,
            this.state.customerManagement,
            this.state.customerListAddEdit,
            this.state.customerListViewPrint,
            this.state.customerSettings,
            this.state.supplierManagement,
            this.state.supplierListAddEdit,
            this.state.supplierListView,
            this.state.supplierSetting,
            this.state.userManagement,
            this.state.userProfile,
            this.state.userAccess,
            this.state.staffDirectory,
            this.state.userSetting,
            this.state.inventoryManagement,
            this.state.plantSetting,
            this.state.productSetting,
            this.state.locationSetting
        )
    }
  
    handleModelText=(e)=>{
        this.setState({role:e.target.value})
    }
    handleUpdate = (e) => {
        let createRoleToggle = ! this.state.createRoleToggle
        this.setState({createRoleToggle})
    }
    handlecreateRoleModalResult = (e) => {
        console.log(e.target.id)
        let createRole
        if(e.target.id=== "success"){
            createRole=true
        }
        else{
            createRole=false
        }
        this.setState({createRole,createRoleToggle:false})
    }
    handleDelete = () => {
        this.setState({deleteRoleToggle:true})
    }
    handleDeleteRoleModalResult = (e) => {
        console.log(e.target.id)
        let deleteRole
        if(e.target.id=== "success"){
            deleteRole=true
        }
        else{
            deleteRole=false
        }
        this.setState({deleteRole,deleteRoleToggle:false})
    } 
        render(){
            console.log(this.state.supervisorRole)
            return(
                <div>
                    <Label className="profileHeader boldTitle">User Access</Label>
                    <div >
                        <p className="divTitle boldTitle">Add,Edit or Remove Permissions</p>
                    <div>
                        <Row>
                            <Col xs="1" >
                            <Label>image tag</Label>
                            </Col>
                            <Col>
                            <Label>Did you know?</Label><br/>
                            <Label className="smallText">Only active users will are visible to set permissions.</Label><br/>
                            <Label className="smallText">User permissions can be sent or modified via <a href="/UserManagement">User Profiles</a>. </Label><br/>
                            </Col>
                        </Row>
                   
                    {/* <Button className="createUser">Create new User</Button><br/> */}
                    <Label className="smallText">Select user name to edit permissions</Label> <br/>
                    </div>
                 <Row>
                     <Col>
                     <Col xs="4" style={{padding:0}}>
                     <Label className="boldTitle">Select User Profile</Label><br/>
                            <select className="styled-select" style={{width:"100%",marginLeft:0}}>
                                <option>Select...</option>
                                <option>Select...</option>
                                <option>user1</option>
                                <option>user2</option>
                            </select> 
                     </Col>
                     <Label className="boldTitle">Load Exesting Role</Label>
                     <Row>
                   
                    <Col>
                            <select className="styled-select" style={{width:"100%"}} >
                                <option>Select...</option>
                                <option>Select...</option>
                                <option>user1</option>
                                <option>user2</option>
                            </select> 
                    </Col>
                    <Col xs="8">
                    <Button className="deleteRole" style={{background:"transparent",color:"black"}} onClick={this.handleDelete}>
                            Delete Role
                        </Button>
                    </Col>
                    </Row> 
                     </Col>
                     <Col xs="5">
                     <div className="userDatainPermission">
                     <Row>
                     <Col>
                     <Label>user Name</Label><br/>
                     <Label>userDesig</Label><br/>
                     <Label>email</Label><br/>
                     <a href="google.com">View Profile</a>
                     </Col>
                     <Col>
                     <img></img>
                     </Col>
                     </Row>
                     </div>
                   
                   
                    
                     </Col>
                           
                        </Row>
                      
                    {/* -------------------------------------------------------------------------------------------------------- */}
                    <Row>
                        <Col >
                        <div className="turnontext">
                        <button  id="allPermissionOff" onClick={this.handleSelect} name="unSelect" className="buttontext">  Turn All Permission Off</button> {"\t"}
                        <button id="allPermissionOn" onClick={this.handleSelect} name="selectAll" className="buttontext" >Turn All Permission On</button>
                        </div>
                        
                        {/* </Col>
                        <Col> */}
                       
                        
                        </Col>
                    </Row>

                    <Row>
                    <Col>
                    <Label className="boldTitle">Quote & Permissions</Label>                   
                    <div className="QuotesPermissionDiv ">
                        <Row>
                            <Col>
                                <input type="checkbox" name="supervisorRole" value={this.state.supervisorRole} checked={this.state.supervisorRole} onChange={this.handleCheckBox}/>  Supervisor Role <br/>
                                <input type="checkbox" name="quotes" value={this.state.quotes} checked={this.state.quotes} onChange={this.handleCheckBox}/> Quote <br/>
                                <input type="checkbox" name="openOrder" value={this.state.openOrder} checked={this.state.openOrder} onChange={this.handleCheckBox}/> Open Order <br/>
                                <input type="checkbox" name="actionDeleteOrder" value={this.state.actionDeleteOrder} checked={this.state.actionDeleteOrder} onChange={this.handleCheckBox}/> Action Delete Order<br/>
                                <input type="checkbox" name="actionCreateQuotes" checked={this.state.actionCreateQuotes} onChange={this.handleCheckBox}/> Action Create Quotes<br/>
                                <input type="checkbox" name="closedAndCancledOrder" checked={this.state.closedAndCancledOrder} onChange={this.handleCheckBox}/> Closed And <br/>
                                <input type="checkbox" name="pickingOrder" checked={this.state.pickingOrder} onChange={this.handleCheckBox}/> Picking Order<br/>
                                <input type="checkbox" name="readyOrder" checked={this.state.readyOrder} onChange={this.handleCheckBox}/> Ready Order
                            </Col>
                            <Col>
                                <input type="checkbox" name="actionReturnToOrder" checked={this.state.actionReturnToOrder} onChange={this.handleCheckBox}/> Action Return to Order<br/>
                                <input type="checkbox" name="reservations" checked={this.state.reservations} onChange={this.handleCheckBox}/> Reservations<br/>
                                <input type="checkbox" name="shippedInvoicesAdjustment" checked={this.state.shippedInvoicesAdjustment} onChange={this.handleCheckBox}/>Shipped Invoices Adjustment<br/>
                                <input type="checkbox" name="receiveInvoice" checked={this.state.receiveInvoice} onChange={this.handleCheckBox}/>Receive Invoices<br/>
                                <input type="checkbox" name="quickPicks" checked={this.state.quickPicks} onChange={this.handleCheckBox}/>Quick Picks<br/>
                                <input type="checkbox" name="actionOveride" checked={this.state.actionOveride} onChange={this.handleCheckBox}/> Action Overide<br/>
                                <input type="checkbox" name="digAndPlantRequest" checked={this.state.digAndPlantRequest} onChange={this.handleCheckBox}/> Dig And Plant Request<br/>
                                    
                            </Col>
                        </Row>
                        <button onClick={this.handleSelect} id="QuotesPermission" name="selectAll" className="buttontext">Select All</button>
                        <button onClick={this.handleSelect} id="QuotesPermission" name="selectNone" className="buttontext">Select None</button>
                    </div>
                    <Label className="boldTitle">Purchase Order Permissions</Label>                   
                    <div className="purchaseOrderPermission">
                        <input type="checkbox" name="supervisorRolePurchase" checked={this.state.supervisorRolePurchase } onChange={this.handleCheckBox}/> Supervisor Role (all access) <br/>
                        <input type="checkbox" name="createAndModifyDraftPurchase" checked={this.state.createAndModifyDraftPurchase } onChange={this.handleCheckBox}/> Create & Modify Draft <br/>
                        <input type="checkbox" name="createModifyDeleteOpenOrder" checked={this.state.createModifyDeleteOpenOrder } onChange={this.handleCheckBox}/> Create, Modify & Delete Open Orders <br/>
                        <input type="checkbox" name="receiveAndCheckinOpenOrder" checked={this.state.receiveAndCheckinOpenOrder } onChange={this.handleCheckBox}/> Receive & Check-In Open Orders <br/>
                        <input type="checkbox" name="viewClosedCancelledOrder" checked={this.state.viewClosedCancelledOrder } onChange={this.handleCheckBox}/> View Closed & Cancelled Orders <br/>
                        <input type="checkbox" name="actionClosedOpenOrder" checked={this.state.actionClosedOpenOrder } onChange={this.handleCheckBox}/> Action: Close Open Order <br/>
                        
                        <button onClick={this.handleSelect} id="purchaseOrderPermission" name="selectAll" className="buttontext">Select All</button> 
                        <button onClick={this.handleSelect} id="purchaseOrderPermission" name="selectNone" className="buttontext">Select None</button>
                    </div>
                    <Label className="boldTitle">Inventory Management Permissions</Label>                   
                    <div className="inventoryManagementPermission">
                        <Row>
                            <Col>
                        <input type="checkbox" name="supervisorRole " checked={this.state.supervisorRole } onChange={this.handleCheckBox}/> Supervisor Role (all access)<br/>
                        <input type="checkbox" name="PlantManager" checked={this.state.PlantManager} onChange={this.handleCheckBox}/> Plant Manager<br/>
                        <input type="checkbox" name="addEdit" checked={this.state.addEdit } onChange={this.handleCheckBox} className="subCheckBox"/> Add/Edit<br/>
                        <input type="checkbox" name="printPlant" checked={this.state.printPlant } onChange={this.handleCheckBox} className="subCheckBox"/> Print<br/>
                        <input type="checkbox" name="PlantManager" checked={this.state.PlantManager} onChange={this.handleCheckBox}/> Product Manager<br/>
                        <input type="checkbox" name="addEdit" checked={this.state.addEdit } onChange={this.handleCheckBox} className="subCheckBox"/> Add/Edit<br/>
                        <input type="checkbox" name="printPlant" checked={this.state.printPlant } onChange={this.handleCheckBox} className="subCheckBox"/> Print<br/>
                        </Col>
                        <Col>
                        <input type="checkbox" name="inventoryManagement" checked={this.state.inventoryManagement } onChange={this.handleCheckBox}/> Inventory Management<br/>
                        <input type="checkbox" name="dashboardView" checked={this.state.dashboardView } onChange={this.handleCheckBox} className="subCheckBox"/> Dashboard (View)<br/>
                        <input type="checkbox" name="dashboardModify" checked={this.state.dashboardModify } onChange={this.handleCheckBox} className="nestedCheckBox"/> Dashboard (Modify)<br/>
                        <input type="checkbox" name="masterInventoryView" checked={this.state.masterInventoryView } onChange={this.handleCheckBox}className="subCheckBox"/>Master Invemtory (View)<br/>
                        <input type="checkbox" name="masterInventoryModify" checked={this.state.masterInventoryModify } onChange={this.handleCheckBox} className="nestedCheckBox"/> Master Inventory (Modify)<br/>
                        <input type="checkbox" name="taskQueueView" checked={this.state.taskQueueView } onChange={this.handleCheckBox} className="subCheckBox"/> Task Queue (View)<br/>
                        <input type="checkbox" name="taskQueueModify" checked={this.state.taskQueueModify } onChange={this.handleCheckBox} className="nestedCheckBox"/> Task Queue (Modify)<br/>
                        <button onClick={this.handleSelect} id="inventoryManagementPermission" name="selectAll" className="buttontext">Select All</button>
                        <button onClick={this.handleSelect} id="inventoryManagementPermission" name="selectNone" className="buttontext">Select None</button>
                        </Col>
                        </Row>
                    </div>
                    </Col>
                    <Col>
                        <Label className="boldTitle">Additional Permissions</Label>                   
                        <div className="toolsAndSettingDiv">
                            <Row>
                                <Col>
                                    <input type="checkbox" name="ToolsAndsettings" checked={this.state.ToolsAndsettings } onChange={this.handleCheckBox}/> Tools & Settings <br/>
                                    <input type="checkbox" name="TagsAndLabels"checked={this.state.TagsAndLabels } onChange={this.handleCheckBox} className="subCheckBox"/> Tags And Labels <br/>
                                    <input type="checkbox" name="organizationSettings"checked={this.state.organizationSettings } onChange={this.handleCheckBox} className="subCheckBox"/> Organization Setting <br/>
                                    <input type="checkbox" name="mapLocator"checked={this.state.mapLocator } onChange={this.handleCheckBox} className="subCheckBox"/> Map Locator <br/>
                                    <input type="checkbox" name="maplocatorEditMaps"checked={this.state.maplocatorEditMaps } onChange={this.handleCheckBox} className="subCheckBox" /> Map Locator (Edit map) <br/>
                                    <input type="checkbox" name="customerManagement"checked={this.state.customerManagement } onChange={this.handleCheckBox}/> Customer Management <br/>
                                    <input type="checkbox" name="customerListAddEdit"checked={this.state.customerListAddEdit } onChange={this.handleCheckBox} className="subCheckBox"/> Customer List (Add/Edit) <br/>
                                    <input type="checkbox" name="customerListViewPrint"checked={this.state.customerListViewPrint } onChange={this.handleCheckBox} className="subCheckBox"/> Customer List (View/Print) <br/>
                                    <input type="checkbox" name="customerSettings"checked={this.state.customerSettings } onChange={this.handleCheckBox} className="subCheckBox"/>  Setting <br/>
                                    <input type="checkbox" name="supplierManagement"checked={this.state.supplierManagement } onChange={this.handleCheckBox}/> Supplier Management <br/>
                                    <input type="checkbox" name="supplierListAddEdit"checked={this.state.supplierListAddEdit } onChange={this.handleCheckBox} className="subCheckBox"/> Supplier List (Add/Edit) <br/>
                                    <input type="checkbox" name="supplierListView"checked={this.state.supplierListView } onChange={this.handleCheckBox} className="subCheckBox"/> Supplier List (View/Print)<br/>
                                    <input type="checkbox" name="supplierSetting"checked={this.state.supplierSetting } onChange={this.handleCheckBox} className="subCheckBox"/> Setting <br/>
                                </Col>
                                <Col>
                                    <input type="checkbox" name="userManagement"checked={this.state.userManagement } onChange={this.handleCheckBox}/> User Management <br/>
                                    <input type="checkbox" name="userProfile"checked={this.state.userProfile } onChange={this.handleCheckBox} className="subCheckBox"/> User Profile <br/>
                                    <input type="checkbox" name="userAccess"checked={this.state.userAccess } onChange={this.handleCheckBox} className="subCheckBox"/> User Access <br/>
                                    <input type="checkbox" name="staffDirectory"checked={this.state.staffDirectory } onChange={this.handleCheckBox} className="subCheckBox"/> Staff Directory <br/>
                                    <input type="checkbox" name="userSetting"checked={this.state.userSetting } onChange={this.handleCheckBox} className="subCheckBox"/> User Setting <br/>
                                    <input type="checkbox" name="inventoryManagement"checked={this.state.inventoryManagement } onChange={this.handleCheckBox} /> Inventory Management <br/>
                                    <input type="checkbox" name="plantSetting"checked={this.state.plantSetting } onChange={this.handleCheckBox} className="subCheckBox"/> Plant Setting <br/>
                                    <input type="checkbox" name="productSetting"checked={this.state.productSetting } onChange={this.handleCheckBox} className="subCheckBox"/>Product Setting <br/>
                                    <input type="checkbox" name="locationSetting"checked={this.state.locationSetting } onChange={this.handleCheckBox} className="subCheckBox"/>Location Setting <br/>
                                    <button onClick={this.handleSelect} id="toolsAndSettingDiv" name="selectAll" className="buttontext">Select All</button>
                                    <button onClick={this.handleSelect} id="toolsAndSettingDiv" name="selectNone" className="buttontext">Select None</button>
                                </Col>
                                </Row>                           
                            </div>
                       </Col>
                    </Row>                                  
            </div> 
            {/* <div className="userPermissionbuttonDiv"> */}
            <Row>
                <Col>
                </Col>
                <Col xs="2">
                <button name="update" onClick={this.handleUpdate} className="buttontext"> Update Current Role</button>
                </Col>
                <Col xs="3">
                <button name="update" onClick={this.handleUpdate} className="buttontext"> Create Role From Current Values</button>
                </Col>
                <Col xs="0">
                <button name="update" onClick={this.handleUpdate} className="cancelButton"> Cancel</button>
                </Col>
                <Col xs="1">
                <button name="update" onClick={this.handleUpdate} className="updateButton" > Update</button>
                </Col>
            </Row>
               
               {this.state.createRoleToggle?<CreateRole
               modelToggle={this.state.createRoleToggle}
               message1={"Create a new role with current  permission configuration."}
               message2={"Role Name"} 
              buttonLabel={"CREATE"}
              createRoleModalResult={this.handlecreateRoleModalResult}

                />:null} 
                {this.state.deleteRoleToggle?<DeleteRole
               modelToggle={this.state.deleteRoleToggle}
               message1={`Are you sure you want to delete role ${this.state.selectedRole}?`}
              buttonLabel={"REMOVE"}
              deleteRoleModalResult={this.handleDeleteRoleModalResult}

                />:null}              
                
                
            {/* </div> */}
                
            </div>
            )
        }
  
    
}