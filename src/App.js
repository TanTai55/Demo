import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from "react-router-dom";

import './App.css'
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import ListItem from './components/ListItem';
import CounterExample from './components/CounterExample';
import Header from './components/Header';
import Footer from './components/Footer';
import "tailwindcss/tailwind.css"
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'


function App() {
        return (
            <div>
                <Router>
                <Header />
                <div className="p-3">
                     <Switch>
                        <Router exact path="/">
                            <Home/>
                        </Router>

                        <Router path="/about">
                            <About/>
                        </Router>
                        
                            <Router path="/products/:id">
                                
                            <Product />
                        </Router>
                            
                    </Switch>        
                    </div>
                    
                <Footer />
                </Router>  

            </div>
    );
}

export default App;
 