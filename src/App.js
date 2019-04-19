import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import ImageList from "./components/ImageList";
import apiKey from "./config";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      title: "",
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "cats") => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=25&page=1&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false,
          title: query
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Header onSearch={this.performSearch} />
        <Switch>
          <Route
            path="/search"
            render={() => (
              <ImageList
                {...this.state}
                data={this.state.images}
                title={this.state.title}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
