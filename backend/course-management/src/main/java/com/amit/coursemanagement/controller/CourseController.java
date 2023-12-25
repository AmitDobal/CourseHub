package com.amit.coursemanagement.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.amit.coursemanagement.entity.Course;
import com.amit.coursemanagement.service.CourseService;

@RestController
public class CourseController {
	static Logger logger = LoggerFactory.getLogger(CourseController.class);
	@Autowired
	CourseService courseService;

	@GetMapping("/courses")
	@ResponseStatus(HttpStatus.OK)
	public List<Course> getAllCourses() {
		return courseService.getAllCourses();
	}

	@PostMapping("/courses")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> addCourses(@RequestBody List<Course> courses) {
		try {
			courseService.addCourses(courses);
			logger.info("\n number of courses added: {}", courses.size());
			return ResponseEntity.status(HttpStatus.CREATED).body(courses.size() + " no of courses added succefully.");
		} catch (Exception e) {
			logger.info("\n error while adding courses:  {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(" Error in saving the data");
		}
	}

	@PostMapping("/course")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> addCourse(@RequestBody Course courses) {
		try {
			courseService.addCourse(courses);
			logger.info("\n Course added succesfully");
			return ResponseEntity.status(HttpStatus.CREATED).body( "sCourse added succesfully");
		} catch (Exception e) {
			logger.info("\n error while adding courses:  {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(" Error in saving the data");
		}
	}
}
