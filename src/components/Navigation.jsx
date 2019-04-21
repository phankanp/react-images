import React from "react";
import { Nav, Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router";

const Navigation = props => {
  function handleClick(e, query) {
    e.preventDefault();
    props.onSearch(query);
    props.history.push(`/${query}`);
  }

  return (
    <Nav className="justify-content-center" style={navStyle}>
      <LinkContainer to="/Football" onClick={e => handleClick(e, "Football")}>
        <Breadcrumb.Item>Football</Breadcrumb.Item>
      </LinkContainer>
      <LinkContainer
        to="/Basketball"
        onClick={e => handleClick(e, "Basketball")}
      >
        <Breadcrumb.Item>Basketball</Breadcrumb.Item>
      </LinkContainer>
      <LinkContainer to="/Soccer" onClick={e => handleClick(e, "Soccer")}>
        <Breadcrumb.Item>Soccer</Breadcrumb.Item>
      </LinkContainer>
    </Nav>
  );
};

const navStyle = {
  paddingTop: 30
};

export default withRouter(Navigation);
