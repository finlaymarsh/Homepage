import React, { Component } from 'react';
import CodeBox from '../CodeBox';
import SortingAlgorithmApi from '../SortingAlgorithmApi';


class QuickSort extends Component {
    constructor(){
        super();
        this.sorting_algorithms_api_ref = React.createRef();
    }

    render() {
        const code1 = 
        "public static int[] sort(int[] intListInput){\n" +
        "    if (intListInput.length <= 1){\n" +
        "        return intListInput;\n" +
        "    }\n" +
        "    int[] intList = Arrays.copyOf(intListInput, intListInput.length);\n" +
        "    int pivotIndex = pivotPicker();\n" +
        "    ArrayList<Integer> lessThanPivot = new ArrayList<Integer>();\n" +
        "    ArrayList<Integer> moreThanPivot = new ArrayList<Integer>();\n" +
        "    for (int i = 0; i < intList.length; i++){\n" +
        "        if (i == pivotIndex){}\n" +
        "        else if (intList[i] < intList[pivotIndex]){\n" +
        "            lessThanPivot.add(intList[i]);\n" +
        "        } else{\n" +
        "            moreThanPivot.add(intList[i]);\n" +
        "        }\n" +
        "    }\n" +
        "    int[] sortedLessThanPivot = sort(ArrayListToArray(lessThanPivot));\n" +
        "    int[] sortedMoreThanPivot = sort(ArrayListToArray(moreThanPivot));\n" +
        "    return combineArrays(sortedLessThanPivot, sortedMoreThanPivot,\n" + 
        "                                                intList[pivotIndex]);\n" +
        "}"

        const code2 = 
        "private static int[] combineArrays(int[] lista, int[] listb, int mid){\n" +
        "    int[] sortedList = new int[lista.length + listb.length + 1];\n" +
        "    int j = 0;\n" +
        "    while (j < lista.length){\n" +
        "        sortedList[j] = lista[j];\n" +
        "        j++;\n" +
        "    }\n" +
        "    sortedList[j] = mid;\n" +
        "    j++;\n" +
        "    int k = 0;\n" +
        "    while (k < listb.length){\n" +
        "        sortedList[j] = listb[k];\n" +
        "        k++;\n" +
        "        j++;\n" +
        "    }\n" +
        "    return sortedList;\n" +
        "}";

        const code3 = 
        "private static int[] ArrayListToArray(ArrayList<Integer> intList){\n" +
        "    int[] array = new int[intList.size()];\n" +
        "    for (int i = 0; i < intList.size(); i++){\n" +
        "        array[i] = intList.get(i);\n" +
        "    }\n" +
        "    return array;\n" +
        "}";
        
        const code4 = 
        "private static int pivotPicker(){\n" +
        "    return 0;\n" +
        "}";

        return (
            <div className="sa-container">
                <h1 className="display-4" id="main-title">Quick Sort</h1>
                <p>Here is an array of 10 random integers between 0 and 99 inclusive.</p>
                <div class="row">
                    <div class="col-md-4"> 
                        <SortingAlgorithmApi ref={this.sorting_algorithms_api_ref} name="quick-sort"/>
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
                <CodeBox code = {code1}/>
                <CodeBox code = {code2}/>
                <CodeBox code = {code3}/>
                <CodeBox code = {code4}/>
            </div>
        );
      }
}

export default QuickSort;