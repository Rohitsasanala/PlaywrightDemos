import {test,expect,Locator} from '@playwright/test';

 test("Comparing methods", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const products:Locator=page.locator('.product-title');

    //console.log(await products.nth(1).innerText());
    //console.log(await products.nth(1).textContent());
/*
    const count=await products.count();

    for(let i=0;i<count;i++)
    {
        //const productName :string=await products.nth(i).innerText();//Extract the plain text, Eliminates Whitespace and line breakes
        //console.log(productName);

        //const productName : null |string =await products.nth(i).textContent();// Extracts text including hidden elements. Includes Extra whitespaces,line breaks,etc.
       // console.log(productName);

       const productName : null |string =await products.nth(i).textContent();// Extracts text including hidden elements. Includes Extra whitespaces,line breaks,etc.
       console.log(productName?.trim());

    }
*/
//2 AllInnerText() vs allTextContent()
/*
console.log("***** Comparing allInnerText() vs allTextContent() ****")

//const productNames: string[]=await products.allInnerTexts()
//console.log("Product Names captured by allInnerText(): ", productNames)

const productNames: string[]=await products.allInnerTexts()
console.log("Product Names captured by allInnerText(): ", productNames)
 
 
 const productNamesTrimmed:string[]=productNames.map(text=>text.trim());
 console.log("Product Names after trimmed: ", productNamesTrimmed)
*/

  // all()-converts locator-->Locator[]
  const productsLocators:Locators[]=await products.all();
  console.log(productsLocators);

  for(let productloc of productsLocators)
  {
    console.log(await productloc.innerText());
  }



 })