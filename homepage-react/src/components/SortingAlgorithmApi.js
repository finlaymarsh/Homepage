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

    sortList(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.init_int_list)
        };
        fetch('http://localhost:8080/api/sorting-algorithms/' + this.props.name, requestOptions)
        .then(response => response.json())
        .then((data) => {
            this.setState({sorted_int_list: data})
        })
        .catch(console.log);
    }

    renderElement(val){
        return (<div class="square col-sm"><p class="square-text">{val}</p></div>);
    }

    renderSortedElement(val){
        return (<div class="square-sorted col-sm"><p class="square-text">{val}</p></div>)
    }

    render() {
        return (
            <div>
                <div class="row flex-nowrap">{this.state.init_int_list.map(d => this.renderElement(d))}</div>
                <div class="row flex-nowrap">{this.state.sorted_int_list.map(d => this.renderSortedElement(d))}</div>
            </div>
        )
    }
}

export default SortingAlgorithmApi;