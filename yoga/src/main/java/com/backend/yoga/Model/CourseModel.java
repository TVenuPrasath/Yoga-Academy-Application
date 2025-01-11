package com.backend.yoga.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Entity
@Data
public class CourseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseId;
    private String courseName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String courseOverview;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String courseDescription;
    private Integer courseCost;
    private Integer courseDuration;


}