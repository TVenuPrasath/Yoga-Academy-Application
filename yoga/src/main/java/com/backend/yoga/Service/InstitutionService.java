package com.backend.yoga.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.yoga.Model.InstitutionModel;
import com.backend.yoga.Model.UserModel;
import com.backend.yoga.Repository.InstitutionRepo;

@Service
public class InstitutionService {

    @Autowired
    private InstitutionRepo institutionRepository;

    public InstitutionModel saveInstitute(InstitutionModel institutedata) 
    {
        return institutionRepository.save(institutedata);
    }

    public List<InstitutionModel> getInstitute()
    {
        return institutionRepository.findAll();
    }

    public InstitutionModel updateInstitute(int id, InstitutionModel institute)
    {
        return institutionRepository.save(institute);
    }

    public void removeInstitute(int id)
    {
        institutionRepository.deleteById(id);
    }

}

