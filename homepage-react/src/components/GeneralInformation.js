import React, { Component } from 'react';
import BubbleSortApi from './BubbleSortApi';
import '../css/Prettify.css'


class GeneralInformation extends Component {
    constructor(){
        super();
        this.sorting_algorithms_api_ref = React.createRef();
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"; 
        document.body.appendChild(script); 
    }

    render() {
        const code1 = 
        "protected static void swap(int[] intList, int i, int j){\n" + 
        "   int temp = intList[i];\n" +  
        "   intList[i] = intList[j];\n" +
        "   intList[j] = temp;\n"+
        "}\n";
        const code2 =
        "private static int[] popHead(int[] a){\n" +
        "    int[] newList = new int[(a.length-1)];\n" +
        "    for (int i = 1; i < a.length; i++){\n" +
        "        newList[i-1] = a[i];\n" +
        "    }\n" +
        "    return newList;\n" +
        "}\n";
        return (
            <div className="sa-container">
                <h1 className="display-4" id="main-title">Methods used in Sorting Algorithms</h1>
                <p>Here is the Java code for the swap method used in the sorting algorithms outlined on this website.</p>
                <pre className="prettyprint" id="bubble-code">{code1}</pre>
                <p>Here is the Java code for the popHead method used in the sorting algorithms outlined on this website.</p>
                <pre className="prettyprint" id="bubble-code">{code2}</pre>
            </div>
        );
      }
}

export default GeneralInformation;