package com.backend.yoga.Model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Entity
@Data
public class UserModel
{
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        private String userName;
        private String userEmail;
        private String userPassword;
        private String userPhonenumber;
        private String userRole;

        @ManyToMany(cascade = CascadeType.ALL)
        public List<CourseModel> courses;


}