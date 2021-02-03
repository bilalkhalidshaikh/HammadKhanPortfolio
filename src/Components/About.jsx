import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Image } from "antd";
import { Typography } from "@material-ui/core";
import { Center } from "@chakra-ui/react";
import img from "../Images/gif.gif"
export default function About() {
  return (
    <div id="about">
      <br />
      <br />
      <hr />
      <Typography variant="h2" align="center">
        About
      </Typography>
      <Center>
        <Container>
          <Row>
            <Col sm={8}>
              <Typography align="justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi quidem esse dolor a consequuntur quae dicta iure nam
                voluptate enim. Aliquid facilis eveniet architecto quidem autem
                exercitationem. Natus, molestias. Dolor. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Excepturi quidem esse dolor
                a consequuntur quae dicta iure nam voluptate enim. Aliquid
                facilis eveniet architecto quidem autem exercitationem. Natus,
                molestias. Dolor.
              </Typography>
            </Col>
            <Col sm={4}>
              <Center>
                <Image
                  src={img}
                  width={300}
                  height={350}
                  fallback="blue"
                  results="5"
                  style={{borderRadius: "5%"}}
                />
              </Center>
            </Col>
          </Row>
        </Container>
      </Center>
    </div>
  );
}
