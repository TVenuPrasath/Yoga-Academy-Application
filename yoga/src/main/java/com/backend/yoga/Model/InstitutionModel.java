package com.backend.yoga.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class InstitutionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int instituteId;
    private String instituteName;
    private String instituteAddress;
    private String institutePhoneNumber;
    private String instituteEmail;
}
