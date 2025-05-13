# PowerShell script to deploy Vite app to GitHub Pages
# Usage: Run this script in the project root

# 1. Ensure build output is clean
if (Test-Path -Path "dist") {
    Remove-Item -Recurse -Force "dist"
}

# 2. Build the project
npm run build

# 3. Deploy to gh-pages using gh-pages package
npx gh-pages -d dist
