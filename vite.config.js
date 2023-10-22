const path = require('path')
const { defineConfig } = require('vite')

const MODULE_NAME = 'jslib'
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: MODULE_NAME,
      fileName: MODULE_NAME,
      formats: ['es', 'cjs', 'umd', 'iife'],
      // fileName: (format) => `${MODULE_NAME}.${format}.js`
    }
  }
})