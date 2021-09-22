package com.Marsh.Homepage.DAO;


import java.util.Optional;

import com.Marsh.Homepage.Entities.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {
    
    @Autowired
	private PostRepository postRepository;
	
	@Override
	public long count() {
		return postRepository.count();
	}

	@Override
	public Iterable<Post> findAll() {
		return postRepository.findAllByOrderByDateDescTimeDesc();
	}
	
	@Override
	public Post save(Post post) {
		postRepository.save(post);
        return post;
	}

	@Override
	public void deleteById(long id) {
		postRepository.deleteById(id);
	}

	@Override
	public void deleteAll() {
		postRepository.deleteAll();
	}
	
	@Override
	public Optional<Post> findById(long id) {
		return postRepository.findById(id);
	}
}
