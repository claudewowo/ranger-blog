// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
    plugins: [
        require('postcss-import')({
            path: ['src/']
        }),
        require('postcss-assets')({
            loadPaths: ['src/css/']
        }),
        require('postcss-mixins'),
        require('postcss-extend'),
        require('postcss-units')({
            size: 75,
            fallback: false,
            precision: 4
        }),
        require('postcss-preset-env')({
            stage: 2,
            browsers: ['> 1%', 'ie > 8', 'android 4', 'iOS 6'],
        }),
        require('cssnano')({
            sourcemap: true,
            autoprefixer: false,
            safe: true,
            discardComments: {
                removeAll: true,
            },
            discardUnused: false,
            zindex: false
        })
    ]
};
