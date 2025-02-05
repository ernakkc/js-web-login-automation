const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Gerçek bir tarayıcı gibi görünmek için User-Agent ekleyelim
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/ 120.0.0.0 Safari/537.36");
    await page.setViewport({ width: 1280, height: 800 });

    // Siteye git
    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });

    // Kullanıcı adı ve şifreyi gir
    await page.type('input[name="username"]', 'kullanıcı adınız', {delay: Random(50, 100)});
    await page.type('input[name="password"]', 'şifreniz', {delay: Random(50, 100)});
    await page.click('button[type="submit"]', {delay: Random(50, 100)});


    // Girişin başarılı olup olmadığını kontrol et
    try {
        await page.waitForNavigation({ timeout: 100000 });
        console.log("Başarıyla giriş yapıldı!");
    } catch (error) {
        console.log("Giriş başarısız, ek güvenlik önlemleri olabilir.");
    }

    await browser.close();
    
})();

function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}