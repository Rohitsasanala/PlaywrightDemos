import {test,expect} from "@playwright/test"

test("Multi Select Dropdown",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    // 1 Select option from the drop down (4 ways)
    //await page.locator('#colors').selectOption(['Red','Green']); //Using Visible Text
    //await page.locator('#colors').selectOption(['red','green','white']); //Using Value Attributr
    await page.locator('#colors').selectOption([{label:'Red'},{label:'Green'}]); //Using Label
    //await page.locator('#colors').selectOption([{index:0},{index:2}]);

    // 2 Check number of options in the dropdown(count)
    const dropdownOptions:Locator=page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);

    // Check an option present in the dropdown
    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);

    expect(optionsText).toContain('Green');

    for(const option of optionsText)
    {
        console.log(option);
    }

    await page.waitForTimeout(3000);

})