const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const sass = require(`gulp-sass`);
const cache = require(`gulp-cache`);
const imageCompressor = require(`gulp-imagemin`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const cssLinter = require(`gulp-stylelint`); 
const jsLinter = require(`gulp-eslint`);
const { watch } = require(`gulp`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const htmlValidator = require(`gulp-html`);

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};

let compileCSS = () => {
    return src(`sass/main.scss`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error, sass.logError`))
        .pipe(dest(`css/`));
};

let compressImages = () => {
    return src([
        `uncompressed-images/**/*.png`,
        `uncompressed-images/**/*.jpg`,
        `uncompressed-images/**/*.svg`,
        `uncompressed-images/**/*.gif`
    ])
        .pipe(cache(
            imageCompressor({
                optimizationLevel: 3, // For PNG files. Accepts 0 – 7; 3 is default.
                progressive: true,    // For JPG files.
                multipass: false,     // For SVG files. Set to true for compression.
                interlaced: false     // For GIF files. Set to true for compression.
            })
        ))
        .pipe(dest(`compressed-images`));
};

let compressJS = () => {
    return src(`uncompressed-scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`compressed-scripts`));
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 0, // A delay is sometimes helpful when reloading at the
        server: {       // end of a series of tasks.
            baseDir: [
                `temp`,
                `html`
            ]
        }
    });

    watch(`html/**/*.html`).on(`change`, reload);
};

let validateHTML = () => {
    return src(`html-files/*.html`)
        .pipe(htmlValidator());
};

exports.compressHTML = compressHTML;
exports.compileCSS = compileCSS;
exports.compressImages = compressImages;
exports.compsJS = compressJS;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.serve = serve;
exports.validateHTML = validateHTML;