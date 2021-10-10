import React, { Component } from 'react';
import CodeBox from '../CodeBox';
import SortingAlgorithmApi from '../SortingAlgorithmApi';


class BubbleSort extends Component {
    constructor(){
        super();
        this.sorting_algorithms_api_ref = React.createRef();
    }

    render() {
        const code = 
        "public static int[] sort(int[] intListInput){\n" + 
        "    int[] intList = Arrays.copyOf(intListInput, intListInput.length);\n" +  
        "    boolean performedSwap = true;\n" +
        "    while (performedSwap){\n"+
        "        performedSwap = false;\n"+
        "        for (int i = 1; i < this.intList.length; i++){\n"+
        "            if (intList[i-1] > intList[i]){\n"+
        "                swap(intList, i, i-1);\n"+
        "                performedSwap = true;\n"+
        "            }\n"+
        "        }\n"+
        "    }\n"+
        "    return intList;\n" +
        "}\n"
        return (
            <div className="sa-container">
                <h1 className="display-4" id="main-title">Bubble Sort</h1>
                <p>Here is an array of 10 random integers between 0 and 99 inclusive.</p>
                <div class="row">
                    <div class="col-md-4"> 
                        <SortingAlgorithmApi ref={this.sorting_algorithms_api_ref} name="bubble-sort"/>
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

export default BubbleSort;