let mix = require('laravel-mix')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({version: 3})
    .css('resources/css/field.css', 'css')
    .nova('pavloniym/nova-matrix-input-field')
    .webpackConfig({externals: {vue: 'Vue', 'laravel-nova': 'LaravelNova'}})
