# 🤖 JavaScript Web Login Automation

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Puppeteer](https://img.shields.io/badge/Puppeteer-Latest-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

*Automated web login with Puppeteer and Stealth Plugin*

[🚀 Quick Start](#-quick-start) • [⚙️ Configuration](#️-configuration) • [⚠️ Disclaimer](#️-disclaimer)

</div>

---

## ⚠️ Disclaimer

**Important Legal & Ethical Notice**:

This tool is designed for **legitimate automation purposes** only. Users must:
- ✅ Use only with their own accounts
- ✅ Have permission to automate login processes
- ✅ Comply with website Terms of Service
- ✅ Respect rate limits and anti-bot measures
- ❌ **NOT** use for unauthorized access
- ❌ **NOT** violate website policies
- ❌ **NOT** perform malicious activities

**The developer assumes NO responsibility for misuse. Use at your own risk.**

---

## 📖 Overview

JavaScript Web Login Automation is a Puppeteer-based tool that automates browser login processes with stealth mode enabled. It bypasses common bot detection methods using the Puppeteer Stealth Plugin, making automation more reliable and undetectable.

## ✨ Features

- 🎭 **Stealth Mode**: Puppeteer-extra with stealth plugin
- 🔐 **Automated Login**: Automatic credential handling
- 🌐 **Browser Control**: Full Chrome/Chromium automation
- 👁️ **Anti-Detection**: Bypass common bot detection systems
- 📸 **Screenshot Support**: Capture page states
- 🔄 **Session Management**: Cookie and storage handling
- ⚡ **Fast & Reliable**: Optimized for performance

## 🚀 Quick Start

### Prerequisites

- **Node.js 16+** installed
- **npm** package manager
- Basic JavaScript knowledge

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ernakkc/js-web-login-automation.git
   cd js-web-login-automation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure credentials** (edit main.js):
   ```javascript
   const username = 'your_username';
   const password = 'your_password';
   ```

4. **Run the script**:
   ```bash
   node main.js
   ```

## 📖 Usage Example

### Instagram Login

```javascript
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Navigate to Instagram
  await page.goto('https://www.instagram.com/');
  
  // Fill login form
  await page.type('input[name="username"]', 'your_username');
  await page.type('input[name="password"]', 'your_password');
  
  // Click login
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  
  console.log('Login successful!');
})();
```

## 📁 Project Structure

```
js-web-login-automation/
├── main.js              # Main automation script
├── package.json        # Dependencies
├── README.md          # Documentation
└── screenshots/       # Optional screenshots
```

## 🛠️ Dependencies

```json
{
  "dependencies": {
    "puppeteer": "^21.0.0",
    "puppeteer-extra": "^3.3.6",
    "puppeteer-extra-plugin-stealth": "^2.11.2"
  }
}
```

## 🐛 Troubleshooting

### Chromium Not Found
```bash
npm uninstall puppeteer
npm install puppeteer
```

### Login Detection Failed
```javascript
// Add delays
await page.waitForTimeout(2000);
await page.type('input', 'text', { delay: 100 });
```

## 🔒 Security Best Practices

- 🔐 Never commit credentials to Git
- 🗝️ Use environment variables
- 📝 Add `.env` to `.gitignore`
- 🛡️ Use strong passwords

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Eren Akkoç**
- 🌐 GitHub: [@ernakkc](https://github.com/ernakkc)
- 📧 Email: ern.akkc@gmail.com

---

<div align="center">

**🤖 Automate Responsibly! 🔐**

*Always respect website policies and use automation ethically.*

[![GitHub stars](https://img.shields.io/github/stars/ernakkc/js-web-login-automation?style=social)](https://github.com/ernakkc/js-web-login-automation)

**⚠️ For legitimate automation purposes only ⚠️**

</div>
