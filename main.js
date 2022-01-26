const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url")
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.webContents.openDevTools()
  win.loadFile('dist/index.html')
  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, 'dist', 'index.html'),
  //   protocol: 'file',
  //   slashes: false
  // }))

  // win.loadURL(`file://${__dirname}/dist/index.html`);
  win.setMenu(null)
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

