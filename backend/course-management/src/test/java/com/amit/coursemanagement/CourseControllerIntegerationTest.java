package com.amit.coursemanagement;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;

import com.amit.coursemanagement.controller.CourseController;
import com.amit.coursemanagement.dto.CourseDto;
import com.amit.coursemanagement.service.CourseService;

import jakarta.transaction.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class CourseControllerIntegerationTest {

//	@MockBean
//	private CourseService courseService;
//
//	@Autowired
//	private MockMvc mockMvc;
//
//	@InjectMocks
//	private CourseController courseController;
//
//	@Test
//	@Transactional
//	@Rollback(true)
//	void testGetAllCourses() throws Exception {
//		CourseDto course1 = CourseDto.builder().id(1).name("Java Basics").description("Learn Java fundamentals")
//				.instructor("Learn Java fundamentals").ratings(4.5).price(49.99).image("java_image.jpg").build();
//		CourseDto course2 = CourseDto.builder().id(1).name("React Mastery").description("Master React development")
//				.instructor("Jane Smith").ratings(4.8).price(59.99).image("react_image.jpg").build();
//
//		List<CourseDto> courses = Arrays.asList(course1, course2);
//
//		// Mock the service method
//		when(courseService.getAllCourses()).thenReturn(courses);
////		logger.info("\nMock data: {}", courseRepository.findAll());
//		// Validating the GET service
//		mockMvc.perform(get("/courses")).andExpect(status().isOk())
//				.andExpect(jsonPath("$.size()").value(courses.size()))
//				.andExpect(jsonPath("$[0].name").value(course1.getName()))
//				.andExpect(jsonPath("$[1].name").value(course2.getName()));
//
//	}
}
