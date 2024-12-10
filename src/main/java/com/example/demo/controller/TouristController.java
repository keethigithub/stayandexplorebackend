package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import com.example.demo.model.Tourist;

import com.example.demo.service.TouristService;
@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/Tourist")
public class TouristController 
{
   /* @GetMapping("/")
    public ModelAndView home()
    {
    ModelAndView mv = new ModelAndView();	
    mv.setViewName("home");
    return mv;
    }
    @GetMapping("touristreg")

    public ModelAndView customerreg() {
    	ModelAndView mv=new ModelAndView();
    	
    	mv.setViewName("touristreg");
        return mv;
    }
    @GetMapping("touristlogin")

    public ModelAndView customerlogin() {
    	ModelAndView mv=new ModelAndView();
    	
    	mv.setViewName("touristlogin");
        return mv;
    }*/
	
	@Autowired
	private TouristService service;
	
	@GetMapping("/home")
	public String home()  
	{
		return "Spring Boot Rest API Project";
	}
    
	@PostMapping("/add/{id}")
	public String addtourist(@RequestBody Tourist t)
	{
		return service.addTourist(t);
	}
   @GetMapping("/viewall")
   public List<Tourist> viewallTourists()
   {
	   return service.viewallTourists();
   }
   @GetMapping("/display/{id}")
   public Tourist displayTourist(@RequestParam("id") int tid)
   {
	   return service.viewTourist(tid);
   }
   
   @DeleteMapping("/delete/{id}")
   public String deleteTourist(@RequestParam("id") int tid)
   {
	   return service.deleteTourist(tid);
   }
   public String updatetourist(@RequestBody Tourist t) {
	    return service.updateTourist(t);
	  }
    
    
    
    
	
}
