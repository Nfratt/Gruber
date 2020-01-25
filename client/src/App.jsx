import React from "react";
import "./AppStyles.scss";
import { Login } from "./componants/login";
import Navbar from "./componants/nav";
import Product from "./componants/Product";

import Footer from "./componants/footer";

import API from './api';
import { LOGIN } from "./redux/actionTypes";

class App extends React.Component {
  // Setting the initial state of the App component
  state = {
    groceryItems: []
  };

  componentDidMount() {
    console.log('home page loaded');
    // debugger
    API.getFoods()
      .then((data) => {
        console.log(data);

        this.setState({ groceryItems: data.data })
      });
    console.log(this.state.groceryItems)

  }

  render() {
    return (
      <div className="background">

          <Navbar className="navbkrd">
            {/* <Login /> */}
          </Navbar>
          <h3>Get your Groceries on Demand!!</h3>


        <div className="App">

          <div className="App-products">
            {this.state.groceryItems.map(item => {
              console.log(item)
              return <Product
                key={item.itemName}
                item={item}
              />

            })}
</div>
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
