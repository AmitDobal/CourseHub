package com.amit.coursemanagement.integrationTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.jdbc.Sql;

import com.amit.coursemanagement.CourseManagementApplication;
import com.amit.coursemanagement.entity.Course;

@SpringBootTest(classes = CourseManagementApplication.class, webEnvironment = WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = ClassMode.AFTER_EACH_TEST_METHOD)
public class CourseControllerTest {

	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate testRestTemplate;

	@Test
	@Sql(scripts = { "classpath:InsertInitialCourseRecordForTest.sql" })
	void shouldReturnCourseWhenCourseApiCalled() {
		Course[] courses = testRestTemplate.getForObject("http://localhost:" + port + "/api/v1/courses", Course[].class);
		assertThat(courses).isNotNull();
		assertThat(courses.length).isEqualTo(2);
	}
}
