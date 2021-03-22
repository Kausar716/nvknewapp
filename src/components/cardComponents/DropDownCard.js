import React from 'react'
import { Navbar, Dropdown, Row, Col, Button} from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function DropDownCard() {
    return (
        <div className="DDown">
            <Button />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            
        </div>
    )
}

export default DropDownCard
