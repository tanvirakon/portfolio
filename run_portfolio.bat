@echo off
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo Error: Could not install dependencies. 
    echo Please make sure you have Node.js installed on your computer.
    echo Download it here: https://nodejs.org/
    pause
    exit /b
)

echo.
echo Starting the development server...
echo.
echo Once the server starts, open http://localhost:3000 in your browser.
echo.
call npm run dev
pause
