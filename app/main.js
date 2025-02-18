const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    mainWindow.loadFile('index.html');
});

ipcMain.handle('create-record', async (event, { doctype, data }) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/resource/' + doctype, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'token api key:secrit key'
            }
        });
        return response.data;
    } catch (error) {
        return { error: error.response ? error.response.data : error.message };
    }
});
