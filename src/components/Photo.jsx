import React from "react";
import { Image, Col } from "react-bootstrap";

const imageStyle = {
  height: 200,
  width: 400
};

const colStyle = {
  paddingTop: 30
};

const Photo = props => (
  <Col xs={12} md={4} style={colStyle}>
    <Image src={props.url} alt="" style={imageStyle} thumbnail />
  </Col>
);

export default Photo;
