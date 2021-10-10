import React, { Component } from 'react';
import CodeBox from '../CodeBox';
import SortingAlgorithmApi from '../SortingAlgorithmApi';

class InsertionSort extends Component {
    constructor(){
        super();
        this.sorting_algorithms_api_ref = React.createRef();
    }

    render() {
        const code = 
        "public static int[] sort(int[] intListInput){\n" +   
        "    int[] intList = Arrays.copyOf(intListInput, intListInput.length);\n" + 
        "    int sortedIndex = 1;\n" +
        "    while (sortedIndex < intList.length){\n"+
        "        int currentIndex = sortedIndex;\n"+
        "        while (currentIndex > 0 && intList[currentIndex-1] >\n"+
        "                                    intList[currentIndex]){\n"+
        "            swap(intList, currentIndex-1, currentIndex);\n"+
        "            currentIndex--;\n"+
        "        }\n"+
        "        sortedIndex++;\n"+
        "    }\n"+
        "    return intList;\n" +
        "}\n"
        return (
            <div className="sa-container">
                <h1 className="display-4" id="main-title">Insertion Sort</h1>
                <p>Here is an array of 10 random integers between 0 and 99 inclusive.</p>
                <div class="row">
                    <div class="col-md-4"> 
                    <SortingAlgorithmApi ref={this.sorting_algorithms_api_ref} name="insertion-sort"/>
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
                <CodeBox code={code}/>
            </div>
        );
      }
}

export default InsertionSort;