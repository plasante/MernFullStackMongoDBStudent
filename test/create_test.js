const assert = require('assert');
const Student = require('../src/student');

describe('Create the first data', () => {
  it('Save the student', (done) => {
    const json = new Student({
      name: 'Pierre'
    })
    json.save()
      .then(() => {
        assert(!json.isNew);
        done();
      })
  })
})