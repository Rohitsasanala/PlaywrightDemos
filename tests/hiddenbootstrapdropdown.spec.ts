import {test,expect} from "@playwright/test";

test("Bootstarp hidden dropdown",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    //Click on PIM
    await page.getByText('PIM').click();

    //Click on Job Title Dropdown
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(3000);

    const options:Locator= page.locator("div[role='listbox'] span");

    const count:number=await options.count();
    console.log("Number of options in a dropdown:", count);

    //Print all the options
    console.log("All the text contents:", await options.allTextContents());

    console.log("Printing all the options");

    for(let i=0;i<count;i++)
    {
       //console.log(await options.nth(i).innerText()); 
       console.log(await options.nth(i).textContent());
    }

    //Select /click on option
    for(let i=0;i<count;i++)
    {
        const text=await options.nth(i).innerText();
        if(text=='Automation Tester')
        {
            await options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})