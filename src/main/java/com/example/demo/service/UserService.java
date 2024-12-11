package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Component
public class UserService {
	@Autowired
	UserRepository repo;
	public User verify(String u) {
		return repo.findByEmail(u);
	}
	public String insert(User u) {
		repo.save(u);
		return "Yes"; 
	}

}

