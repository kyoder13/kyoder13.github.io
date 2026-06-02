# Next Steps to Go Live

## 1. Add your PDFs
Copy these files into the `docs/` folder:
- `doe-guidebook.pdf`
- `youth-brief-1.pdf`
- `youth-brief-2.pdf`

## 2. Set up the contact form (5 minutes)
1. Go to https://formspree.io and create a free account
2. Click "New Form", give it a name
3. Copy your form ID (the part after `/f/` in the endpoint URL)
4. Open `index.html`, find `YOUR_FORMSPREE_ID`, and replace it with your ID

## 3. Push to GitHub Pages
Run these commands in your terminal from inside the `kyoder13.github.io` folder:

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/kyoder13/kyoder13.github.io.git
git push -u origin main
```

Then on GitHub:
- Go to your repo → Settings → Pages
- Source: Deploy from branch → main → / (root)
- Your site will be live at https://kyoder13.github.io within a few minutes

## 4. Add your LinkedIn URL (already done)
Already set to https://www.linkedin.com/in/karla-yoder/

## Optional: Custom domain
If you want a custom domain (e.g., karlayoder.com), buy it from any registrar,
then set it in GitHub Pages Settings → Custom domain.
