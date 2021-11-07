import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import Homepage from './Homepage';
import CV from './CV';
import NavigationBar from './NavigationBar';
import SortingAlgorithms from './SortingAlgorithmPages/SortingAlgorithms';

import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="website-container">
                <NavigationBar/>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route exact path="/cv">
                        <CV/>
                    </Route>
                    <Route path="/sorting-algorithms">
                        <SortingAlgorithms/>
                    </Route>
                </Switch>
            </div>
        );
      }
}

export default App;