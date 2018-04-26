require(['./foundation'], function (foundation) {
  foundation.hello('amd');

  const student = new foundation.Student('amd', 3);
  student.say();
});