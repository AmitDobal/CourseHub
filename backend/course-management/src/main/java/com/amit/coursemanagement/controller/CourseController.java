package com.amit.coursemanagement.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.amit.coursemanagement.dto.CourseDto;
import com.amit.coursemanagement.service.CourseService;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.ExampleObject;

@Tag(name = "Course API", description = "Courses API")
@RestController
@RequestMapping("api/v1")
public class CourseController {
	static Logger logger = LoggerFactory.getLogger(CourseController.class);
	@Autowired
	CourseService courseService;

	@Operation(summary = "Get all courses", method = "", description = "Get all the courses available")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Successfully retrieved list of course", content = @Content(mediaType = "application/json", array = @ArraySchema(schema = @Schema(implementation = CourseDto.class)))),
			@ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden", content = @Content(mediaType = "text/plain", schema = @Schema(implementation = String.class), examples = {
					@ExampleObject(name = "Forbidden Response", value = "Access denied.") })),
			@ApiResponse(responseCode = "404", description = "Resource not found", content = @Content(mediaType = "text/plain", schema = @Schema(implementation = String.class), examples = {
					@ExampleObject(name = "Not Found Response", value = "Resource not found.") })) })
	@GetMapping("/courses")
	@ResponseStatus(HttpStatus.OK)
	public List<CourseDto> getAllCourses() {
		return courseService.getAllCourses();
	}

	@Operation(summary = "Add Course", description = "Add single courses")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Successfully added the course"),
			@ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden"),
			@ApiResponse(responseCode = "404", description = "Resource not found") })

	@PostMapping("/course")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> addCourse(@RequestBody CourseDto courses) {
		try {
			courseService.addCourse(courses);
			logger.info("\n Course added succesfully");
			return ResponseEntity.status(HttpStatus.CREATED).body("Course added successfully");
		} catch (Exception e) {
			logger.info("\n Error while adding courses:  {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in saving the course data");
		}
	}

	@Operation(summary = "Add Courses", description = "Add list of courses")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Successfully added all the courses"),
			@ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden"),
			@ApiResponse(responseCode = "404", description = "Resource not found") })
	@PostMapping("/courses")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> addCourses(@RequestBody List<CourseDto> courses) {
		try {
			courseService.addCourses(courses);
			logger.info("\n number of courses added: {}", courses.size());
			return ResponseEntity.status(HttpStatus.CREATED).body(courses.size() + " no of courses added succefully.");
		} catch (Exception e) {
			logger.info("\n error while adding courses:  {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in saving the courses data");
		}
	}

	@Operation(summary = "Find a course", description = "Find course by name")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Successfully retrived the course"),
			@ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden"),
			@ApiResponse(responseCode = "404", description = "Resource not found") })
	@GetMapping("/courses/{name}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<CourseDto>> getCoursesByName(@PathVariable("name") String name) {
		List<CourseDto> courses = courseService.getCoursesByName(name);
		return ResponseEntity.ok(courses);
	}
}
