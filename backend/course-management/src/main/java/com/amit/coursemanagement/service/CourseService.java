package com.amit.coursemanagement.service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.amit.coursemanagement.dto.CourseDto;
import com.amit.coursemanagement.entity.Course;
import com.amit.coursemanagement.repository.CourseRepository;

@Service
public class CourseService {

	private final CourseRepository courseRepository;

	private final ModelMapper modelMapper;

	public CourseService(CourseRepository courseRepository, ModelMapper modelMapper) {
		this.courseRepository = courseRepository;
		this.modelMapper = modelMapper;
	}

	public List<CourseDto> getAllCourses() {
		List<Course> courses = courseRepository.findAll();
		return StreamSupport.stream(courses.spliterator(), false).map(convertCourseModelToDto())
				.collect(Collectors.toList());
	}

	public void addCourses(List<CourseDto> courseDtos) throws Exception {
		List<Course> courses = StreamSupport.stream(courseDtos.spliterator(), false)
				.map(convertCourseDtoToCourseModel(courseDtos)).collect(Collectors.toList());
		courseRepository.saveAll(courses);
	}

	public void addCourse(CourseDto courseDto) throws Exception {
		Course course = modelMapper.map(courseDto, Course.class);
		courseRepository.save(course);
	}

	private Function<? super Course, ? extends CourseDto> convertCourseModelToDto() {
		return course -> modelMapper.map(course, CourseDto.class);
	}

	private Function<? super CourseDto, ? extends Course> convertCourseDtoToCourseModel(List<CourseDto> courseDtos) {
		return course -> modelMapper.map(courseDtos, Course.class);
	}

	public List<CourseDto> getCoursesByName(String string) {
		List<Course> courses = courseRepository.findCourseByNameIgnoreCase(string);
		return courses.stream().map(convertCourseModelToDto()).collect(Collectors.toList());
	}
}
