import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    let path = `/search?q=${this.query.value}`;
    e.currentTarget.reset();
    this.props.history.push(path);
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Flikr-Gallery
        </Navbar.Brand>
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
