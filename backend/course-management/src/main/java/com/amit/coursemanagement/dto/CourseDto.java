package com.amit.coursemanagement.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(name = "CourseDto", description = "Details about course")
public class CourseDto {
	@Schema(description = "Unique identifier for the course", example = "1", required = true, readOnly = true)
	private int id;

	@Schema(description = "Name of the course", example = "Java Basics", minLength = 1, maxLength = 100, pattern = "^[A-Za-z0-9 ]+$")
	private String name;

	@Schema(description = "Description of the course", example = "Learn Java fundamentals", maxLength = 1000)
	private String description;

	@Schema(description = "Instructor of the course", example = "John Doe", maxLength = 100)
	private String instructor;

	@Schema(description = "Ratings of the course", example = "4.5", minimum = "0", maximum = "5")
	private double ratings;

	@Schema(description = "Price of the course", example = "49.99", minimum = "0.0")
	private double price;

	@Schema(description = "URL to the course image", example = "http://example.com/java-basics.jpg", format = "uri")
	private String image;

}
