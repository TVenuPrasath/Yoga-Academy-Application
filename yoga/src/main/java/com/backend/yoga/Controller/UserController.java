package com.backend.yoga.Controller;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.yoga.Model.CourseModel;
import com.backend.yoga.Model.UserModel;
import com.backend.yoga.Service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin
public class UserController {


    @Autowired
     private UserService service;

     @PostMapping("/postusers")
     public UserModel post(@RequestBody UserModel user)
     {
        return service.postuser(user);
     }

     @GetMapping("/getusers")
     public List<UserModel> get()
    {
         return service.getuser();   
    }
     
     @GetMapping("/getusersby/{id}")
     public Optional<UserModel> get(@PathVariable int id)
    {
         return service.getuserbyid(id);   
    }


    @PutMapping("/update/user-course/{id}")
     public UserModel updateUserCourses(@PathVariable int id, @RequestBody UserModel user) {
    // Fetch the existing user
    Optional<UserModel> existingUser = service.getuserbyid(id);
    if (existingUser.isPresent()) 
    {
        // Update courses
        UserModel userToUpdate = existingUser.get();
        userToUpdate.setCourses(user.getCourses());
        
        // Save the updated user
        return service.postuser(userToUpdate);
    } else 
    {
        throw new RuntimeException("User not found");
    }
}

    @PutMapping("update/user/{id}")
    public UserModel updateUser(@PathVariable int id, @RequestBody UserModel user)
    {
        return service.updateuser(id, user);
    }

    @DeleteMapping("/delete/user/{id}")
    public void deleteUser(@PathVariable int id)
    {
         service.deleteuser(id);
    }
}
