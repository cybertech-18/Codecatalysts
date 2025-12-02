# Codecatalysts

A modern, responsive website for Codecatalysts - Web Development & Digital Solutions.

## 🌐 Live Site
http://codecatalysts.tech/

## 📁 Project Structure
```
codecatalysts site/
├── index.html          # Main homepage
├── styles.css          # Stylesheet with responsive design
├── script.js           # Interactive JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Features
- Modern, responsive design
- Smooth scrolling navigation
- Interactive service cards
- Portfolio showcase
- Contact form
- Mobile-friendly menu
- Scroll animations
- SEO optimized

## 📤 How to Deploy to cPanel

### Method 1: File Manager (Recommended for Beginners)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel login page
   - Enter your username and password

2. **Access File Manager**
   - Find and click on "File Manager" in cPanel
   - Navigate to `public_html` directory (this is your website root)

3. **Upload Files**
   - Click "Upload" button at the top
   - Select all files: `index.html`, `styles.css`, `script.js`
   - Wait for upload to complete
   - Refresh the File Manager to see your files

4. **Set Permissions**
   - Select all uploaded files
   - Click "Permissions" 
   - Set to 644 (recommended for security)
   - Click "Change Permissions"

5. **Test Your Site**
   - Open http://codecatalysts.tech/ in your browser
   - Your site should now be live!

### Method 2: FTP (For Advanced Users)

1. **Get FTP Credentials from cPanel**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP host, username, and password

2. **Connect via FTP Client**
   - Download FileZilla or any FTP client
   - Connect using your credentials
   - Navigate to `public_html` directory

3. **Upload Files**
   - Drag and drop all files from your local folder
   - Ensure `index.html`, `styles.css`, and `script.js` are in `public_html`

### Method 3: Git Deployment (Advanced)

1. **Setup SSH Access in cPanel**
   - Enable SSH in your hosting control panel
   - Generate SSH keys if needed

2. **Clone Repository on Server**
   ```bash
   cd public_html
   git clone https://github.com/cybertech-18/Codecatalysts.git .
   ```

3. **Update Site**
   ```bash
   cd public_html
   git pull origin main
   ```

## 🔧 Customization

### Update Contact Information
Edit `index.html` and find the contact section:
- Email: Line ~235
- Phone: Line ~242
- Location: Line ~249

### Change Colors
Edit `styles.css` and modify the CSS variables (lines 10-20):
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

### Update Content
- Hero section: Lines 44-53 in `index.html`
- Services: Lines 109-158 in `index.html`
- Portfolio: Lines 169-193 in `index.html`

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support
For issues or questions, contact: info@codecatalysts.tech

## 📝 License
© 2025 Codecatalysts. All rights reserved.

---

**Important Notes:**
- Always backup your files before making changes
- Test changes locally before uploading to production
- Keep your cPanel password secure
- Regularly update your website content
