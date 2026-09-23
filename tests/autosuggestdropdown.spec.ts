import {test,expect,Locator} from "@playwright/test"

test("Autosuggest dropdown",async ({page})=>{

     await page.goto("https://www.flipkart.com/");

     await page.locator("form[class='lilxh_ header-form-search isa71P'] input[placeholder='Search for Products, Brands and More']").fill("smart");

     await page.waitForTimeout(3000);

})