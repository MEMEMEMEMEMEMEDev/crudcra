const axios = require("axios");
const apiUrl = "https://jsonplaceholder.typicode.com/comments";
const MockAdapter = require("axios-mock-adapter");

describe("App", () => {
  // it("Fetch data from Api", async () => {
  //   const response = await axios.get(apiUrl);
  //   expect(response.status).toBe(200);
  // });

  it("Should be contain a header", () => {})
  describe("Should be contain a list of comments", () => {
    describe("test more of 5 comments", () => {
      describe("coments should be differts", () => {
        
      }) 
    });
  })

  // it("Test mock", async () => {
  //   // Arrange
  //   const mock = new MockAdapter(axios);
  //   mock.onGet(apiUrl).reply(200, [{ id: 1, name: "Foo" }]);
  //   // Act
  //   const response = await axios.get(apiUrl);
  //   // Assert
  //   expect(response.status).toBe(200);
  // });

  // it("Test mock with delay", async () => {
  //   // Arrange
  //   const mock = new MockAdapter(axios);
  //   mock.onGet(apiUrl).reply(200, [{ id: 1, name: "Foo" }], { delay: 1000 });
  //   // Act
  //   const response = await axios.get(apiUrl);
  //   // Assert
  //   expect(response.status).toBe(200);
  // });
});
