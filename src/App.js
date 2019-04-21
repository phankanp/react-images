import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { Container, Spinner } from "react-bootstrap";
import Header from "./components/Header";
import PhotoList from "./components/PhotoList";
import apiKey from "./config";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentTitle: "",
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "Baseball") => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=25&page=1&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          currentTitle: query
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  getPhotos(nextTitle) {
    this.performSearch(nextTitle);
  }

  render() {
    if (this.state.loading) {
      return (
        <Container className="text-center" style={containerStyle}>
          <Spinner animation="border" />
        </Container>
      );
    }
    return (
      <BrowserRouter>
        <Header onSearch={this.performSearch} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PhotoList
                data={this.state.photos}
                title={this.state.currentTitle}
                currentTitle={this.state.currentTitle}
                getPhotos={nextTitle => this.getPhotos(nextTitle)}
                fetchPhotos={term => this.performSearch(term)}
              />
            )}
          />
          <Route
            path="/Football"
            render={() => (
              <PhotoList
                title="Football"
                currentTitle={this.state.currentTitle}
                getPhotos={nextTitle => this.getPhotos(nextTitle)}
                fetchPhotos={term => this.performSearch(term)}
                data={this.state.photos}
              />
            )}
          />
          <Route
            path="/Basketball"
            render={() => (
              <PhotoList
                title="Basketball"
                currentTitle={this.state.currentTitle}
                getPhotos={nextTitle => this.getPhotos(nextTitle)}
                fetchPhotos={term => this.performSearch(term)}
                data={this.state.photos}
              />
            )}
          />
          <Route
            path="/Soccer"
            render={() => (
              <PhotoList
                title="Soccer"
                currentTitle={this.state.currentTitle}
                getPhotos={nextTitle => this.getPhotos(nextTitle)}
                fetchPhotos={term => this.performSearch(term)}
                data={this.state.photos}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <PhotoList
                loading={this.state.loading}
                data={this.state.photos}
                title="Search"
                currentTitle={this.state.currentTitle}
                getPhotos={nextTitle => this.getPhotos(nextTitle)}
                fetchPhotos={term => this.performSearch(term)}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const containerStyle = {
  paddingTop: 350
};

export default App;
