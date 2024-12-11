package com.example.demo.model;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;

@Entity
@Table(name="tourist_table")

public class Tourist {
	@Id//primary key=unique+notnull
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="tourist_id")
	private int id;
	@Column(name="tourist_name",nullable=false, length = 100)
	private String name;
	@Column(name="tourist_gender",nullable=false,length = 20)
	private String gender;
	@Column(name="tourist_email",nullable=false,length = 100)
	private String email;
	@Column(name="tourist_Dateofbirth",nullable=false,unique=true,length = 100)
	private int Dateofbirth;
	@Column(name="tourist_password",nullable=false , length = 100)
	private String password;
	@Column(name="tourist_location",nullable=false , length = 100)
	private String location;
	@Column(name="tourist_contactno",nullable=false , length = 100)
	private int contactno;
	@Column(name="tourist_age",nullable=false , length = 100)
	private int age;
	
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getid() {
		return id;
	}
	public void setid(int id)
	{
		this.id=id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public int getDateofbirth() {
		return Dateofbirth;
	}
	public void setDateofbirth(int dateofbirth) {
		this.Dateofbirth = dateofbirth;
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
		
	public int getContactno() {
			return contactno;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public void setContactno(int contactno) {
			this.contactno = contactno;
		}
	
	
}
