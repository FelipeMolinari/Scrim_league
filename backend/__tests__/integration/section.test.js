let path;
if (process.env.NODE_ENV == "test") {
  path = "./dotenv/config.test.env";
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

describe("Authentication", () => {
  it("Should sum two numbers", async () => {
    const a = 2;
    const b = 4;
    const sum = a + b;
    expect(sum).toBe(6);
  });
});

// it('Should receive JWT token when authenticated with valid credentials.', ()=>{

// })
