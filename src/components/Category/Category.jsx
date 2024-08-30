import React from "react";

import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { categoryimgdata } from "@/constants";
import ListGroup from "react-bootstrap/ListGroup";

function Category() {
  const [key, setKey] = useState("home");

  return (
    <div style={{ paddingLeft: "7%", paddingRight: "7%",paddingBottom:"7%" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Category1"></Tab>
        <Tab eventKey="profile" title="Category2"></Tab>
        <Tab eventKey="contact" title="Category3"></Tab>
        <Tab eventKey="Category4" title="Category4"></Tab>
        <Tab eventKey="Category5" title="Category5"></Tab>
        <Tab eventKey="Category6" title="Category6"></Tab>
      </Tabs>
      <Container fluid className="mt-4">
        <Row className="g-5">
          <Col md={8} className="border p-3">
            <Container>
              <Row>
                <Col md={8}>
                  <Figure>
                    <Figure.Image
                      width="100%"
                      height={180}
                      alt="171x180"
                      src="https://s3-alpha-sig.figma.com/img/106d/4f6c/9ccec87e0dce6e143ad30d966b349b0a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXsCrY2kf~6DKkyHFLnpDjfKKniZZrKGVb8KIhLRsS-vAF~mdRV5alz2xEvcwpNSnHEpDq2w21v2tcB03Cf-Y3RkISrzINjXDeEkltBk2bxyOcfb6nTqFr4iHGT-GodFRRsSFFN~YVZqQnhBJ02QK3NPTY4G98qcFFu6Jg3ShEF8Nx91hNulRKqX2cwFbjpjHLwx41aamvoUvFCkFMEqeeHvvDEuzeSu5m8J6WlsD0F27e6x7u9Bx--L19gWvXoyq~lN4K6V66J28GtsfeGKZovTmKzRGoywVzLwOxJ-6NyiOFOOy0l8or21Jjdx2blk6qoJqRqASF3ivJyKUhzqMw__"
                    />
                    <Figure.Caption>1 month ago</Figure.Caption>
                    <Figure.Caption
                      style={{ fontWeight: "500", fontSize: "15px" }}
                    >
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </Figure.Caption>
                    <Figure.Caption>
                      lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                      eleifend sed ex. Donec quis magna sed felis elementum
                      blandit nec quis sem. Maecen.
                    </Figure.Caption>
                    <Figure.Caption>
                      <p
                        style={{
                          marginTop: "0.5rem",
                          textDecoration: "underline",
                          fontWeight: "500",
                        }}
                      >
                        View Post
                      </p>
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col md={4} xs={12}>
                <ListGroup variant="flush">
                    {categoryimgdata.map((item,i)=>(
                        <ListGroup.Item key={i}>
                        <Row className="align-items-center">
                          <Col xs={7} md={6} sm={9} lg={8}>
                            <Figure>
                              <Figure.Image
                                src={item.image} // Replace with your image
                                alt="Small Image 1"
                                className="img-fluid"
                              />
                            </Figure>
                          </Col>
                          <Col xs={5} md={6} sm={3} lg={4}>
                            <p className="mb-0">
                              {item.content}
                            </p>
                            <small className="text-muted">{item.smallcontent}</small>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
          </ListGroup>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4} className="border p-3">
          <h5>Manga reads</h5>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row className="align-items-center">
                  <Col xs={4}>
                    <Figure>
                      <Figure.Image
                        src="https://s3-alpha-sig.figma.com/img/4164/a750/cfcb1334b2f7a8ebaed72c97f2406b2d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BC0II78-7wqm7JupXLE7sDBBszTWNGyHU9JkDn7M70IKdBkI3PJeZ4~eazgpe7NZKjmr8JyZJG56KDQle9kU5Ku8r2bzSy5QkTMF5TZF0dAQ66o6PuHtIftZTUIAM96lh2prQ1-VNLyaiEev~nbbD15nGhWeAogDU9b0neVJ5j8gWxJWPIiY3OgOf1ZNlEs6kFnbNLMWF1zmVqbOEIcAyd5DwBdG~7DeZ1t9-xEUuCREUSbT2Wqcynque7AHRj~rhP~2pi4GTvbVk4oxLABGkBkFV2iwVawi4AVDwUEowaN52qTHOH692DsNwvSZHXGUYE~Gk-gzylHdS8bxdWT~6w__"
                        alt="Small Image 1"
                        className="img-fluid"
                      />
                    </Figure>
                  </Col>
                  <Col xs={8}>
                    <p className="mb-0">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </p>
                    <small className="text-muted">21 March 2021</small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-items-center">
                  <Col xs={4}>
                    <Figure>
                      <Figure.Image
                        src="https://s3-alpha-sig.figma.com/img/8c94/105a/c63266cf275e8e6fa49be95c3518b627?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ljNU0-0~03wopL~q49JRWN4gn6FOSYDai7344-NowljAeF5yOBstx60Hv61HjSuNkVQ6sAYQ2gdvWKwYMnw6B-xwZj6yaEWWmS887ETeqhsxNhrNED7GJE8oly-gsI~axeFxgjggLP-5dR6VKE5~~oNE6k10yHCJdou7uiqgglCdxgEF3uT57tY9o11b21ITnJbO5rFRRQTBalcYnEvmxCCVuoZoyQj8T9md-VhIUsG~74b~0Tfbfcl5mypy93k3P0TWo5VAlqZGpN2pXQ5hYEzHHW0Ci0abOqZTwUn34RLslpddN4nBF~aJMmwcQvKKQE2IcizbfMj3CA5~E1DAhA__"
                        alt="Small Image 2"
                        className="img-fluid"
                      />
                    </Figure>
                  </Col>
                  <Col xs={8}>
                    <p className="mb-0">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </p>
                    <small className="text-muted">21 March 2021</small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-items-center">
                  <Col xs={4}>
                    <Figure>
                      <Figure.Image
                        src="https://s3-alpha-sig.figma.com/img/1caf/e09b/5c1b09b687c1359ee723ec7c0b0ec5b4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BX617c5nwCyWz8-I7sdRFFpInWMQbSbXBKxPEqIBzEzwckf-wvRvFvITzSoXC9Sv-94Hc25lEfX~Y-fDwdhMuX73QmQ6q-2LxgE1j7rMT96grOS5DBb3Pzuqyod9ttUjooHFwiEJeUqGbq3u7RdOiosX2Ttd1FIhCF0-5f8W-Ort00IFT6WLNZkeFW7HeCCjHgaVJ7gUuklV7Ie7PdJVRdun2yM0icr8O0Nm~6999wq1pCiVXmlOPTlM~9liHN~Bll5VQ1W2Q5OhlVxArj1Wlqq6d~VWziGewVPdfEKXY2W-eCALbpW0EktdSvUgxL0rpxneU4c7ejqFb5NrUeUidw__"
                        alt="Small Image 3"
                        className="img-fluid"
                      />
                    </Figure>
                  </Col>
                  <Col xs={8}>
                    <p className="mb-0">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </p>
                    <small className="text-muted">21 March 2021</small>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;
