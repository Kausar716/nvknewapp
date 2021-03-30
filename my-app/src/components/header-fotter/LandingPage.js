import React from 'react';
import { Card, CardTitle, CardText, Row, Col,Button, CardImg, CardImgOverlay } from 'reactstrap';

const  LandingPage=()=> {
    return (
        
        <div>
            <div className="row center">
                <div className="card">
                    <p>Quote Order Management</p>
                        <img className="medium" src="./images/download.png" alt="product" />
                        
                        <div className="card-body">
                            <div className="rating"> 
                                <span>
                                    <i class='fa fa-star'></i>
                                </span>
                            </div>
                            <div className="price">10 open </div>
                            <div className="price">4 draft </div>
                        </div>
                    </div>


                    <div className="card">
                    <p>Purchase Order</p>
                        <img className="medium" src="./images/download1.png" alt="product" />
                        
                        <div className="card-body">
                            <div className="rating"> 
                                <span>
                                    <i class='fa fa-star'></i>
                                </span>
                            </div>
                            <div className="price"> 76 open </div>
                            <div className="price"> 30 draft </div>
                        </div>
                    </div>




                    <div className="card">
                    <p>Inventory Management</p>
                        <img className="medium" src="./images/tree.jpg" alt="product" />
                        
                        <div className="card-body">
                            {/* <p>nike slim</p> */}
                            <div className="rating"> 
                                <span>
                                    <i class='fa fa-star'></i>
                                </span>
                            </div>
                            <div className="price"> 17 task available </div>
                            <div className="price"> 12 request availablee </div>
                        </div>
                    </div>





                    <div className="card">
                    <p>Tools and Setting</p>
                        <img className="medium" src="./images/setting.png" alt="product" />
                        
                        <div className="card-body">
                            {/* <p>nike slim</p> */}
                            <div className="rating"> 
                                <span>
                                    <i class='fa fa-star'></i>
                                </span>
                            </div>
                            <div className="price"> 120</div>
                        </div>
                    </div>





                    <div className="card">
                    <p>Reports and Charts</p>
                        <img className="medium" src="./images/report1.jpg" alt="product" />
                        
                        <div className="card-body">
                            {/* <p>nike slim</p> */}
                            <div className="rating"> 
                                <span>
                                    <i class='fa fa-star'></i>
                                </span>
                            </div>
                            <div className="price"> 120</div>
                        </div>
                    </div>



                    <div className="card">
                    <p>Need Help </p>
                        <img className="medium" src="./images/logo192.png" alt="product" />
                        
                        <div className="card-body">
                            {/* <p>nike slim</p> */}
                            <div className="rating"> 
                                <span>
                                    <i class='fa fa-star'></i>
                                </span>
                            </div>
                            <div className="price">120</div>
                        </div>
                    </div>

            </div>
        </div>

        



       
    )
}

export default LandingPage


