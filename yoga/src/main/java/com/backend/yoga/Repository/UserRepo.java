package com.backend.yoga.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.yoga.Model.UserModel;

public interface UserRepo  extends JpaRepository<UserModel,Integer>{
    
}
