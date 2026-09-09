 import {test,expect} from "@playwright/test";
 test("Verify Page title",async ({page})=>{
    await page.goto("https://www.accenture.com/in-en",{
    
      waitUntil: "domcontentloaded",timeout: 60000});
    const title:string=await page.title();
    console.log("Title:",title);
   await expect(page).toHaveTitle("Reinvented with Accenture | Accenture");
 })