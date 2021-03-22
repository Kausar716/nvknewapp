import React from 'react';
import {Navbar, Nav, Container,} from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/md";




const header = () => {
    return (
        // <header>
           
        //    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        //        <Container>
        //         <Navbar.Brand href="/">GYNESYS</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="ml-auto">
        //             <Nav.Link href="/Notification"> <IoIcons.MdNotifications /></Nav.Link>
        //             <Nav.Link href="/email"><IoIcons.MdEmail /></Nav.Link>
        //             </Nav>
                
        //         </Navbar.Collapse>
        //         </Container>
        //     </Navbar>



        // </header>

        <header class="row">
            <div class="brand">
               GYNESYS
            </div>
            <div>
                <a href="/notification"><IoIcons.MdNotifications /></a>
                <a href="/email"><IoIcons.MdEmail /></a>
            </div>
    </header>

    )
}

export default header
