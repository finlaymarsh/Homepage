package com.Marsh.Homepage.Controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import sorting.BubbleSort;
import sorting.InsertionSort;
import sorting.MergeSort;
import sorting.QuickSort;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/sorting-algorithms", 
    produces = { MediaType.APPLICATION_JSON_VALUE})
public class SortingAlgorithmsController {

    @GetMapping("/random-list")
    public int[] getCurrentRandomList(){
        return BubbleSort.generateRandomIntList(10, 0, 100);
    }

    @PostMapping("/bubble-sort")
    public List<int[]> bubbleSort(@Valid @RequestBody int[] currentList){
        return BubbleSort.sort(currentList);
    }

    @PostMapping("/insertion-sort")
    public List<int[]> insertionSort(@Valid @RequestBody int[] currentList){
        return InsertionSort.sort(currentList);
    }

    @PostMapping("/merge-sort")
    public int[] mergeSort(@Valid @RequestBody int[] currentList){
        return MergeSort.sort(currentList);
    }

    @PostMapping("/quick-sort")
    public int[] quickSort(@Valid @RequestBody int [] currentList){
        return QuickSort.sort(currentList);
    }
}