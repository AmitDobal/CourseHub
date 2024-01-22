package com.amit.coursemanagement.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.amit.coursemanagement.dto.CourseDto;
import com.amit.coursemanagement.entity.Course;
import com.amit.coursemanagement.repository.CourseRepository;

@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class CourseServiceTest {

	@InjectMocks
	private CourseService courseService;

	@Mock
	private CourseRepository courseRepository;

	@Mock
	private ModelMapper mapper;

	@Test
	void shouldReturnListOfCourseDtoWhenGetCourseCalled() {
		Course course = getDummyCourse();
		when(courseRepository.findAll()).thenReturn(Arrays.asList(course));
		when(mapper.map(course, CourseDto.class)).thenReturn(getDummyCourseDto());
		List<CourseDto> courseDtos = courseService.getAllCourses();
		assertThat(courseDtos.size()).isEqualTo(1);
		assertThat(courseDtos.get(0)).isNotNull().hasFieldOrPropertyWithValue("name", "Java Basics")
				.hasFieldOrPropertyWithValue("description", "Learn Java fundamentals")
				.hasFieldOrPropertyWithValue("instructor", "John Doe").hasFieldOrPropertyWithValue("ratings", 4.5)
				.hasFieldOrPropertyWithValue("price", 49.99);
	}

	@Test
	void shouldReturnNameByCourseNameIgnoreCase() {
		List<Course> courses = new ArrayList<>();
		Course course = getDummyCourse();
		courses.add(course);
		CourseDto courseDto = getDummyCourseDto();

		when(courseRepository.findCourseByNameIgnoreCase(anyString())).thenReturn(courses);
		when(mapper.map(course, CourseDto.class)).thenReturn(courseDto);

		List<CourseDto> courseDtoList = courseService.getCoursesByName("Java Basics");
		assertThat(courseDtoList.size()).isEqualTo(1);
	}

	@Test
	void shouldAddCoursesSuccessfully() {
		// Given
		List<CourseDto> courseDtos = Arrays.asList(getDummyCourseDto());

		List<Course> expectedCourses = courseDtos.stream().map(dto -> mapper.map(dto, Course.class))
				.collect(Collectors.toList());

		// Mocking behavior
		when(mapper.map(any(CourseDto.class), eq(Course.class))).thenAnswer(invocation -> {
			CourseDto dto = invocation.getArgument(0);
			Course course = new Course();
			// Customize the mapping logic as needed
			course.setName(dto.getName());
			course.setDescription(dto.getDescription());
			// Map other properties
			return course;
		});

		// When
		try {
			courseService.addCourses(courseDtos);
		} catch (Exception e) {
			fail("Exception not expected during addCourses");
		}

		// Then
		verify(courseRepository, times(1)).saveAll(expectedCourses);
	}

	@Test
	void shouldAddCourseSuccessfully() {
		// Given
		CourseDto courseDto = getDummyCourseDto();

		Course expectedCourse = getDummyCourse();

		// Mocking behavior
		when(mapper.map(any(CourseDto.class), eq(Course.class))).thenAnswer(invocation -> {
			CourseDto dto = invocation.getArgument(0);
			Course course = new Course();
			course.setId(dto.getId());
			course.setName(dto.getName());
			course.setDescription(dto.getDescription());
			course.setPrice(dto.getPrice());
			course.setInstructor(dto.getInstructor());
			course.setRatings(dto.getRatings());
			course.setImage(dto.getImage());
			return course;
		});

		// When
		try {
			courseService.addCourse(courseDto);
		} catch (Exception e) {
			fail("Exception not expected during addCourses");
		}

		// Then
		verify(courseRepository, times(1)).save(expectedCourse);
	}

	private Course getDummyCourse() {
		Course course1 = Course.builder().id(1).name("Java Basics").description("Learn Java fundamentals")
				.instructor("John Doe").ratings(4.5).price(49.99).image("java_image.jpg").build();
		return course1;
	}

	private CourseDto getDummyCourseDto() {
		CourseDto course1 = CourseDto.builder().id(1).name("Java Basics").description("Learn Java fundamentals")
				.instructor("John Doe").ratings(4.5).price(49.99).image("java_image.jpg").build();
		return course1;
	}
}
