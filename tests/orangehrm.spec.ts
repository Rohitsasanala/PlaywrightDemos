import { test, expect, Locator } from "@playwright/test";

test("Verify Playwright Locators - OrangeHRM", async ({ page }) => {

  
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForTimeout(3000);

  
  const logo: Locator = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // 3. getByRole heading - login card title
  // (getByText("Login") alone fails here - it matches BOTH the <h5> heading
  // and the <button>, causing a strict mode violation. getByRole disambiguates.)
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await expect(page.getByText(/Log\s*in/i).first()).toBeVisible(); // regex expression

  // 4. getByPlaceholder - username & password fields
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // 5. getByRole - Login button click
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(3000);

  // 6. getByRole heading - confirms Dashboard page loaded
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  // 7. getByText - Quick Launch panel widget
  await expect(page.getByText("Quick Launch")).toBeVisible();

  // 8. getByRole link - sidebar navigation items
  await expect(page.getByRole("link", { name: "Admin" })).toBeVisible();
  await expect(page.getByRole("link", { name: "PIM" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Leave" })).toBeVisible();

  // 9. click a sidebar link and verify heading changes (toHaveText)
  await page.getByRole("link", { name: "PIM" }).click();
  await expect(page.getByRole("heading", { name: "PIM" })).toHaveText("PIM");

  // 10. getByRole link - go back to Dashboard
  await page.getByRole("link", { name: "Dashboard" }).click();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});