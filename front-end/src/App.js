import React, {Component} from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Data from './components/data/Data';



class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          {/* <div className="container"> */}
            <Route path="/" render={props => (
              <Data/>
            )} />
          </div>
          <div>
            hello
          </div>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
