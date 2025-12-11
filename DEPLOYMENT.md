# 🚀 Deployment Guide for Web.nox

Your project has been successfully uploaded to: **https://github.com/REHAN2308/web.nox**

## Environment Variables

Your environment variables are stored in `.env.production` file. Here are the values you need to set on your hosting platform:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=webnox88@gmail.com
SMTP_PASS=xwft hbjh nosm ftfc
CONTACT_TO_EMAIL=webnox88@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Deploy to Vercel (Recommended - Free & Easy)

### Step 1: Go to Vercel
Visit: https://vercel.com/new

### Step 2: Import Your Repository
1. Click "Import Git Repository"
2. Select your GitHub repository: `REHAN2308/web.nox`
3. Click "Import"

### Step 3: Configure Environment Variables
In the "Environment Variables" section, add these one by one:

| Key | Value |
|-----|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `webnox88@gmail.com` |
| `SMTP_PASS` | `xwft hbjh nosm ftfc` |
| `CONTACT_TO_EMAIL` | `webnox88@gmail.com` |

### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Your site will be live at `https://web-nox.vercel.app` (or similar)

### Step 5: Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Deploy to Netlify

### Step 1: Go to Netlify
Visit: https://app.netlify.com/start

### Step 2: Import from GitHub
1. Click "New site from Git"
2. Choose GitHub
3. Select `REHAN2308/web.nox`

### Step 3: Build Settings
- Build command: `npm run build`
- Publish directory: `.next`

### Step 4: Add Environment Variables
Go to Site Settings → Environment Variables and add:
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `587`
- `SMTP_USER` = `webnox88@gmail.com`
- `SMTP_PASS` = `xwft hbjh nosm ftfc`
- `CONTACT_TO_EMAIL` = `webnox88@gmail.com`

### Step 5: Deploy
Click "Deploy site" and wait for completion.

---

## Alternative: Manual Environment Setup

If you need to manually set environment variables on any hosting platform:

1. Copy the values from `.env.production` file
2. Go to your hosting platform's environment variables section
3. Add each variable with its corresponding value
4. Redeploy your application

---

## Important Notes

⚠️ **Security**: Never commit `.env.local` or `.env.production` files to Git. They're already in `.gitignore`.

✅ **Gmail App Password**: Your Gmail app password (`xwft hbjh nosm ftfc`) is already configured and ready to use.

✅ **Contact Form**: Will work automatically once environment variables are set on your hosting platform.

---

## Quick Commands

### Update GitHub Repository
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Deploy Again (Vercel)
Just push to GitHub - automatic deployment is enabled!

---

## Support

If you need help with deployment:
1. Check hosting platform documentation
2. Verify all environment variables are set correctly
3. Check build logs for any errors

Your site is production-ready! 🎉
