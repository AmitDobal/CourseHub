import React from "react";
import renderWithRedux from "../../../util/testUtil";
import CourseContainer from "../CourseContainer";
import { screen } from "@testing-library/react";
import CourseList from "../CourseList";

jest.mock("../CourseList");
describe("CourseContainer", () => {
  beforeAll(() => {
    CourseList.mockImplementation(() => <div>mock courselist component</div>);
  });

  it("should render with without error", () => {
    const courses = [
      {
        id: 1,
        name: "test title",
        description: "des",
        instructor: "tester",
      },
    ];
    renderWithRedux(<CourseContainer />, {
      initialState: {
        courseReducer: {
          courses,
        },
      },
    });

    expect(CourseList).toHaveBeenCalledWith({ courses }, {});
  });
});
