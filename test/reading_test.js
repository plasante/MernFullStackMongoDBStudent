const assert = require('assert');
const Student = require('../src/student');

describe('Read student table', () => {
  let student;

  beforeEach((done) => {
    student = new Student({ name: 'tarzan'});
    student.save()
      .then(() => done());
  });

  it('Find all the students', (done) => {
    Student.find({ name: 'tarzan' })
      .then((students) => {
        if (!students.length) {
          return done(new Error('No students found'));
        }
        assert(String(student._id) === String(students[0]._id));
        done();
      })
      .catch(done); // Note: here, if there is an error, done() should be called with the error
  });
});