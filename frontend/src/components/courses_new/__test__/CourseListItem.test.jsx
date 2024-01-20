import { render, screen } from "@testing-library/react";
import React from "react";
import CourseListItem from "../CourseListItem";

describe("CourseListItem", () => {
  it("should render courselistitem without error", () => {
    const course = {
      id: 1,
      name: "test title",
      description: "desc",
      instructor: "tester",
    };
    render(<CourseListItem course = {course}/>)
    expect(screen.getByText("test title")).toBeInTheDocument();
    expect(screen.getByText("desc")).toBeInTheDocument();
    expect(screen.getByText("tester")).toBeInTheDocument();
  });
});
