package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	UserService repo;
	
	@GetMapping("/Login")
	public String login(@RequestParam("email")String email,@RequestParam("password")String password) {
		User u1=repo.verify(email);
		if(u1==null)
			return "No";
		else {
			if(u1.getPassword().equals(password)) {
				 System.out.println(u1.getSelectrole());
				return u1.getSelectrole();
			}
			else
				return "No";
		}
			
	}
	
	@PostMapping("/Register")
	public String add(@RequestBody User u) {
		return repo.insert(u);
	}
	

}
