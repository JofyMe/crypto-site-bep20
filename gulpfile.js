var gulp = require("gulp"),
sass = require("gulp-sass")(require("sass")),
autoprefixer = require("gulp-autoprefixer"),
cleanCSS = require("gulp-clean-css"),
rename = require("gulp-rename"),
pug = require("gulp-pug"),
browserSync = require("browser-sync").create();

// reload
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: `docs/`
    },
    notify: "false",
    online: false,
    tunnel: false,
  });
});

gulp.task("sass", function () {
  // task
  return gulp
    .src("app/sass/**/*.scss") // Путь к файлами
    .pipe(sass().on("error", sass.logError)) // Вывод ошибок
    .pipe(rename({ suffix: ".min", prefix: "" })) // rename
    .pipe(cleanCSS()) // clean css
    .pipe(autoprefixer({ browserlist: ["last 10 versions"], cascade: false })) // autoprefixer
    .pipe(gulp.dest("app/css")) // Путь к папке с конечными файлами
    .pipe(browserSync.reload({ stream: true }));
  });

gulp.task("js", function () {
  return gulp.src("app/js/**/*.js")
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('code', function () {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({ stream: true }))
})

// watch
gulp.task("watch", function () {
  // task
  gulp.watch("app/sass/**/*.scss", gulp.parallel("sass"));
  gulp.watch("app/js/**/*.js", gulp.parallel("js"));
  gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task(
  "default",
  gulp.parallel("sass", "js", "code", "browser-sync", "watch")
  );
