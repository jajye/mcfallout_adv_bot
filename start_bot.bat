@echo off
chcp 65001
:start
node bot.js
timeout /t 60
goto start