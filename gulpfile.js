var gulp=require("gulp");
var imagemin=require("gulp-imagemin");
var svgo=require("gulp-svgo");
var imageminMozjpeg=require("imagemin-mozjpeg");
var imageminGuetzli=require("imagemin-guetzli");

gulp.task("svgo",function()
         {
    return gulp.src("services-image/*.svg").pipe(svgo()).pipe(gulp.dest("compress/services-image/"));
})
gulp.task("jpeg",function()
         {
<<<<<<< HEAD
    return gulp.src("banner/*.jpg").pipe(imagemin(
=======
    return gulp.src("portfolio-images/*.jpeg").pipe(imagemin(
>>>>>>> bbdfdedf219a100defe05e8d280d38544c1cd6e4
    {
        progressive:true
    })).pipe(imagemin([imageminMozjpeg({
        quality:80
    })])).pipe(gulp.dest("compress/services-image/"));
});
gulp.task("shristi",function()
         {
    return gulp.src("portfolio-images/*.png").pipe(imagemin([imageminGuetzli({
        quality:85
    })])).pipe(gulp.dest("compress/portfolio-images/"));
})
