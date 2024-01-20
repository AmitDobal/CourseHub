import React from "react";
import renderWithRedux from "../../../util/testUtil";
import CourseContainer from "../CourseContainer";
import CourseList from "../CourseList";
import getCourseAction from "../../../module/course/courseAction.js";
import {
  COURSE_LIST_ACTION_TYPE,
  COURSE_LIST_ERROR_ACTION_TYPE,
  COURSE_LIST_PENDING_ACTION_TYPE,
} from "../../../module/course/courseActionTypes.js";
import { screen } from "@testing-library/react";

jest.mock("../CourseList");
jest.mock("../../../module/course/courseAction.js");
describe("CourseContainer", () => {
  beforeAll(() => {
    CourseList.mockImplementation(() => <div>mock courselist component</div>);
  });

  it("should render without error", () => {
    const courses = [
      {
        id: 1,
        name: "test title",
        description: "des",
        instructor: "tester",
      },
    ];
    getCourseAction.mockImplementation(() => ({
      type: COURSE_LIST_ACTION_TYPE,
      payload: courses,
    }));
    renderWithRedux(<CourseContainer />, {});

    expect(CourseList).toHaveBeenCalledWith({ courses }, {});
  });

  it("should show the loader when Pending is true", () => {
    getCourseAction.mockImplementation(() => ({
      type: COURSE_LIST_PENDING_ACTION_TYPE,
    }));
    renderWithRedux(<CourseContainer />, {});
    expect(screen.getByTestId("course-loader")).toBeInTheDocument();
  });

  it("should show error message when Error ocurred", () => {
    getCourseAction.mockImplementation(() => ({
      type: COURSE_LIST_ERROR_ACTION_TYPE,
    }));
    renderWithRedux(<CourseContainer />, {});
    expect(screen.getByTestId("course-error")).toBeInTheDocument();
  });
});
