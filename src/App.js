import "./App.css";
import HomepageComponent from "./pages/homepage/HomepageComponent";
import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import ShopComponent from "./pages/shop/Shop.Component";
import HeaderComponent from "./Components/HeaderComponent/Header.Component";
import SignInSignOut from "./pages/SignIn-SignOut/SignIn-SignOut.Component";
import {connect} from 'react-redux';
import CheckOutPage from './pages/CheckOutComponent/CheckOut.Component';

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <HeaderComponent />
          <Route path="/" exact component={HomepageComponent} />
          <Route path="/shop"  component={ShopComponent} />
          <Route path="/signIn" exact render={() => this.props.currentUser ? history.push('/') : <SignInSignOut /> } />
          <Route path="/checkout" exact component={CheckOutPage} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    currentUser : state.userReducer.currentUser
  }
}

export default connect(mapStateToProps,null)(App);
