const { ipcRenderer } = require('electron');

document.getElementById('submit').addEventListener('click', async () => {
    const doctype = document.getElementById('doctype').value;
    const data = document.getElementById('data').value;
    
    try {
        const parsedData = JSON.parse(data);
        const result = await ipcRenderer.invoke('create-record', { doctype, data: parsedData });
        document.getElementById('result').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('result').innerText = 'Invalid JSON format';
    }
});