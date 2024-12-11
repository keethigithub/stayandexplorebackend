package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Guide;


public interface GuideService 
{	
	/*public String guideRegistration(Guide guide);	
	public Guide checkGuideLogin(String email,String password);
	*/
	public String addGuide(Guide g);
    public String updateGuide(Guide g);
    public String deleteGuide(int gid);
    public Guide viewGuide(int gid);
    public List<Guide> viewallGuides();
	
	

}
