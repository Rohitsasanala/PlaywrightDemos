import {test,expect,Locator} from "@playwright/test"

test("Static Web table",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table:Locator =page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    const rows:Locator=page.locator("table[name='BookTable'] tbody tr"); //returns all the rows including header
    //const rows:Locator=table.locator("tr");//can also rewrite code as
    await expect(rows).toHaveCount(7);// approach 1

    const rowCount:number=await rows.count();
    console.log("Number of rows in a table: ", rowCount);
    expect(rowCount).toBe(7); // appraoch 2

    // count number of headers/columns
    const columns: Locator= rows.locator("th");
    await expect(columns).toHaveCount(4); //4 approch 1

    const columnCount:number=await columns.count();
    console.log("number of columns/headers: ",columnCount);
    expect(columnCount).toBe(4); //approch 2

    const secondRowCells:Locator=rows.nth(2).locator('td');

    const secondRowTexts:string[]=await secondRowCells.allInnerTexts();

    console.log("2nd Row data: ",secondRowTexts);

    await expect(secondRowCells).toHaveText(['Learn Java','Mukesh','Java','500']);

    console.log("printing 2nd row data...");
    for(let text of secondRowTexts)
    {
        console.log(text);
    }

    // Read all data from the table (exclusding header)
    console.log("Printing all data from the table excluding header...");

    const allRowData=await rows.all();
    console.log("BookName Author  subject price");

    for(let row of allRowData.slice(1)) //slice(1)--> skip header row
    {
        const cols=await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }
    // Print book names where author is Mukesh
    console.log("Books written by Mukesh...")

    const mukeshBooks:string[]=[];

    for(let row of allRowData.slice(1))
        {
            const cells= await row.locator('td').allInnerTexts();
            const author=cells[1];
            const book=cells[0];

            if(author=='Mukesh')
            {
                console.log(`${author} \t ${book}`)
                mukeshBooks.push(book);
            }

        } //slice(1)--> skip header row

        expect(mukeshBooks).toHaveLength(2);

    // Calculate total price of all books
   let totalPrice:number=0;
    for(let row of allRowData.slice(1))
    {
        const cells= await row.locator('td').allInnerTexts();
        const price=cells[3];
        totalPrice += parseInt(price);
    }
    console.log("Total price of all books: ",totalPrice);
    expect(totalPrice).toBe(7100);
       



})