import React, {Component} from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Data from './components/data/Data';



class App extends Component {

  state = {
    date: 'Null',
    dateProcessed: 'Null'
  }

  dateChange = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let separator='-'
    const dateProcessed = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${day<10?`0${day}`:`${day}`}`
    this.setState({date: date})
    this.setState({dateProcessed: dateProcessed})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header currentDate={this.state.date} dateChange={this.dateChange}/>
          <div style={{ backgroundImage: "url(/img/star.jpg)", backgroundSize: "cover"}}>
            <Route path="/" render={props => (
              <Data selectedDate={this.state.dateProcessed}/>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
