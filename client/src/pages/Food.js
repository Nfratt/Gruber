import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Food extends Component {
  state = {
    food: [],
    itemName: "",
    price: ""
  };

  componentDidMount() {
    this.loadFoods();
  }

  loadBooks = () => {
    API.getFoods()
      .then(res =>
        this.setState({ food: res.data, itemName: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  deleteFood = id => {
    API.deleteFood(id)
      .then(res => this.loadFoods())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.itemName,
        author: this.state.price
      })
        .then(res => this.loadFoods())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
       
      </Container>
    );
  }
}

export default Food;
