package com.elisbjr.crudspring.service;

import com.elisbjr.crudspring.entity.Course;
import com.elisbjr.crudspring.repository.CourseRepository;
import org.springframework.stereotype.Service;

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
}
