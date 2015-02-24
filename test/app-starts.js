var test = require('tape');
var app = require('../app/app.js');

test('app starts', function (t) {
  t.plan(1);
  t.equal(app(), "hello");
})
