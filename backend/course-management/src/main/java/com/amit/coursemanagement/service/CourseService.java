package com.amit.coursemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amit.coursemanagement.entity.Course;
import com.amit.coursemanagement.repository.CourseRepository;

@Service
public class CourseService {

	@Autowired
	CourseRepository courseRepository;

	public List<Course> getAllCourses() {
		List<Course> courses = courseRepository.findAll();
		return courses;
	}

	public void addCourses(List<Course> courses) throws Exception {
		courseRepository.saveAll(courses);
	}

	public void addCourse(Course courses) throws Exception {
		courseRepository.save(courses);
	}
}
