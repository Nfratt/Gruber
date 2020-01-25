import React from "react";
import { Container } from "react-bootstrap";
import "./AppStyles.scss";
import { Login } from "./componants/login";
import Navbar from "./componants/nav";
import Product from "./componants/Product";
// import items from "../src/api/api";
import Footer from "./componants/footer";
import Logo from "./componants/images/Gruberlogo.png";
// import Utils from "./utils/library.js";
import API from './api';

// export default () => <React.Fragment>
// <div className="background">
//   <Container className="productcontainer">
//   <img className="logo" src={Logo} alt="Gruberlogo logo" />
//     <h3>Get your Groceries on Demand!!</h3>
//     <Navbar>
//       <Cart />
//       <Login />
//     </Navbar>
//     <div>items go here</div>
//     <div className="App">
//       <div className="App-products">
//         {items.map(item => (
//           <Product key={item.title} title={item.title} price={item.price} />
//         ))}
//       </div>
//     </div>
//   </Container>
//   <Footer/>
//   </div>

// </React.Fragment>


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
            <Login />
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
