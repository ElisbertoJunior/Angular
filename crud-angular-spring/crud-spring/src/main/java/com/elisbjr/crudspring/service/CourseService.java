package com.elisbjr.crudspring.service;

import com.elisbjr.crudspring.entity.Course;
import com.elisbjr.crudspring.repository.CourseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CourseService {


    private CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }


    public List<Course> listAll() {
        return repository.findAll();
    }

    public Course addCourse(Course course) {
        return repository.save(course);
    }
    public Course getById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Curso não encontrado")
        );
    }

    public Course updateCourse(Course course, Long id) {
        Course currentCourse = getById(id);

        currentCourse.setName(course.getName());
        currentCourse.setCategory(course.getCategory());

        return repository.save(currentCourse);
    }

    public List<Course> deleteCourse(Long id) {
         repository.deleteById(id);
         return this.listAll();
    }
}
