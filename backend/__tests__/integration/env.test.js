let path;
if (process.env.NODE_ENV == "test") {
  path = "./dotenv/config.env.test";
} else {
  path = "./dotenv/config.env";
}
require("dotenv").config({
  path,
});

describe("Dotenv", () => {
  it("make sure env variables are loaded", async () => {
    console.log(process.env.DB_HOST);
    console.log(process.env.DB_USER);
    console.log(process.env.NODE_ENV);
    expect(process.env.DB_DIALECT).toBe("sqlite");
  });
});

