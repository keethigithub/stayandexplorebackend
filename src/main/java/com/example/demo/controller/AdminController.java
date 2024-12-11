package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/Admin")
public class AdminController
{
	@GetMapping("/adminlogin")
	 public ModelAndView adminlogin() {
    	ModelAndView mv=new ModelAndView();
    	
    	mv.setViewName("adminlogin");
        return mv;
    }
    

}
