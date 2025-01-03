const assert = require('assert');
const Student = require('../src/student');

describe('VirtualTypes', () => {
  it('article counts', async () => {
    const student = new Student({
      name: 'Pierre',
      articles: [{title: 'First title'}]
    });

    try {
      await student.save();
      const foundStudent = await Student.findOne({ name: 'Pierre' });
      assert(foundStudent.articleCount === 1);
    } catch (error) {
      console.log(error);
    }
  })
})