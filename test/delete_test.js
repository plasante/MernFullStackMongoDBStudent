const assert = require('assert');
const Student = require('../src/student');
require('./deleteAllStudents')

describe('Delete a student record', (done) => {
  let student;

  beforeEach((done) => {
    student = new Student({name: 'jj'});
    student.save().then(() => done());
  });

  it('should delete a student record by id', (done) => {
    Student.findByIdAndDelete(student._id)
      .then(() => Student.findOne({_id: student._id}))
      .then((student) => {
        assert(!student);
        done();
      })
      .catch(done);
  });

  it('should delete a student record by name', (done) => {
    Student.findOneAndDelete({name: 'jj'})
      .then(() => Student.findOne({_id: student._id}))
      .then((student) => {
        assert(!student);
        done();
      })
      .catch(done);
  });

  it('delete tarzan', (done) => {
    Student.deleteOne()
      .then(() => Student.findOne({name: 'tarzan'}))
      .then((student) => {
        assert(!student);
        done();
      })
      .catch(done);
  })
})