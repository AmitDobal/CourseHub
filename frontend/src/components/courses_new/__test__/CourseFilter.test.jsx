import { fireEvent, screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import CourseFilter from "../CourseFilter";
import { getCourseByNameAction } from "../../../module/course/courseAction";

jest.mock("../../../module/course/courseAction");
describe("CourseFilter", () => {
  it("should fire getCoursesByName action on click of search button", () => {
    renderWithRedux(<CourseFilter/>, {});
getCourseByNameAction.mockImplementation(() => (dispatch) => {})

    const textField = screen.getByLabelText("Enter course name");

    fireEvent.change(textField, { target: { value: "test title" } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
    expect(getCourseByNameAction).toHaveBeenCalledWith("test title");
  });
});
