import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import axios from "axios";
import { getCourseAction, getCourseByNameAction } from "../courseAction";
import {
  COURSES_BY_NAME_ACTION_TYPE,
  COURSE_LIST_ACTION_TYPE,
  COURSE_LIST_ERROR_ACTION_TYPE,
} from "../courseActionTypes";

jest.mock("axios");
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe("CourseActions", () => {
  beforeEach(() => {
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
  });
  it("should able to dispatch success action", async () => {
    const store = mockStore({});

    await store.dispatch(getCourseAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
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

  it("should able to dispatch coursename action", async () => {
    const store = mockStore({});

    await store.dispatch(getCourseByNameAction("test title"));
    const actions = store.getActions();
    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: COURSES_BY_NAME_ACTION_TYPE,
      payload: [
        {
          id: 1,
          name: "test title",
          description: "des",
        },
      ],
    });
  });

  it("should able to dispatch error action", async () => {
    const store = mockStore({});

    axios.get.mockImplementation(() => {
      throw new Error();
    });

    await store.dispatch(getCourseByNameAction("test title"));

    const actions = store.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[1]).toEqual({
      type: COURSE_LIST_ERROR_ACTION_TYPE,
    });
  });
});
