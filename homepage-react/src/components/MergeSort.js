import React, { Component } from 'react';
import MergeSortApi from './MergeSortApi';
import '../css/Prettify.css'


class MergeSort extends Component {
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
        "public static int[] sort(int[] intListInput) {\n" +
        "    int[] intList = Arrays.copyOf(intListInput, intListInput.length);\n" +
        "    return mergeSort(intList);\n" +
        "}\n";
        const code2 = 
        "private static int[] mergeSort(int[] intList){\n" +
        "    int length = intList.length;\n" +
        "    if (length == 1){\n" +
        "        return intList;\n" +
        "    }\n" +
        "    int[] listA = mergeSort(Arrays.copyOfRange(intList, 0, length/2));\n" +
        "    int[] listB = mergeSort(Arrays.copyOfRange(intList, length/2, length));\n" +
        "    int[] listC = mergeSplitLists(listA, listB);\n" +
        "    return listC;\n" +
        "}";
        const code3 =
        "private static int[] mergeSplitLists(int[] listA, int[] listB){\n" +
        "    int[] listC = new int[listA.length + listB.length];\n" +
        "    int index = 0;\n" +
        "    while (listA.length > 0 && listB.length > 0){\n" +
        "        if (listA[0] > listB[0]){\n" +
        "            listC[index] = listB[0];\n" +
        "            listB = popHead(listB);\n" +
        "        } else {\n" +
        "            listC[index] = listA[0];\n" +
        "            listA = popHead(listA);\n" +
        "        }\n" +
        "        index++;\n" +
        "    }\n" +
        "    while (listA.length > 0){\n" +
        "        listC[index] = listA[0];\n" +
        "        listA = popHead(listA);\n" +
        "        index++;\n" +
        "    }\n" +
        "    while (listB.length > 0){\n" +
        "        listC[index] = listB[0];\n" +
        "        listB = popHead(listB);\n" +
        "        index++;\n" +
        "    }\n" +
        "    return listC;\n" +
        "}";
        return (
            <div className="sa-container">
                <h1 className="display-4" id="main-title">Merge Sort</h1>
                <p>Here is an array of 10 random integers between 0 and 99 inclusive.</p>
                <div class="row">
                    <div class="col-md-4"> 
                        <MergeSortApi ref={this.sorting_algorithms_api_ref}/>
                    </div>
                    <div class="col-md-4">  
                        <button className="btn-danger" id="random-button" onClick={() => 
                            this.sorting_algorithms_api_ref.current.getInitialRandomList()}>
                            Randomise!
                        </button>
                        <br/> 
                        <button className="btn-success" id="sort-button" onClick={() => 
                            this.sorting_algorithms_api_ref.current.sortList()}>
                            Sort!
                        </button> 
                    </div>
                </div>
                <p>Here is the java code used to sort the array where intListInput is the integer array to be sorted.</p>
                <pre className="prettyprint code">{code1}</pre>
                <pre className="prettyprint code">{code2}</pre>
                <pre className="prettyprint code">{code3}</pre>
            </div>
        );
      }
}

export default MergeSort;