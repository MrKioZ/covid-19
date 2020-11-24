import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './containers/Home';
import NotFound from './containers/NotFound';

export default function App() {
    
    const counter = useSelector(state => state.counter);
    const isLoggedIn = useSelector(state => state.logged);
    
    const state = useSelector(state => state);

    const dispatch = useDispatch();

    const About = <h1>About</h1>

    return (
        <div stlye={{overflowX: 'hidden'}}>
            <Home />
        </div>
        // <Router>
        //     <Switch>
        //         <Route exact path="/"><Home/></Route>
        //         <Route exact path="/about"><About/></Route>
        //         <Route><NotFound/></Route>
        //     </Switch>
        // </Router>
        // <div>
        //     <H
        //     <h1>Counter: {counter}</h1>
        //     <button onClick={()=> dispatch(increment())}>+</button>
        //     <button onClick={()=> dispatch(decrement())}>-</button>
        // </div>
    )
}
