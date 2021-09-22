package com.Marsh.Homepage.DAO;

import com.Marsh.Homepage.Entities.Post;

import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long>{

    public Iterable<Post> findAllByOrderByDateDescTimeDesc();
}