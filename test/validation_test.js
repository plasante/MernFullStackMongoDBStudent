const assert = require('assert');
const Student = require('../src/student');
//require('../test/deleteAllStudents')();

describe('Student validation test', (done) => {
  // it('name is required', (done) => {
  //   const student = new Student({name: undefined});
  //   const result = student.validateSync();
  //   console.log('validation result: ', result);
  //   const {message} = result.errors.name;
  //   assert(message === 'Name is required');
  //   done();
  // })

  // it('name must be longer than 2 characters long', (done) => {
  //   const newStudent = new Student({name: 'Jo'});
  //   const newResult = newStudent.validateSync();
  //   const {message} = newResult.errors.name;
  //   assert(message === 'Name must be longer than 2 characters');
  //   done();
  // })

  // it('prevent invalid input', (done) => {
  //   const student = new Student({name: 'John Doe', age: 25, grade: 'A'});
  //   student.save()
  //     .then(() => done())
  //     .catch(validationResult => {
  //       const {message} = validationResult.errors.name
  //       assert(message === 'Name is too short')
  //     })
  //   done();
  // })
})