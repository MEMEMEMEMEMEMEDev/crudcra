import { render, screen } from "@testing-library/react";
import Post from "../../../components/Post/Post";

const MOCKED_DATA = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

describe("Post", () => {
  it("should render title", () => {
    render(<Post MOCKED_DATA />);
    expect(screen.getByText(MOCKED_DATA.title)).toBeInTheDocument();
  });
});
