const assert = require('assert');
const Student = require('../src/student');

describe('Subdocument', () => {
  it('Creates a subdocument', async () => {
    const student = new Student({
      name: 'Pierre',
      articles : [{title: 'JavaScript'}]
    });

    try {
      await student.save();
      const savedStudent = await Student.findOne({name: 'Pierre'});
      assert(savedStudent.name === 'Pierre');
      assert(savedStudent.articles[0].title === 'JavaScript');
    } catch (error) {
      console.log("Error:", error);
    }
  });
});