import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Homepage from './Homepage';
import CV from './CV';
import NavigationBar from './NavigationBar';
import SortingAlgorithms from './SortingAlgorithms';

import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="website-container">
                <NavigationBar/>
                <switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/cv">
                        <CV/>
                    </Route>
                    <Route path="/sorting-algorithms">
                        <SortingAlgorithms/>
                    </Route>
                </switch>
            </div>
        );
      }
}

export default App;