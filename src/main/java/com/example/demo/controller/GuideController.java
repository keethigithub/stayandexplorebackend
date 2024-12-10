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

import com.example.demo.model.Guide;
import com.example.demo.service.GuideService;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/Guide")
public class GuideController 
{
	/*@GetMapping("guide")
	public ModelAndView home()
	{
		ModelAndView mv = new ModelAndView();
		mv.setViewName("home");
		return mv;
	}
	 @GetMapping("guideregistration")

	    public ModelAndView guidereg() {
	    	ModelAndView mv=new ModelAndView();
	    	
	    	mv.setViewName("guidereg");
	        return mv;
	    }
	 @GetMapping("guidelogin")

	    public ModelAndView customerlogin() {
	    	ModelAndView mv=new ModelAndView();
	    	
	    	mv.setViewName("guidelogin");
	        return mv;
	    }*/
	
	@Autowired
	private GuideService service;
	
	@GetMapping("/home")
	public String home()  
	{
		return "Spring Boot Rest API Project";
	}
    
	@PostMapping("/add/{id}")
	public String addguide(@RequestBody Guide g)
	{
		return service.addGuide(g);
	}
   @GetMapping("/viewall")
   public List<Guide> viewallGuides()
   {
	   return service.viewallGuides();
   }
   @GetMapping("/display/{id}")
   public Guide displayGuide(@RequestParam("id") int gid)
   {
	   return service.viewGuide(gid);
   }
   
   @DeleteMapping("/delete/{id}")
   public String deleteGuide(@RequestParam("id") int gid)
   {
	   return service.deleteGuide(gid);
   }
   public String updateguide(@RequestBody Guide g) {
	    return service.updateGuide(g);
	  }
	}

