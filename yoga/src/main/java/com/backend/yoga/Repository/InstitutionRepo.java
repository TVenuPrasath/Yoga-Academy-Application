package com.backend.yoga.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.yoga.Model.InstitutionModel;

public interface InstitutionRepo extends JpaRepository<InstitutionModel,Integer>{
}
