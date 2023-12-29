package com.amit.coursemanagement.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "course")
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotBlank
	@Size(min = 2, max = 100)
	@Column(nullable = false, length = 100)
	private String name;

	@Size(max = 1000)
	@Column(length = 1000)
	private String description;

	@Size(max = 100)
	@Column(length = 100)
	private String instructor;

	@NotNull
	@Column(nullable = false)
	private double ratings;

	@NotNull
	@Column(nullable = false)
	private double price;

	@Column
	private String image;

}
