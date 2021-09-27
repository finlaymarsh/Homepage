import React, { Component } from 'react';
import Posts from './Posts';

import'../css/Homepage.css';

class Homepage extends Component {
    constructor(){
        super();
        this.post_api_ref = React.createRef();
    }

    componentDidMount(){
        this.post_api_ref.current.handleGetAllClick();
    }

    render(){
        return(
            <div>
                <div>

                    <button className="apiButton btn-primary" 
                    onClick={() => this.post_api_ref.current.handleGetAllClick()}>
                        Fetch Posts</button>

                    <button className="apiButton btn-success" 
                    onClick={() => this.post_api_ref.current.handleNewClick()}>
                        Create new Post
                    </button>

                    <button className="apiButton btn-danger" 
                    onClick={() => this.post_api_ref.current.handleDeleteClick()}>
                        Delete all Posts
                    </button>

                    <Posts ref={this.post_api_ref}/>

                </div>
                <img src="./assets/images/signature.png" />
            </div>
        );
    }
}

export default Homepage;