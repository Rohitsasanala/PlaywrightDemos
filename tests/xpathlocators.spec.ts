import {test,expect}from"@playwright/test";

test("Xpath Demo in playwright",async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    //1. Absolute Xpath
   const absolutelogo:Locator =page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
   await expect(absolutelogo).toBeVisible();

   //2. Relative Xpath
   const RelativeLogo:Locator =page.locator("//img[@alt='Tricentis Demo Web Shop']");
   await expect(RelativeLogo).toBeVisible();

   //3. Contains method()
   const products:Locator =page.locator("//h2/a[contains(@href,'computer')]");  

   const productsCount: number=await products.count();
   console.log("No of Computer related products:",productsCount);
   expect(productsCount).toBeGreaterThan(2);

   console.log("First Computer related product:", await products.first().textContent());
   console.log("Last  Computer related product:", await products.last().textContent());
   console.log("Nth computer related product:", await products.nth(3).textContent());

   let productTitles:string[]=await products.allTextContents();
   console.log("All Computer related products:");

   for(let pt of productTitles)
   {
    console.log(pt);
   }

   //4. Start-with method()

   const buildingProducts:Locator =page.locator("//h2/a[starts-with(@href,'/build')]");

   const count:number=await buildingProducts.count();
   expect(count).toBeGreaterThan(0);


   //5 Text() method
   const reglink: Locator=page.locator("//a[text()='Register']");
   await expect(reglink).toBeVisible();

   //6 last() method
   const lastItem: Locator=page.locator("//div[@class='column follow-us']//li[last()]");
   await expect(lastItem).toBeVisible();
   console.log("Text content of last element: ", await lastItem.textContent());

   //7 position() method
   const positionitem: Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
   await expect(positionitem).toBeVisible();
   console.log("Text content of positional element:",await positionitem.textContent());
})