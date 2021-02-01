import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Data from './components/data/Data';



class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render={props => (
              <Data/>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
