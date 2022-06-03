const { fetcher } = require("../../utils/fetcher");
const unmockedFetch = global.fetch;

const MOCKED_DATA = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const MOCKED_ERROR = new Error("Error fetching data");

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(MOCKED_DATA),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("fetcher", () => {
  it("should return mocked data", async () => {
    const data = await fetcher("testurl");
    expect(data).toEqual(MOCKED_DATA);
  });

  it("should throw an error", async () => {
    try {
      await fetcher("testurl");
    } catch (error) {
      expect(error).toEqual(MOCKED_ERROR);
    }
  });
});
