package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User2")
public class User {
  @Id
  private String email;
  private String name;
  private String password;
  private String selectrole;

  // Getters and Setters
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getSelectrole() {
    return selectrole;
  }

  public void setSelectrole(String selectrole) {
    this.selectrole = selectrole;
  }
}
