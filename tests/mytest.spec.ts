 import {test,expect} from "@playwright/test";// From Playwright test module, we are importing test and expect functions
 test("Verify Page title",async ({page})=>{   // To create test case, we are using test function. It takes two parameters, first is test name and second is async function with page object as parameter
    await page.goto("https://www.accenture.com/in-en",{
    
      waitUntil: "domcontentloaded",timeout: 5000});// It tells playwright to wait until the page's HTML/DOM is loaded before moving to the next step. 
    const title:string=await page.title(); //Browser tab will return title 
    console.log("Title:",title);
   await expect(page).toHaveTitle("Reinvented with Accenture");
   await page.waitForTimeout(3000);
 })