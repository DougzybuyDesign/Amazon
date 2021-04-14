import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "orders";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import Payment from "payment";
import { useStateValue } from "./Stateprovider";
import { loadStripe } from "stripe/stripe-js";
import { Elements } from "stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51I7LwGKjnEAtxtsLGSd1loY8BwUTUECcKvNiuizZ9MdLkkVFRNzokp3E5CzQ0eGRVcFwTv6BwoQ0qnHGdptoUOMs00RBdATqj2"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app componet loads ...
    auth.onAuthStateChanged((authUser) => {
      console.log(" THE USER IS >>>", authUser);
      if (authUser) {
        // the user just loged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  //BEM
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <h1> I am the payment route</h1>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
