import {test,expect,Locator} from "@playwright/test";

test("Verify CSS Locators",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
  //tag#id
  /*const Searchbox:Locator =page.locator("input#small-searchterms")
  await Searchbox.fill("T-Shirts");
  await expect(page.locator("input#small-searchterms")).toBeVisible();
  await page.locator("input#small-searchterms").fill("T-Shirts");
  */
  //tag.class
  //await page.locator("input.search-box-text").fill("Pants");
  
  //tag[attribute='value']
  //await page.locator("input[name='q']").fill("Shirts");

  //tag.class[attribute='value']
  await page.locator("input.search-box-text[value='Search store']").fill("Pants");
  await page.waitForTimeout(3000);

})