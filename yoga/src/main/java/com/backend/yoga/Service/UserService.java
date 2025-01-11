package com.backend.yoga.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.yoga.Model.CourseModel;
import com.backend.yoga.Model.UserModel;
import com.backend.yoga.Repository.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo repo;

    public UserModel postuser(@RequestBody UserModel user)
    {
        return repo.save(user);
    }
    
    public List<UserModel> getuser()
    {
        return repo.findAll();
    }
    public Optional<UserModel> getuserbyid(int id)
    {
        return repo.findById(id);
    }

    public UserModel updateUserCourses(int id, List<CourseModel> courses) {
        Optional<UserModel> userOptional = repo.findById(id);
        if (userOptional.isPresent()) {
            UserModel user = userOptional.get();
            user.setCourses(courses);
            return repo.save(user);
        }
        return null; // Handle case where user is not found
    }

    public UserModel updateuser(int id,UserModel user)
    {
        return repo.save(user);
    }

    public void deleteuser(int id)
    {
        repo.deleteById(id);
    }
}
