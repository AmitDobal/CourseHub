package com.amit.coursemanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amit.coursemanagement.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

	public List<Course> findCourseByInstructor(String instructor);
}
