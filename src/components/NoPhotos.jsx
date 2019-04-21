import React from "react";
import { Container } from "react-bootstrap";

const NoPhotos = props => (
  <Container style={containerStyle}>
    <div className="text-center">
      <h3 className="text-center">Sorry, no Images match your search.</h3>
    </div>
  </Container>
);

const containerStyle = {
  paddingTop: 50
};

export default NoPhotos;
