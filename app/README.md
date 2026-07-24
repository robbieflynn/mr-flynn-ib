# Mr Flynn IB Website

This is your Next.js website for Mr Flynn IB.

## How to edit your courses

The courses data is stored in `data/courses.json`. To change a course price, name, or description:

1. Open `data/courses.json`
2. Find the course you want to edit
3. Change the fields (name, price, description, teachableUrl)
4. Save the file
5. Commit and push to GitHub (instructions below)
6. Vercel will automatically rebuild your site

## How to deploy changes

Once you've made changes:

```bash
git add .
git commit -m "Updated course prices" 
git push origin main
```

Vercel watches your GitHub repo and will automatically deploy the changes within 30 seconds.

## Commands

- `npm run dev` - Run locally (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server

## Questions?

The main files you need to know:
- `app/page.js` - Homepage
- `data/courses.json` - Course information (EDIT THIS TO CHANGE COURSES)
- `app/globals.css` - Styling
