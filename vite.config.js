const path = require('path')
const { defineConfig } = require('vite')

const MODULE_NAME = 'aframe-joystick-controls-component'
module.exports = defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      formats: [
        // 'es',
        // 'cjs',
        'umd',
        // 'iife'
      ],
      name: MODULE_NAME,
      // fileName: MODULE_NAME,
      fileName: (format) => `aframe-joystick-controls-component.js`,
      // fileName: (format) => `${MODULE_NAME}.${format}.js`
    }
  }
})