package com.example.demo.model;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="guide_table")
public class Guide {
	
	@Id//primary key=unique+notnull
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="guide_id")
	private int id;
	@Column(name="guide_name",nullable=false,length=100)
	private String Name;
	@Column(name="guide_gender",nullable=false,length=20)
	private String gender;
	@Column(name="guide_age",nullable=false,length=100)
	private int age;
	@Column(name="guide_dateofbirth",nullable=false,length=100)
	private String dateofbirth;
	@Column(name="guide_email",nullable=false,length=100,unique=true)
	private String email;
	@Column(name="guide_password",nullable=false,length=100)
	private String password;
	@Column(name="guide_location",nullable=false,length=100)
	private String location;
	@Column(name="guide_experience",nullable=false,length=100)
	private int experience;
	@Column(name="guide_contact",nullable=false,unique=true,length=100)
	private String contact;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDateofbirth() {
		return dateofbirth;
	}
	public void setDateofbirth(String i) {
		this.dateofbirth = i;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	
	
	

}
