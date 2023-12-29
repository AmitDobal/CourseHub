package com.amit.coursemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(info = @Info(title = "Course API", version = "1.0.0", description = "API related for course", termsOfService = "amit", contact = @Contact(name = "Mr Amit", email = "amit.dobalwork@gmail.com")))
@SpringBootApplication
public class CourseManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseManagementApplication.class, args);
	}

}
