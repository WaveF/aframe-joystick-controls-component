const path = require('path')
const { defineConfig } = require('vite')

const LIBRARY_NAME = 'YOUR_LIBRARY_NAME';
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: LIBRARY_NAME,
      fileName: (format) => `${LIBRARY_NAME}.${format}.js`
    }
  }
});