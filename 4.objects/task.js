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
Student.prototype.addMarks = function(...markAll) {
  if (this.marks === undefined) {
    this.marks = markAll;
  } else {
    for (let i = 0; i < markAll.length; i++)
      this.marks.push(markAll[i]);
  }
}

//метод getAverage
Student.prototype.getAverage = function() {
  this.average = this.marks.reduce((acc, item, idx, arr) => {
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
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMarks(2, 3, 4, 4, 3);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}
