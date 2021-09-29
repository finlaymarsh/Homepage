import React, { Component } from 'react';


class SortingAlgorithmApi extends Component {
    state = {
        init_int_list: [],
        sorted_int_list: []
    };

    componentDidMount(){
        this.getInitialRandomList();
    }

    getInitialRandomList(){
        fetch('http://localhost:8080/api/sorting-algorithms/random-list')
        .then(response => response.json())
        .then((data) => {
            this.setState({
                init_int_list: data,
                sorted_int_list: data})
        })
        .catch(console.log);
    }
}

export default SortingAlgorithmApi;