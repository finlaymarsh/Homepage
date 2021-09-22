import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Posts extends Component {
    state = {
        posts: []
    };

    handleGetAllClick(){
        fetch('http://localhost:8080/api/posts/')
        .then(response => response.json())
        .then((data) => {
            this.setState({posts: data})
        })
        .catch(console.log);
    }

    async handleNewClick(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  title: 'Sent From React',
                                    content: 'Sent from the depths of react.'})
        };
        await fetch('http://localhost:8080/api/posts/new/', requestOptions).catch(console.log);
        this.handleGetAllClick();
    }

    async handleDeleteClick(){
        const requestOptions = {
            method: 'DELETE',
        };
        await fetch('http://localhost:8080/api/posts/delete/', requestOptions).catch(console.log);
        this.handleGetAllClick();
    }


    renderPost(post){
        return(
            <tr>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.date}</td>
                <td>{post.time}</td>
            </tr>
        );
    }

    render() {
        return (
            <div class="apiTable"> 
                <table class="table table-bordered table-hover table-light table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => {
                            return (this.renderPost(post));
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Posts;