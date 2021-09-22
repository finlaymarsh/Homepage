import React, { Component } from 'react';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./app.css';

class App extends Component {
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
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand nav" href="#">Marsh</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Pricing</a>
                        <a class="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                    </div>
                </nav>

                <div class="lower-half">

                    <button class="apiButton btn-primary" 
                    onClick={() => this.post_api_ref.current.handleGetAllClick()}>
                        Fetch Posts</button>

                    <button class="apiButton btn-success" 
                    onClick={() => this.post_api_ref.current.handleNewClick()}>
                        Create new Post
                    </button>

                    <button class="apiButton btn-danger" 
                    onClick={() => this.post_api_ref.current.handleDeleteClick()}>
                        Delete all Posts
                    </button>

                    <Posts ref={this.post_api_ref}/>

                </div>
            </div>
        );
    }
}

export default App;