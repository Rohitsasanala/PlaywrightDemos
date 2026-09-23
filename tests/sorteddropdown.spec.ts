import {test,expect,Locator} from "@playwright/test";

test("Verify Drop Down Is Sorted Or Not",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropDownOptions:Locator=page.locator('#animals>option');
    //const dropDownOptions:Locator=page.locator('#colors>option');

    const optionsText:string[]=(await dropDownOptions.allTextContents()).map(text=>text.trim());

    const orginalList:string[]=[...optionsText];//spread operator 

    const sortedList:string[]=[...optionsText].sort();// It will not affect the orginal operator

    console.log("Orginal list:",orginalList);
    console.log("Sorted list:",sortedList);

    expect(orginalList).toEqual(sortedList);


    await page.waitForTimeout(5000);


})