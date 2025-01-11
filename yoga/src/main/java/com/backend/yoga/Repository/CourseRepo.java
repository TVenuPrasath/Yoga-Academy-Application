package com.backend.yoga.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.yoga.Model.CourseModel;

public interface CourseRepo extends JpaRepository<CourseModel,Integer> {

    
} 
