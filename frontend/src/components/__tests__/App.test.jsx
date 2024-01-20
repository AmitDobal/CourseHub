import { render, screen } from "@testing-library/react";
import App from "../App";
import renderWithRedux from "../../util/testUtil";

describe("App component", () => {
  it("should render app with error", () => {
    const { asFragment } = renderWithRedux(<App />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
