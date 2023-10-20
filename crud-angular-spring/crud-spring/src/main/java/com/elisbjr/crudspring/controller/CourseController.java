package com.elisbjr.crudspring.controller;

import com.elisbjr.crudspring.entity.Course;
import com.elisbjr.crudspring.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }


    @GetMapping
    public ResponseEntity<List<Course>> list() {
        return ResponseEntity.ok().body(service.listAll());
    }

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(service.addCourse(course));
    }
}
