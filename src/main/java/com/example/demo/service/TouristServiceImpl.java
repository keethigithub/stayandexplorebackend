package com.example.demo.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Tourist;
import com.example.demo.repository.TouristRepository;

@Service
public class TouristServiceImpl implements TouristService  {

	@Autowired
	private TouristRepository touristRepository;
	
	
	/*@Override
	public String touristRegistration(Tourist tourist) {
		// TODO Auto-generated method stub
		touristRepository.save(tourist);
		return "Tourist Registered Successfully";
	}


	@Override
	public Tourist checkTouristLogin(String email, String password) {
		// TODO Auto-generated method stub
		return touristRepository.checkTouristLogin(email, password);
	}*/


	@Override
	public String addTourist(Tourist t) {
		touristRepository.save(t);
		return "Tourist added Successfully";
	}


	@Override
	public List<Tourist> viewallTourists() {
		return (List<Tourist>) touristRepository.findAll();
	}


	@Override
	public Tourist viewTourist(int tid) {
		
		
		return touristRepository.findById(tid).get();
	}


	@Override
	public String deleteTourist(int tid) {
	    Optional<Tourist> object=touristRepository.findById(tid);
	    String msg=null;
	    if(object.isPresent()) {
	      Tourist t=object.get();
	      touristRepository.delete(t);
	      msg="Tourist deleted successfully";
	    }
	    else {
	      msg="Tourist id not found";
	    }
	    return msg;
	    }
	


	@Override
	public String updateTourist(Tourist t) {
		Optional<Tourist> object =  touristRepository.findById(t.getid());
		 String msg = null;
		 
		 if(object.isPresent())
		 {
			 Tourist tourist = object.get();
			 tourist.setAge(t.getAge());
			 tourist.setDateofbirth(t.getDateofbirth());
			 tourist.setPassword(t.getPassword());
			 tourist.setLocation(t.getLocation());
			 tourist.setContactno(t.getContactno());
		
             tourist.setEmail(t.getEmail());
			 tourist.setGender(t.getGender());
			 tourist.setName(t.getName());
			 
			 touristRepository.save(tourist);
			 msg = "Guide Added Successfully";
		 }
		 
		 else {
		      msg="guide id not found";
		    }
		    return msg;
		    }
	}


