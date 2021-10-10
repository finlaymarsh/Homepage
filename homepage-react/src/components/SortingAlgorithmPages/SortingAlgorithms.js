import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import SANavigationBar from './SANavigationBar';
import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';
import GeneralInformation from './GeneralInformation';

import '../../css/SortingAlgorithms.css';


class SortingAlgorithms extends Component {

    render() {
        return (
            <div class="row">
                <div class="col-md-2" id="left-nav">
                    <SANavigationBar/>
                </div>

                <div class="col-md-6">
                    <Switch>
                        <Route exact path="/sorting-algorithms">
                            <GeneralInformation/>
                        </Route>
                        <Route path="/sorting-algorithms/bubble-sort">
                            <BubbleSort/>
                        </Route>
                        <Route path="/sorting-algorithms/insertion-sort">
                            <InsertionSort/>
                        </Route>
                        <Route path="/sorting-algorithms/merge-sort">
                            <MergeSort/>
                        </Route>
                        <Route path="/sorting-algorithms/quick-sort">
                            <QuickSort/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
      }
}

export default SortingAlgorithms;