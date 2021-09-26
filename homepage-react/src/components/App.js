import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Homepage from './Homepage';
import CV from './CV';
import NavigationBar from './NavigationBar';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/cv">
                        <CV/>
                    </Route>
                </switch>
            </div>
        );
      }
}

export default App;