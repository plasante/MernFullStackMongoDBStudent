const assert = require('assert');
const Student = require('../src/student');
require('./deleteAllStudents')

describe('Read student table', () => {
  let student;
  let student2;

  beforeEach((done) => {
    student = new Student({ name: 'tarzan'});
    student2 = new Student({ name: 'tarzan2' });
    student.save()
    student2.save()
      .then(() => done());
  });

  // it('Find all the students', (done) => {
  //   Student.find({ name: 'tarzan' })
  //     .then((students) => {
  //       if (!students.length) {
  //         return done(new Error('No students found'));
  //       }
  //       assert(String(student._id) === String(students[0]._id));
  //       done();
  //     })
  //     .catch(done); // Note: here, if there is an error, done() should be called with the error
  // });
  it('Find one of the student', (done) => {
    Student.findOne({_id: student2._id})
      .then(student => {
        assert(student.name === 'tarzan2');
        done();
      })
      .catch(done);
  })
});