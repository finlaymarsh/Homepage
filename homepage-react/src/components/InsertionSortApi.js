import React, { Component } from 'react';
import SortingAlgorithmApi from './SortingAlgorithmApi';


class InsertionSortApi extends SortingAlgorithmApi {

    sortList(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.init_int_list)
        };
        fetch('http://localhost:8080/api/sorting-algorithms/insertion-sort', requestOptions)
        .then(response => response.json())
        .then((data) => {
            this.setState({sorted_int_list: data})
        })
        .catch(console.log);
    }

    render() {
        return (
            <div>
                <p>[{this.state.init_int_list.toString()}]</p>
                <p>[{this.state.sorted_int_list.toString()}]</p>
            </div>
        )
    }

}

export default InsertionSortApi;