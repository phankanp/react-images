import React from "react";
import Photo from "./Image";
import { Row, Container } from "react-bootstrap";

const ImageList = props => {
  const results = props.data;
  let images = results.map(image => {
    const url = `https://farm${image.farm}.staticflickr.com/${image.server}/${
      image.id
    }_${image.secret}.jpg`;
    return <Photo url={url} key={image.id} />;
  });

  return (
    <Container style={containerStyle}>
      <h1 className="text-center" style={headerStyle}>
        {props.title}
      </h1>
      <Row>{images}</Row>
    </Container>
  );
};

const headerStyle = {
  paddingTop: 30
};

const containerStyle = {
  paddingBottom: 50
};

export default ImageList;
