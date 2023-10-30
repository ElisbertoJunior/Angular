package com.elisbjr.crudspring.controller;

import com.elisbjr.crudspring.entity.Course;
import com.elisbjr.crudspring.service.CourseService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
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
    public ResponseEntity<Course> addCourse(@RequestBody @Valid Course course) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(service.addCourse(course));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable @NotNull @Positive Long id) {
        return ResponseEntity.ok().body(service.getById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@RequestBody Course course, @PathVariable @NotNull @Positive Long id) {
        return ResponseEntity.ok().body(service.updateCourse(course, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Course>> delete(@PathVariable @NotNull @Positive Long id) {
        return ResponseEntity.ok().body(service.deleteCourse(id));
    }
}
