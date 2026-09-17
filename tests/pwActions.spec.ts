import {test,expect,Locator} from "@playwright/test";
test('Text Input Actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const textBox: Locator = page.locator('#name');

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxLength: string | null = await textBox.getAttribute("maxlength");
    expect(maxLength).toBe("15");

    await textBox.fill("Rohit Sasanala");

    const enteredValue: string=await textBox.inputValue();
    console.log("Input Value of the FirstName:",enteredValue);
    expect(enteredValue).toBe("Rohit Sasanala");

    await page.waitForTimeout(3000);
});

test.only('Radio Button Actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   
    const maleRadio:Locator=page.locator('#male');

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    expect(await maleRadio.isChecked()).toBe(false);
    await page.waitForTimeout(3000);

    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked();

    await page.waitForTimeout(3000);


});

test('Checkbox Actions', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // Selecting a single checkbox and assert it is checked
    const sundayCheckbox: Locator =page.getByLabel('Sunday');
    //await sundayCheckbox.check();
    //await expect(sundayCheckbox).toBeChecked();

    // Selecting all checkboxes and assert each is checked
    const days:string[] =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const checkboxes: Locator[] = days.map(index=>page.getByLabel(index));
    expect(checkboxes.length).toBe(7);
// Check all checkboxes and assert each is checked
/*
    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();

    }
   */
  //uncheck the last 3 checkboxes and assert each is unchecked
  /*
   for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    }    
        await page.waitForTimeout(5000);
   */ 
/*
    //Toggle Checkboxes - check if checked, uncheck it, else check it 
for(const checkbox of checkboxes)
{
    if(await checkbox.isChecked())
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    else
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

}
await page.waitForTimeout(3000);
*/
// Randomly select a checkbox (1,3,6)
/*
const indexes:number[]=[1,3,6];
for(const i of indexes)
    {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
await page.waitForTimeout(5000);
*/
const weekname:string="Friday";
 for(const label of days)
 {
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox:Locator=page.getByLabel(label);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
 }
 
});