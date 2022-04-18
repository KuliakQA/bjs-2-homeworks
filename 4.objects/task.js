function Student(name, gender, age) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

//метод setSubject
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

//метод addMark
Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

//метод addMarks
Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

//метод getAverage
Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item;
    }
  })
}

//метод exlude
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(7);
student2.addMarks(5, 4, 5);
console.log(student2.getAverage());
console.log(student2);
