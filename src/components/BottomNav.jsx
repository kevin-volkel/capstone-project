import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import DataNames from "./pages-data";
const BottomNav = () => {
  console.log(DataNames);
  return (
    <>
      <Navbar
        className=" d-flex justify-content-center"
        style={{ background: "#f8613b" }}
      >
        <Nav
          className=" d-flex justify-content-between"
          style={{ width: "50%" }}
        >
          {DataNames.map((obj, i) => (
            <Nav.Link key={i} style={{ color: "white", fontWeight: "bold" }}>
              {obj.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </>
  );
};
 
export default BottomNav;
