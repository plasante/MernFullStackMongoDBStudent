const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/students_test');

mongoose.connection
  .once('open', () => console.log('Connected successfully'))
  .on('error', (err) => console.log(err));

beforeEach((done) => {
  mongoose.connection.collections.students.drop(() => {
    done();
  });
});