@echo off
echo ========================================
echo GIT SETUP FOR LOCATION ZOOM DEMO
echo ========================================
echo.

echo Step 1: Initializing Git Repository...
git init
echo.

echo Step 2: Adding all files...
git add .
echo.

echo Step 3: Creating initial commit...
git commit -m "Initial commit: Location Zoom Demo with GPS and 9 planets"
echo.

echo ========================================
echo Git repository initialized!
echo ========================================
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Run: git remote add origin YOUR-GITHUB-URL
echo 3. Run: git branch -M main
echo 4. Run: git push -u origin main
echo.
pause
