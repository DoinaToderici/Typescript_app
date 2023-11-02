import Home from "./Home";
import { render } from "@testing-library/react";

describe("Home", () => {
  test("Show Home page", () => {
    render(<Home />);
  });
});
