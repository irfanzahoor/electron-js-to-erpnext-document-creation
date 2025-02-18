// README.md
# ERPNext Electron App

This is a simple Electron.js application to create records in ERPNext Doctypes via API.

## Features
- Select any Doctype
- Input data in JSON format
- Send data to ERPNext API
- Display API response

## Installation
1. Clone the repository:
   ```sh
   git clone git@github.com:irfanzahoor/electron-js-to-erpnext-document-creation.git
   cd erpnext-electron-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration
Update `main.js` with your ERPNext API details:
```js
const response = await axios.post('http://your-erpnext-url/api/resource/' + doctype, data, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token your-api-key:your-api-secret'
    }
});
```

## Usage
Run the app:
```sh
npm start
```

## License
MIT