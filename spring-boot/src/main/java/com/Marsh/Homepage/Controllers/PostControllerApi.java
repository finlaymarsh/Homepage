package com.Marsh.Homepage.Controllers;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.validation.Valid;

import com.Marsh.Homepage.DAO.PostService;
import com.Marsh.Homepage.Entities.Post;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/posts", 
    produces = { MediaType.APPLICATION_JSON_VALUE})
public class PostControllerApi {

    @Autowired
	private PostService postService;


    
    @GetMapping("/")
    public Iterable<Post> getAllPosts(){
        return postService.findAll();
    }

    @PostMapping("/new")
    public Post newPost(@Valid @RequestBody Post newPost){
        newPost.setDate(LocalDate.now());
        newPost.setTime(LocalTime.now());
        return postService.save(newPost);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deletePosts(){
        postService.deleteAll();
        return ResponseEntity.accepted().build();
    }

}
