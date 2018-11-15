import React, { Component } from 'react';
import classes from './App.css';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from '../components/header/header';
import Homepage from '../components/pages/homepage';
import Skills from '../components/pages/skills';
import Projects from '../components/pages/projects';

class App extends Component {
  state = {
    current: null
  }

  currentChangedHandler = (event) => {
    // this.setState({current: indexOf(event.target)});
  }
   render() {
    return (
      <Router>
      <div className={classes.App}>
        <Header current={() => this.currentChangedHandler()}/>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Skills' component={Skills} />
          <Route exact path='/Projects' component={Projects}/>
      </div>
      </Router>
    );
  }
}

export default App;
