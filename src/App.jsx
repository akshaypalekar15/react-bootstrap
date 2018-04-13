import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import News from './pages/News';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/CustomNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route  path='/about' component={About}/>
          <Route  path='/news' component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;
