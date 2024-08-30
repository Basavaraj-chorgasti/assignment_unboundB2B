import React from "react";
import { imgdata } from "@/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

function Destination() {
  return (
    <>
    <div className="programs">
        {/* <Container >
      <h1>Destination</h1>
        <Row>
          {imgdata.map((item, i) => (
            <Col md={2} xs={12} sm={6} lg={2} key={i}>
           <Image src={item.image} width="100%" height="200px"/>
            </Col>
          ))}
        </Row>
      </Container> */}
      
      {imgdata.map((item,i) => (
        // <>
        <div className="program" key={i} >
          <img src={item.image} alt="" />
          <div className="centered" style={{color:"white"}}>{item.content}</div>
        </div>
        // </>
      ))}
    </div>
    </>
  );
}

export default Destination;
