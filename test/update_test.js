const assert = require('assert');
const Student = require('../src/student');
//require('../test/deleteAllStudents')();

describe('Updating students', function() {
  // let student;
  // let student2;
  //
  // beforeEach((done) => {
  //   student = new Student({name: 'Pierre', studentNumber: 2500, articleCount: 5, grade: 10});
  //   student.save().then(() => done());
  //   console.log('originalStudent', student);
  // });
  //
  // it('Update grades', async () => {
  //   try {
  //     const getStudent = await Student.findOne({name: 'Pierre'});
  //     const savedStudent = await Student.updateOne({_id: getStudent._id}, {$mul: {articleCount: getStudent.grade}});
  //     const updatedStudent = await Student.find({name: 'Pierre'});
  //     console.log('updatedStudent :', updatedStudent);
  //     assert(updatedStudent[0].articleCount === 50);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // });

  // it('should update all the students', (done) => {
  //   Student.updateMany({}, {name: 'Pierrot'})
  //     .then(() => Student.find({name: 'Pierrot'}))
  //     .then((updatedStudents) => {
  //       assert(updatedStudents.every(student => student.name === 'Pierrot'));
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });

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

})