var gulp = require('gulp');
var mocha = require('gulp-mocha');
var selenium = require('selenium-standalone');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// Start selenium server on port 4444
gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('integration-test', ['selenium'], function () {
  return gulp.src('test/**/*.js', {read: false})
    .pipe(mocha()).on("error", handleError);
});

gulp.task('test', ['integration-test'], function () {
  selenium.child.kill();
});