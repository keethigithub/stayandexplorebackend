package com.example.demo.repository;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Tourist;

@Repository
public interface TouristRepository extends CrudRepository<Tourist, Integer>
{
@Query("select t from Tourist t where t.email=?1 and t.password=?2 ")
public Tourist checkTouristLogin(String email, String password);

}
