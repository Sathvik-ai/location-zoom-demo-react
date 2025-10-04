@echo off
echo ========================================
echo PUSH TO GITHUB
echo ========================================
echo.

echo Checking git status...
git status
echo.

echo Adding all changes...
git add .
echo.

set /p commit_message="Enter commit message: "
echo.

echo Creating commit...
git commit -m "%commit_message%"
echo.

echo Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo Push complete!
echo ========================================
pause
