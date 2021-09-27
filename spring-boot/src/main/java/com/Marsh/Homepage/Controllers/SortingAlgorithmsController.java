package com.Marsh.Homepage.Controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sorting.BubbleSort;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/sorting-algorithms", 
    produces = { MediaType.APPLICATION_JSON_VALUE})
public class SortingAlgorithmsController {

    @GetMapping("/bubble-sort")
    public int[] getCurrentRandomList(){
        BubbleSort bubbleSort = new BubbleSort(10);
        return bubbleSort.getRandomIntegerList();
    }

}