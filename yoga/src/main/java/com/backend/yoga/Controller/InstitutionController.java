package com.backend.yoga.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.yoga.Model.InstitutionModel;
import com.backend.yoga.Service.InstitutionService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin
public class InstitutionController {

    @Autowired
    private InstitutionService institutionService;

    @PostMapping("/insert/institute")
    public InstitutionModel postInstitute(@RequestBody InstitutionModel institutedata)
    {
        return institutionService.saveInstitute(institutedata);
    }

    @GetMapping("/get/institutes")
    public List<InstitutionModel> getInstitutes()
    {
        return institutionService.getInstitute();
    }

    @PutMapping("update/institutes/{id}")
    public InstitutionModel putinstitutes(@PathVariable int id, @RequestBody InstitutionModel institute) 
    {
        return institutionService.updateInstitute(id, institute);   
    }

    @DeleteMapping("/delete/institutes/{id}")
    public void deleteinstitute(@PathVariable int id)
    {
         institutionService.removeInstitute(id);
    }
    

}

