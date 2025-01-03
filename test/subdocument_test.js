const assert = require('assert');
const Student = require('../src/student');

describe('Subdocument sans callback', () => {
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

describe('Subdocument avec callback', () => {
  it('Creates a subdocument', (done) => {
    const student = new Student({
      name: 'Pierre',
      articles : [{title: 'JavaScript'}]
    });

    student.save()
      .then(() => {
        Student.findOne({ name: 'Pierre' })
          .then((savedStudent) => {
            assert(savedStudent.name === 'Pierre');
            assert(savedStudent.articles[0].title === 'JavaScript');
            done();
          })
          .catch(done); // Si une erreur se produit lors de la recherche, cela terminera le test avec une erreur
      })
      .catch(done); // Si une erreur se produit lors de l'enregistrement, cela terminera le test avec une erreur
  });
});