package com.amit.coursemanagement.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.amit.coursemanagement.dto.CourseDto;
import com.amit.coursemanagement.service.CourseService;

@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class CourseControllerTest {

	@InjectMocks
	private CourseController courseController;

	@Mock
	private CourseService courseService;

	@Test
	void shouldReturnListOfCourseDtoWhenGetCoursesCalled() {
		CourseDto courseDto = getDummyCourseDto();
		when(courseService.getAllCourses()).thenReturn(Arrays.asList(courseDto));

		List<CourseDto> allCourses = courseController.getAllCourses();
		assertThat(1).isEqualTo(allCourses.size());
		assertThat(allCourses.get(0)).isNotNull().hasFieldOrPropertyWithValue("name", "Java Basics")
				.hasFieldOrPropertyWithValue("description", "Learn Java fundamentals")
				.hasFieldOrPropertyWithValue("instructor", "John Doe").hasFieldOrPropertyWithValue("ratings", 4.5)
				.hasFieldOrPropertyWithValue("price", 49.99);

	}
	@Test
	void shouldReturnListOfCourseDtoWhenGetCoursesByNameCalled() {
		List<CourseDto> courseDtos = new ArrayList<>();
		courseDtos.add(getDummyCourseDto());
		when(courseService.getCoursesByName(anyString())).thenReturn(courseDtos);
		 ResponseEntity<List<CourseDto>> courses = courseController.getCoursesByName("Java Basics");
		 assertThat(courses.getBody()).isNotNull();
		 assertThat(courses.getBody().size()).isEqualTo(1);
	}

	@Test
	void shouldReturnCreatedStatusWhenAddCourseCalled() throws Exception {
		CourseDto courseDto = getDummyCourseDto();

		ResponseEntity<String> response = courseController.addCourse(courseDto);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
		assertThat(response.getBody()).isEqualTo("Course added successfully");
		verify(courseService, times(1)).addCourse(courseDto);
	}

	@Test
	void shouldReturnInternalServerErrorWhenAddCourseFails() throws Exception {
		CourseDto courseDto = getDummyCourseDto();
		doThrow(new RuntimeException("Test: Some error!!!")).when(courseService).addCourse(courseDto);

		ResponseEntity<String> response = courseController.addCourse(courseDto);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
		assertThat(response.getBody()).isEqualTo("Error in saving the course data");
		verify(courseService, times(1)).addCourse(courseDto);
	}

	@Test
	void shouldReturnCreatedStatusWhenAddCoursesCalled() throws Exception {
		CourseDto courseDto = getDummyCourseDto();

		ResponseEntity<String> response = courseController.addCourses(Arrays.asList(courseDto));

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
		assertThat(response.getBody()).isEqualTo(Arrays.asList(courseDto).size() + " no of courses added succefully.");
		verify(courseService, times(1)).addCourses(Arrays.asList(courseDto));
	}

	@Test
	void shouldReturnInternalServerErrorWhenAddCoursesFails() throws Exception {
		CourseDto courseDto = getDummyCourseDto();
		doThrow(new RuntimeException("Test: Some error!!!")).when(courseService).addCourses(Arrays.asList(courseDto));

		ResponseEntity<String> response = courseController.addCourses(Arrays.asList(courseDto));
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
		assertThat(response.getBody()).isEqualTo("Error in saving the courses data");
		verify(courseService, times(1)).addCourses(Arrays.asList(courseDto));
	}

	private CourseDto getDummyCourseDto() {
		CourseDto course1 = CourseDto.builder().id(1).name("Java Basics").description("Learn Java fundamentals")
				.instructor("John Doe").ratings(4.5).price(49.99).image("java_image.jpg").build();
		return course1;
	}

}
