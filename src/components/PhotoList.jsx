import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";
import Navigation from "./Navigation";
import { Row, Container } from "react-bootstrap";

const ImageList = ({
  loading,
  title,
  currentTitle,
  fetchPhotos,
  getPhotos,
  data
}) => {
  if (title !== currentTitle && title !== "Search") {
    getPhotos(title);
  }

  const results = data;
  let photos;
  if (results.length) {
    photos = results.map(image => {
      console.log(image);
      const url = `https://farm${image.farm}.staticflickr.com/${image.server}/${
        image.id
      }_${image.secret}.jpg`;
      return <Photo url={url} key={image.id} />;
    });
  } else {
    photos = <NoPhotos />;
  }

  return (
    <Container style={containerStyle}>
      <Navigation onSearch={term => fetchPhotos(term)} title={title} />
      <h1 className="text-center" style={headerStyle}>
        {currentTitle}
      </h1>
      <Row>{photos}</Row>
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
