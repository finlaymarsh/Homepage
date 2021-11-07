import React, { Component } from 'react';
import CodeBox from '../CodeBox';
import SortingAlgorithmApi from '../SortingAlgorithmApi';


class MergeSort extends Component {
    constructor(){
        super();
        this.sorting_algorithms_api_ref = React.createRef();
    }

    render() {
        const code1 = 
        "public static int[] sort(int[] intListInput){\n" +
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
                    <div class="col-lg"> 
                    <SortingAlgorithmApi ref={this.sorting_algorithms_api_ref} name="merge-sort"/>
                    </div>
                    <div class="col-md">  
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
                <CodeBox code={code1}/>
                <CodeBox code={code2}/>
                <CodeBox code={code3}/>
            </div>
        );
      }
}

export default MergeSort;