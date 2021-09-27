import React, { Component } from 'react';
import BubbleSort from './BubbleSort';

import '../css/SortingAlgorithms.css';


class SortingAlgorithms extends Component {
    constructor(){
        super();
        this.sorting_algorithms_api_ref = React.createRef();
    }
    render() {
        return (
            <div className="sa-container">
                <p>Here is an array of 10 random integers between 0 and 99 inclusive.</p>
                <div class="row">
                    <div class="col-md-2"> 
                        <BubbleSort ref={this.sorting_algorithms_api_ref}/>
                    </div>
                    <div class="col-md-4">  
                        <button className="btn-danger" id="random-button" onClick={() => 
                            this.sorting_algorithms_api_ref.current.getInitialRandomList()}>
                            Randomise!
                        </button> 
                    </div>
                </div>
            </div>
        );
      }
}

export default SortingAlgorithms;