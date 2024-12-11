package com.example.demo.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Guide;


@Repository
public interface GuideRepository extends CrudRepository<Guide, Integer>{
	@Query("select g from Guide g where g.email=?1 and g.password=?2")
	public Guide checkGuideLogin(String email,String password);
	
	

}

