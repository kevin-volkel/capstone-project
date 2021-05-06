import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const BottomNav = () => {
    return <>
        <Navbar style = {{background: 'darkorange'}}>
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto d-flex-justify-content-between" style={{gap: '25vw'}}>
                    <Button>Daily</Button>
                    <Button>Hourly</Button>
                    <Button>Week</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
}

export default BottomNav
