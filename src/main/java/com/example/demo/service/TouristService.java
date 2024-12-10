package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Tourist;

public interface TouristService
{
	
	//public String touristRegistration(Tourist tourist);
    //public Tourist checkTouristLogin(String email,String password );
	public String addTourist(Tourist t);
	
	public List<Tourist> viewallTourists();
	public Tourist viewTourist(int tid);
	public String deleteTourist(int tid);
	public String updateTourist(Tourist t);
}
