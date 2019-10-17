const path = require('path')

module.exports = {
     entry: './src/main.js',
     output: {
         path: path.join(__dirname, 'dist'),
         filename: 'webcom-app.bundle.js'
     },
     mode: 'development'
}