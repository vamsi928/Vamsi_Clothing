import React, { useEffect, lazy, Suspense } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import HeaderComponent from "./Components/HeaderComponent/Header.Component";
import SpinnerComponent from "./Components/SpinnerComponent/Spinner.Component";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.Component";

import GlobalStyles from "./global.styles";
import { checkUserSession } from "./reducers/UserReducer/User.actions";

const HomepageComponent = lazy(() =>
  import("./pages/homepage/HomepageComponent")
); //Lazy loading the import only when needed

const ShopComponent = lazy(() => import("./pages/shop/Shop.Component"));

const SignInSignOut = lazy(() =>
  import("./pages/SignIn-SignOut/SignIn-SignOut.Component")
);

const CheckOutPage = lazy(() =>
  import("./pages/CheckOutComponent/CheckOut.Component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyles />

      <Router history={history}>
        <HeaderComponent />
        <ErrorBoundary>
          <Suspense fallback={<SpinnerComponent />}>
            <Route path="/" exact component={HomepageComponent} />
            <Route path="/shop" component={ShopComponent} />
            <Route
              path="/signIn"
              exact
              render={() =>
                currentUser ? history.push("/") : <SignInSignOut />
              }
            />
            <Route path="/checkout" exact component={CheckOutPage} />
          </Suspense>
        </ErrorBoundary>
      </Router>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, { checkUserSession })(App);
