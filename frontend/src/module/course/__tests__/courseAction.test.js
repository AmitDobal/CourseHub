import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import axios from "axios";
import getCourseAction from "../courseAction";
import { COURSE_LIST_ACTION_TYPE } from "../courseActionTypes";

jest.mock("axios");
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe("CourseActions", () => {
  it("should able to dispatch success action", async () => {
    const store = mockStore({});

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            name: "test title",
            description: "des",
          },
        ],
      })
    );
    await store.dispatch(getCourseAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0]).toEqual({
      type: COURSE_LIST_ACTION_TYPE,
      payload: [
        {
          id: 1,
          name: "test title",
          description: "des",
        },
      ],
    });
  });
});
