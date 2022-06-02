import { render, screen } from "@testing-library/react";
import Post from "../../components/Post";

describe("Post", () => {
  it("should be render a post", () => {
    render(<Post />);
  });
});
