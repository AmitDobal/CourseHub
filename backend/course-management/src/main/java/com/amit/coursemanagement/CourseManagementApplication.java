package com.amit.coursemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(info = @Info(title = "Course Management API", version = "1.0.0", description = "This API allows you to manage courses, including creating, updating, retrieving,\n"
		+ "    and deleting course information. It provides endpoints for handling various\n"
		+ "    operations related to course management, such as listing all courses, getting\n"
		+ "    details of a specific course, and adding new courses.\n" + "\n"
		+ "    The API is designed to simplify the integration of course-related functionality\n"
		+ "    into your application, providing a seamless experience for managing educational content.", termsOfService = "amit", contact = @Contact(name = "Mr. Amit Dobal", email = "amit.dobalwork@gmail.com")))
@SpringBootApplication
public class CourseManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseManagementApplication.class, args);
	}

}
