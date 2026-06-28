import { chromium } from "playwright";

async function capture(url, filename) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: filename, fullPage: true });
  await browser.close();
  console.log("Saved", filename);
}

await capture("http://localhost:3000/offers", "/opt/cursor/artifacts/screenshots/offers-page.png");
await capture("http://localhost:3000/products", "/opt/cursor/artifacts/screenshots/products-page.png");
