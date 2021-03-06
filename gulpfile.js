var gulp=require("gulp");
var imagemin=require("gulp-imagemin");
var svgo=require("gulp-svgo");
var imageminMozjpeg=require("imagemin-mozjpeg");
var imageminGuetzli=require("imagemin-guetzli");

gulp.task("jpeg",function()
         {
    return gulp.src("services-image/*.svg").pipe(svgo()).pipe(gulp.dest("compress/services-image/"));
})
gulp.task("jpeg",function()
        {
   return gulp.src("industries/healthacare/*.jpg").pipe(imagemin(
   {
       progressive:true
   })).pipe(imagemin([imageminMozjpeg({
       quality:80
   })])).pipe(gulp.dest("compress/healthcare"));
});
gulp.task("shristi",function()
         {
    return gulp.src("industries/healthcare/*.png").pipe(imagemin([imageminGuetzli({
        quality:85
    })])).pipe(gulp.dest("compress/healthcare"));
})
