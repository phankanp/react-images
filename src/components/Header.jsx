import React, { Component } from "react";
import { withRouter } from "react-router";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    let path = `/search?q=${this.query.value}`;
    e.currentTarget.reset();
    this.props.history.push(path);
  };

  handleClick(e, query) {
    e.preventDefault();
    this.props.onSearch(query);
    this.props.history.push("/");
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/" onClick={e => this.handleClick(e, "Baseball")}>
          <Navbar.Brand>Flikr-Gallery</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto" />
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-sm-2"
            ref={input => (this.query = input)}
          />
          <Button variant="outline-info" type="submit" id="submit">
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default withRouter(Header);
