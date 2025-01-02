const assert = require('assert');
const Student = require('../src/student');
require('../test/deleteAllStudents')();

describe('Updating students', (done) => {
  let student;
  let student2;

  beforeEach((done) => {
    student = new Student({name: 'Pierre', studentNumber: 2500});
    student2 = new Student({name: 'Karo', studentNumber: 3500});
    student2.save();
    student.save().then(() => done());
    console.log(student);
    console.log(student2);
  });

  // it('should save a student', (done) => {
  //   console.log("Saving student");
  //   student.set('name', 'Pierrot');
  //   student.save()
  //     .then(() => Student.find({}))
  //     .then((students) => {
  //       const student = students[0];
  //       assert(student['name'] === 'Pierrot');
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // })

  // it('should update a student', (done) => {
  //   Student.findOneAndUpdate({name: 'Pierre'}, {name: 'Pierrot'})
  //     .then(() => Student.findOne({name: 'Pierrot'}))
  //     .then((updatedStudent) => {
  //       assert(updatedStudent.name === 'Pierrot');
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // })

  it('should update all the students', (done) => {
    Student.updateMany({}, {name: 'Pierrot'})
      .then(() => Student.find({name: 'Pierrot'}))
      .then((updatedStudents) => {
        assert(updatedStudents.every(student => student.name === 'Pierrot'));
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})