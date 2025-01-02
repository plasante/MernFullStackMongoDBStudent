const Student = require('../src/student');

module.exports = () => {
  afterEach((done) => {
    Student.deleteMany({})
      .then(() => {
        console.log('All student records deleted');
        done();
      })
      .catch((err) => {
        console.log('Error deleting student records:', err);
        done(err);
      });
  });
}