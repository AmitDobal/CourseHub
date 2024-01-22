package com.amit.coursemanagement.repository;

import java.util.List;
import java.util.stream.StreamSupport;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.jdbc.Sql;

import com.amit.coursemanagement.entity.Course;

@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class CourseRepositoryTest {

	@Autowired
	private CourseRepository courseRepository;

	@Test
	@Sql(scripts = { "classpath:InsertInitialCourseRecordForTest.sql" })
	void shouldAbleToFetchAllBooksInDB() {
		Iterable<Course> all = courseRepository.findAll();
		Long totalCourseCount = StreamSupport.stream(all.spliterator(), false).count();
		Assertions.assertEquals(2, totalCourseCount);
	}
	
	@Test
	@Sql(scripts = { "classpath:InsertInitialCourseRecordForTest.sql" })
	void shouldReturnOneCourseForWhenInstructorIsTestInstructor() {
		List<Course> test_instructor = courseRepository.findCourseByInstructor("Test Instructor");
		Long count = StreamSupport.stream(test_instructor.spliterator(), false).count();
		Assertions.assertEquals(1, count);
	}
	@Test
	@Sql(scripts = { "classpath:InsertInitialCourseRecordForTest.sql" })
	void shouldReturnOneCourseForWhenNameIsTest() {
		List<Course> test_instructor = courseRepository.findCourseByName("React Fundamentals");
		Long count = StreamSupport.stream(test_instructor.spliterator(), false).count();
		Assertions.assertEquals(1, count);
	}
	@Test
	@Sql(scripts = { "classpath:InsertInitialCourseRecordForTest.sql" })
	void shouldReturnOneCourseForWhenNameIsTestIgnoreCase() {
		List<Course> test_instructor = courseRepository.findCourseByNameIgnoreCase("ReACt FuNdamEnTals");
		Long count = StreamSupport.stream(test_instructor.spliterator(), false).count();
		Assertions.assertEquals(1, count);
	}
}
