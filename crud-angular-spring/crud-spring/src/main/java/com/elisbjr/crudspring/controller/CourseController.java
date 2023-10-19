package com.elisbjr.crudspring.controller;

import com.elisbjr.crudspring.entity.Course;
import com.elisbjr.crudspring.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }


    @GetMapping
    public ResponseEntity<List<Course>> list() {
        return ResponseEntity.ok().body(service.listAll());
    }
}
