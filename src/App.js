import React, { Component } from 'react';

import Home from './pages/Home';
import Judge from './pages/Judge';
import { HashRouter, Route } from 'react-router-dom';

// function App() {
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route path="/judge" component={Judge} />
        </HashRouter>
        
      </div>
    );
  }
}

export default App;
