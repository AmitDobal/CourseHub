import React from "react";
import CourseListItem from "../CourseListItem";
import { render } from "@testing-library/react";
import CourseList from "../CourseList";

jest.mock("../CourseListItem");
describe("CourseList", () => {
  beforeAll(() => {
    CourseListItem.mockImplementation(() => <div> courselistitem comp</div>);
  });

  const courses = [
    {
      id: 1,
      name: "test title",
      description: "des",
      instructor: "tester",
    },
    {
      id: 2,
      name: "test name 2",
      description: "des 2",
      instructor: "tester 2",
    },
  ];

  it("render courselist without error", () => {
    render(<CourseList courses={courses} />);
    expect(CourseListItem).toHaveBeenCalledTimes(2);
    expect(CourseListItem).toHaveBeenCalledWith({course: courses[0]}, {});
    expect(CourseListItem).toHaveBeenCalledWith({course: courses[1]}, {});
  });
});
