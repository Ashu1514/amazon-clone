import React, {useEffect} from 'react';
import './App.css';
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from "./component/Checkout/Checkout";
import Login from "./component/Login/Login";
import Payment from "./component/Payment/Payment";
import Orders from './component/Orders/Orders'
import {auth} from './firebase'
import {useStateValue} from "./stateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HQv4jIbuX0QLvOv6ZtDnMrZ9KHSSS0853RfoOlx63nK6jT6wxnNrkg4JxYe2cCJNX0iAlGZfhOQ0nlXid3eUcvm00dl9vvj8h');

function App() {
    const [{user},dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser){
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });
    }, [])
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path='/orders'>
                <Header/>
                <Orders/>
            </Route>
            <Route path='/payment'>
                <Header/>
                <Elements stripe={promise}>
                    <Payment/>
                </Elements>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='/checkout'>
                <Header/>
                <Checkout/>
            </Route>
            <Route path='/'>
                <Header/>
                <Home/>
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
