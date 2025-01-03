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
      name: 'Karo',
      articles : [{title: 'JavaScript'}]
    });

    student.save()
      .then(() => {
        Student.findOne({ name: 'Karo' })
          .then((savedStudent) => {
            assert(savedStudent.name === 'Karo');
            assert(savedStudent.articles[0].title === 'JavaScript');
            done();
          })
          .catch(done); // Si une erreur se produit lors de la recherche, cela terminera le test avec une erreur
      })
      .catch(done); // Si une erreur se produit lors de l'enregistrement, cela terminera le test avec une erreur
  });

  it('Adding a new record', async () => {
    const student = new Student({name: 'Juby', articles: []});
    try{
      await student.save();
      const savedStudent = await Student.findOne({name: 'Juby'});
      savedStudent.articles.push({title: 'MongoDB'});
      await savedStudent.save();
      const updatedStudent = await Student.findOne({name: 'Juby'});
      assert(updatedStudent.name === 'Juby');
      assert(updatedStudent.articles[0].title === 'MongoDB');
    } catch (error) {
      console.log("Error:", error);
    }
  });

  it('Removes an article', async () => {
    const student = new Student({name: 'Juby', articles: []});
    try{
      await student.save();
      const savedStudent = await Student.findOne({name: 'Juby'});
      savedStudent.articles.push({title: 'MongoDB'});
      await savedStudent.save();
      const updatedStudent = await Student.findOne({name: 'Juby'});
      assert(updatedStudent.name === 'Juby');
      assert(updatedStudent.articles[0].title === 'MongoDB');
      updatedStudent.articles.pop();
      await updatedStudent.save();
      const studentWithoutArticle = await Student.findOne({name: 'Juby'});
      assert(studentWithoutArticle.articles.length === 0);
    } catch (error) {
      console.log("Error:", error);
    }
  });
});