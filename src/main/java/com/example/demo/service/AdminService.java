package com.example.demo.service;

import java.util.List;


import com.example.demo.model.Admin;
import com.example.demo.model.Guide;
import com.example.demo.model.Tourist;

public interface AdminService 
{
public List<Tourist> viewAllTourists();
public Admin checkAdminLogin(String uname,String pwd);

public List<Guide> viewallGuides();

}
