# Contact Form Setup Guide

## 🚀 Quick Setup with Formspree (Recommended - FREE & Easy)

### Step 1: Create Formspree Account
1. Go to **https://formspree.io/**
2. Click "Get Started" and sign up (it's FREE)
3. Use your email: **info@codecatalysts.tech**

### Step 2: Create a New Form
1. After login, click **"+ New Form"**
2. Give it a name like "Codecatalysts Contact Form"
3. Formspree will generate a unique form ID like: `xwpkgvzq`

### Step 3: Update Your Website
1. Open `index.html`
2. Find this line (around line 446):
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree ID:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xwpkgvzq" method="POST">
   ```

### Step 4: Upload & Test
1. Upload the updated files to your cPanel
2. Test the form on your website
3. You'll receive emails at **info@codecatalysts.tech**

### ✅ That's It!
- **Free plan**: 50 submissions per month
- **Email notifications**: Instant
- **Spam protection**: Built-in
- **No coding required**

---

## 📧 Alternative Option: EmailJS (Also Free)

If you prefer EmailJS instead:

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Sign up for free account
3. Connect your Gmail or other email service

### Step 2: Get Your Keys
1. Create an email service
2. Create an email template
3. Copy your:
   - Service ID
   - Template ID
   - Public Key

### Step 3: Add EmailJS Script
Add this before `</body>` in `index.html`:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_PUBLIC_KEY");
   })();
</script>
```

### Step 4: Update script.js
Replace the contact form code with EmailJS integration (see EmailJS documentation).

---

## 💡 Current Setup Status

**Your form is ready to work!** You just need to:
1. Get your Formspree Form ID
2. Replace `YOUR_FORM_ID` in index.html
3. Upload to cPanel

**All emails will go to:** info@codecatalysts.tech

---

## 🔧 Troubleshooting

**Form not working?**
- Check if you replaced `YOUR_FORM_ID` with actual ID
- Make sure you uploaded the updated index.html
- Check browser console for errors (F12)

**Not receiving emails?**
- Check spam folder
- Verify email in Formspree settings
- Make sure form submission was successful (check Formspree dashboard)

**Need help?**
- Formspree docs: https://help.formspree.io/
- EmailJS docs: https://www.emailjs.com/docs/

---

## 📝 Form Features

Your contact form now has:
- ✅ Real email delivery
- ✅ Loading state ("Sending..." button)
- ✅ Success/error messages
- ✅ Form reset after submission
- ✅ Spam protection
- ✅ Mobile responsive
- ✅ Beautiful animations

Enjoy! 🎉
