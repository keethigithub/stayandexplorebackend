package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.Guide;
import com.example.demo.model.Tourist;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.GuideRepository;
import com.example.demo.repository.TouristRepository;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private TouristRepository touristRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private GuideRepository guideRepository;
	
	@Override
	public List<Tourist> viewAllTourists() {
		return (List<Tourist>) touristRepository.findAll();
	}

	@Override
	public Admin checkAdminLogin(String uname, String pwd) {
		
		return adminRepository.checkAdminLogin(uname, pwd);
	}

	
	

	@Override
	public List<Guide> viewallGuides() {
		// TODO Auto-generated method stub
		return (List<Guide>) guideRepository.findAll();
	}
	
}
