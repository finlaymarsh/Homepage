import React, { Component } from 'react';


class BubbleSort extends Component {
    state = {
        int_list: []
    };

    componentDidMount(){
        this.getInitialRandomList();
    }

    getInitialRandomList(){
        fetch('http://localhost:8080/api/sorting-algorithms/bubble-sort')
        .then(response => response.json())
        .then((data) => {
            this.setState({int_list: data})
        })
        .catch(console.log);
    }

    render() {
        return (
            <p>[{this.state.int_list.toString()}]</p>
        )
    }

}

export default BubbleSort;