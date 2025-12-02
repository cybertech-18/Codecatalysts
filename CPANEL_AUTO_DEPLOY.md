# 🚀 Automatic cPanel Deployment Setup

## ✅ What This Does:
Every time you `git push`, your website automatically uploads to cPanel!

## 📋 Setup Instructions:

### Step 1: Get Your cPanel FTP Details

Login to your **cPanel** at codecatalysts.tech and find:

1. **FTP Host**: Usually `ftp.codecatalysts.tech` or `codecatalysts.tech`
2. **FTP Username**: Your cPanel username (check in FTP Accounts)
3. **FTP Password**: Your cPanel password

If you don't have FTP access:
- Go to cPanel → **FTP Accounts**
- Create a new FTP account or use main account
- Note down: Host, Username, Password

### Step 2: Add Secrets to GitHub

1. Go to: **https://github.com/cybertech-18/Codecatalysts**
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these **3 secrets**:

**Secret 1:**
```
Name: FTP_HOST
Value: ftp.codecatalysts.tech
(or whatever your FTP host is)
```

**Secret 2:**
```
Name: FTP_USERNAME
Value: your_cpanel_username
```

**Secret 3:**
```
Name: FTP_PASSWORD
Value: your_cpanel_password
```

### Step 3: Push the Workflow

```bash
cd "/Users/ayush18/codecatalysts site"
git add .
git commit -m "Add automatic cPanel deployment"
git push origin main
```

### Step 4: Watch It Deploy!

1. Go to your repo: **https://github.com/cybertech-18/Codecatalysts**
2. Click **Actions** tab
3. You'll see "Deploy to cPanel" running
4. Wait 1-2 minutes
5. Check your website - it's updated! 🎉

---

## 🎯 New Workflow:

**Before:**
```
Edit code → Git push → 
Login cPanel → Upload files → Wait
⏱️ 5-10 minutes
```

**After:**
```
Edit code → Git push → 
✅ Auto-deploys to cPanel!
⏱️ 1-2 minutes (automatic)
```

---

## 🔒 Security Notes:

- ✅ Secrets are encrypted in GitHub
- ✅ Never visible in code or logs
- ✅ Only GitHub Actions can access them
- ✅ Your cPanel stays secure

---

## 📂 What Gets Uploaded:

The workflow uploads:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ Any images/assets you add

It **excludes** (won't upload):
- ❌ .git folder
- ❌ README files
- ❌ .DS_Store (Mac files)
- ❌ node_modules

---

## 🛠️ Troubleshooting:

**Deployment failed?**

1. **Check FTP credentials:**
   - Verify in cPanel → FTP Accounts
   - Test login with FileZilla or similar

2. **Wrong server path?**
   - Default is `/public_html/`
   - If your files go elsewhere, update `server-dir:` in deploy.yml

3. **Permission denied?**
   - Make sure FTP account has write access
   - Check directory permissions in cPanel

4. **View logs:**
   - Go to GitHub → Actions → Click failed run
   - Check error messages

---

## 🔄 To Update in Future:

```bash
# Make changes
code index.html

# Commit and push
git add .
git commit -m "Updated homepage"
git push

# Sit back and relax! ☕
# GitHub automatically uploads to cPanel
# Check website in 1-2 minutes
```

---

## 💡 Benefits:

✅ **Keep your cPanel** - Everything stays there
✅ **Keep your email** - cPanel email still works
✅ **Keep your databases** - MySQL/PHPMyAdmin untouched
✅ **Keep your files** - Only updates what you push
✅ **No manual uploads** - Automatic deployment
✅ **Version control** - Easy rollback via Git
✅ **Team collaboration** - Others can push too

---

## 🎉 You're Ready!

After adding the 3 secrets to GitHub, just push your code and it auto-deploys!

**Questions?** Check GitHub Actions documentation or let me know!
