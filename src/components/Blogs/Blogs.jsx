import React from "react";
// import './Programs.css'
// import program_1 from '../../assets/program-1.png'
// import program_2 from '../../assets/program-2.png'
// import program_3 from '../../assets/program-3.png'
// import program_icon_1 from '../../assets/program-icon-1.png'
// import program_icon_2 from '../../assets/program-icon-2.png'
// import program_icon_3 from '../../assets/program-icon-3.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "@/constants";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
// import image50 from "../../../public//icons8-image-50.png"
// import Image from "next/image";

const Blogs = () => {
  return (
    <div className="programs">
      <Container fluid>
        <Row>
          {data.map((item, i) => (
            <Col md={4} xs={12} sm={6} key={i}>
              {" "}
              <Figure className="position-relative">
                <Figure.Image
                  width="100%"
                  height={180}
                  alt="171x180"
                  src={item.image}
                  loading="lazy"
                />
                <div className="text-overlay">
                  <span className="text-left">Aenean Eleifend</span>
                  {/* <span className="text-right">Aliquam</span> */}
                </div>
                <div className="text-right">
                  <img src="/icons8-image-50.png" className="imgsvg" alt=""/>
                </div>
                <Figure.Caption>
                  <h2>{item.heading}</h2>
                </Figure.Caption>
                <Figure.Caption>
                  <div className="userdata">
                    <div style={{ marginLeft: "-9px" }}>
                      <Image
                        src="/man.jpg"
                        roundedCircle
                        loading="lazy"
                        width={39}
                        height={15}
                        alt=""
                      />
                      Joanna Wellick
                    </div>
                    <Figure.Caption>28 June,2018</Figure.Caption>
                    <Figure.Caption style={{ marginRight: "20px" }}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 18 2 C 16.35499 2 15 3.3549904 15 5 C 15 5.1909529 15.021791 5.3771224 15.056641 5.5585938 L 7.921875 9.7207031 C 7.3985399 9.2778539 6.7320771 9 6 9 C 4.3549904 9 3 10.35499 3 12 C 3 13.64501 4.3549904 15 6 15 C 6.7320771 15 7.3985399 14.722146 7.921875 14.279297 L 15.056641 18.439453 C 15.021555 18.621514 15 18.808386 15 19 C 15 20.64501 16.35499 22 18 22 C 19.64501 22 21 20.64501 21 19 C 21 17.35499 19.64501 16 18 16 C 17.26748 16 16.601593 16.279328 16.078125 16.722656 L 8.9433594 12.558594 C 8.9782095 12.377122 9 12.190953 9 12 C 9 11.809047 8.9782095 11.622878 8.9433594 11.441406 L 16.078125 7.2792969 C 16.60146 7.7221461 17.267923 8 18 8 C 19.64501 8 21 6.6450096 21 5 C 21 3.3549904 19.64501 2 18 2 z M 18 4 C 18.564129 4 19 4.4358706 19 5 C 19 5.5641294 18.564129 6 18 6 C 17.435871 6 17 5.5641294 17 5 C 17 4.4358706 17.435871 4 18 4 z M 6 11 C 6.5641294 11 7 11.435871 7 12 C 7 12.564129 6.5641294 13 6 13 C 5.4358706 13 5 12.564129 5 12 C 5 11.435871 5.4358706 11 6 11 z M 18 18 C 18.564129 18 19 18.435871 19 19 C 19 19.564129 18.564129 20 18 20 C 17.435871 20 17 19.564129 17 19 C 17 18.435871 17.435871 18 18 18 z"></path>
                        </svg>
                      </span>
                      1K shares
                    </Figure.Caption>
                  </div>
                </Figure.Caption>
                <Figure.Caption>{item.content}</Figure.Caption>
                <p style={{textDecoration:"underline"}}>View Post</p>
              </Figure>
            </Col>
          ))}
        </Row>
        <Row>
          <Col
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button style={{ padding: "10px", width: "140px" }}>
              LOAD MORE
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
