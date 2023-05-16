// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

window.myAPI = {
    desktop: true,
  }

const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
desktop: true,
})