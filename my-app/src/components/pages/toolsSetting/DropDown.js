import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card , Row, Col,Form, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="ddcard">
    <Button color="primary" size="lg" block >Admin Setting</Button>

      <Button color="primary" onClick={toggle}  className="dropDownB dropDownB--active">Site Configuration</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <Button className="docDetails">Document Details</Button>
          <Row>
              <Col sm="6">
              Following details will appear on all printed ites including invoice, order, bills of lading, etc...
              Logo
              </Col>
              <Col sm="6">
              <Form>
                  <FormGroup>
                  <Label style={{fontWeight:"bold"}}>Name</Label>
                  <Input type="text" name="email" id="exampleName" placeholder="NAME" />
                  </FormGroup>
              </Form>
              </Col>
          </Row>



            <Row>
                <Col sm="6">
                    LOGO WILL BE HERE
                </Col>

                <Col sm="6">
                    <Row>
                        <Col>
                            <Form>
                            <FormGroup>
                            <Label style={{fontWeight:"bold"}}>Sending Email Address</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="DISPATCH EMAIL ADDRESS" />
                            </FormGroup>
                            </Form>
                        </Col>
                        <Col>
                        <Form>
                            <FormGroup> 
                                <Label style={{fontWeight:"bold"}}>Phone</Label>
                                <Input type="number" name="number" id="examplePhone" placeholder="PHONE" />
                            </FormGroup>
                        </Form>
                        
                        </Col>
                    </Row> 
              </Col>
            </Row>


            <Row>
                <Col sm="6">
                        <Form>
                            <FormGroup>
                            <Label style={{fontWeight:"bold"}}>Main Title(bold)</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="NWY No.5(SIX MILES WEST OF HWY,6)" />
                            </FormGroup>
                        </Form>
                </Col>

                <Col sm="6">
                <Form>
                        <FormGroup>
                            <Label style={{fontWeight:"bold"}}>Secondary Title (bold)</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="MAILING ADDRESS" />
                            </FormGroup>
                        </Form>

                </Col>
            </Row>


            <Row>
                <Col sm="6">
                    <FormGroup>
                        <Label style={{fontWeight:"bold"}}>Main Body</Label>
                        <Input type="textarea" name="text" id="exampleMainBody" />
                    </FormGroup>
                </Col>


                <Col sm="6">
                    <FormGroup>
                        <Label style={{fontWeight:"bold"}}>Secondary Body</Label>
                        <Input type="textarea" name="text" id="exampleSecondaryBody" />
                    </FormGroup>
                </Col>
            </Row>


                <Row>
                    <Col sm="9">
                    </Col>

                    <Col sm="3">
                    <Button style={{margin:"5%"}} color="primary" size="sm">Save</Button>
                    <Button color="secondary" size="sm">Cancel</Button>
                    </Col>
                </Row>

            
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;