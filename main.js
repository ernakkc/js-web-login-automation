const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Gerçek bir tarayıcı gibi görünmek için User-Agent ekleyelim
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    await page.setViewport({ width: 1280, height: 800 });

    // Siteye git
    await page.goto('https://ais.usvisa-info.com/en-tr/niv/users/sign_in', { waitUntil: 'networkidle2' });

    // Çerez uyarısını kabul et
    try {
        await page.click('button[aria-label="Accept all cookies"]');
    } catch (e) {
        console.log("Çerez uyarısı görünmüyor, geçildi.");
    }

    // Kullanıcı adı ve şifreyi gir
    await page.type('input#user_email', 'kullanici_adin', {delay: Random(50, 100)});
    await page.type('input#user_password', 'şifren', {delay: Random(50, 100)});

    // Sözleşmeyi kabul et
    await page.click('#policy_confirmed', {delay: Random(50, 100)});

    // 'Giriş' butonuna tıkla
    await page.click('input[name="commit"]', {delay: Random(50, 100)});

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
