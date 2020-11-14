import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from './containers/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <ScrollToTop/>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/services' component={Services}/>
                    <Route exact path='/products' component={Products}/>
                    <Route exact path='/sign-up' component={SignUp}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
