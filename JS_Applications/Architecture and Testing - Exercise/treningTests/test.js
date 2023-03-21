//NOTE npm init -y
//NOTE npm i chai playwright-chromium

const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

const host = `http://127.0.0.1:5500/03.SoftTerest/index.html?email=peter%40abv.bg&password=123456&repeatPassword=123456`;

describe("Test", async function () {
  this.timeout(6000);

  let browser, page;

  before(async () => {
    browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    page.close();
  });

  //SECTION - above is need code but sam in almost all

  it("works", async () => {
    await new Promise((r) => setTimeout(r, 2000));
    expect(1).to.equal(1);
  });

  it("loading site", async () => {
    // navigate to page
    await page.goto(host);
    await page.screenshot({ path: "page.png" });
    //find and click Sign up button
    await page.click("text=Sign Up");
    // await page.waitForSelector("");
    const rowData = await page.$$eval("div p", (rows) =>
      rows.map((r) => r.textContent)
    );
    //check that text is containing in the page as paragraph
    expect(rowData[0]).to.contains("Join our family");
  });
  it.only("Sign up", async () => {
    //navigate to page
    await page.goto(host);
    //find form
    //fill input fields
    await page.fill("input[name=email]", "email");
    await page.fill("input[name=password]", "password");
    await page.fill("input[name=repeatPassword]", "password");
    //click sign up
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.click("text=Sing up"),
    ]);
    const data = JSON.parse(request.postData());
    expect(data.email).to.equal("email");
    expect(data.password).to.equal("password");
  });
});
