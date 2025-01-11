package com.backend.yoga.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.yoga.Model.CourseModel;
import com.backend.yoga.Service.CourseService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    private CourseService courseservice;

    @PostMapping("/post/course")
    public CourseModel postcourse(@RequestBody CourseModel course)
    {
        return courseservice.savecourse(course);
    }
    
    @GetMapping("/get/course")
    public List<CourseModel> getcourse()
    {
        return courseservice.getcourse();
    }

    @GetMapping("/admin/we")
    public String demo()
    {
        return "demooo";
    }

    @PutMapping("update/course/{id}")
    public CourseModel putcourse(@PathVariable int id, @RequestBody CourseModel course) 
    {
        return courseservice.updateCourse(id, course);
    }

    @DeleteMapping("delete/course/{id}")
    public void deletecourse(@PathVariable int id)
    {
        courseservice.deleteCourse(id);
    }
   
}

