import {test,expect, Locator} from "@playwright/test"
test("Verify Playwright Locators",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    await page.waitForTimeout(50000)
    const logo:Locator=await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(logo).toBeVisible();
    //const text:Locator=page.getByText("Welcome to our store");
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible();//regular expression
    await page.getByRole("link",{name:'Register'}).click();
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();// we can also use getByText()
    await page.getByLabel('First name:').fill("Jhon");
    await page.getByLabel('Last name:').fill("Ternus");
    await page.getByLabel('Email:').fill("abc@gmail.com");
    await page.getByPlaceholder("Search store").fill('Apple MackBook Pro');

    await page.goto(" ")
    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");
    await expect(page.getByTestId("profile-name")).toHaveText("john.doe@example.com");
})