package com.Marsh.Homepage.DAO;


import java.util.Optional;

import com.Marsh.Homepage.Entities.Post;


public interface PostService {
    
    public long count();
	
	public Optional<Post> findById(long id);

	public Iterable<Post> findAll();
	
	public Post save(Post post);
	
	public void deleteById(long id);

	public void deleteAll();
}
