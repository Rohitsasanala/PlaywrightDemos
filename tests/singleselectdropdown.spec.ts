import {test,expect, Locator} from "@playwright/test";

test("Single Select Drop down",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select option from the drop down (4 ways to select option from drop down)

    //await page.locator('#country').selectOption('India'); //visible text
    //await page.locator('#country').selectOption({value:'uk'}); //by using value attribute
    //await page.locator('#country').selectOption({label:'Canada'}); //by using label attribute
    await page.locator('#country').selectOption({index:3}); //Byusing index attribute

    //2. check number of options in the drop down(count)
       const dropdownOptions:Locator=page.locator('#country>option');// Returning all the options in the form of locators
       await expect(dropdownOptions).toHaveCount(10);

       //3. Check an option present in the dropdown
       console.log("Number of options in the drop down: "+await dropdownOptions.count());
       const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());//returning array applying trim is used to remove the extra spaces in the text;
       console.log(optionsText);

       expect(optionsText).toContain('Japan');// Check if the array contains "Japan"

       //4 Printing options from the drop down
       for(const option of optionsText)
       {
        console.log(option)
       }
        


    await page.waitForTimeout(5000);




})