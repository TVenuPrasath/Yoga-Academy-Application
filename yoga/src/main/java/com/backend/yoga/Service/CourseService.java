package com.backend.yoga.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.backend.yoga.Model.CourseModel;
import com.backend.yoga.Repository.CourseRepo;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courserepo;

    public CourseModel savecourse(CourseModel course)
    {
        return courserepo.save(course);
    }

    public List<CourseModel> getcourse()
    {
        return courserepo.findAll();
    }

    public CourseModel updateCourse(int id,CourseModel course)
    {
        return courserepo.save(course);
    }

    public void deleteCourse(int id)
    {
        if (courserepo.existsById(id)) {
            courserepo.deleteById(id);
        }
    }

}

