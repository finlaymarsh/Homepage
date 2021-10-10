import React, { Component } from 'react';


class CodeBox extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"; 
        document.body.appendChild(script); 
    }

    render() {
        return(<pre className="prettyprint code">{this.props.code}</pre>);
    }
}

export default CodeBox;