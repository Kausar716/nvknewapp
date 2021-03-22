import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Avatar from './Avatar.js';
import DocumentDeatils from './DocumentDeatails'
import Notification from './Notification.js';
import CurencyRates from './CurencyRates';
import IntrestRates from './IntrestRates';
import OrderSettings from './OrderSettings';
import CustomerPrintRates from './CustomerPrintRates';
import EmailSetting from './EmailSetting';
import AdminHeader from './AdminHeader';
import AdjustmentReasons from './AdjustmentReasons';
import {Provider} from 'react-redux';
import store from '../../store';
import Deliveries from './Deliveries';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Provider store={store}>
    <div className="ddcard">
      
      <AdminHeader />
      <DocumentDeatils />
      <Notification />
      <EmailSetting />
      <CurencyRates />
      <IntrestRates />
      <AdjustmentReasons />
      <OrderSettings />
      <Deliveries />
      <CustomerPrintRates />
     
    </div>
    // </Provider>
  );
}

export default Example;