// //1 task
function parseCount(value) {
  const pars = Number.parseInt(value);
  if (isNaN(pars)) {
    throw new Error("Невалидное значение");
  }
  return pars;
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch (error) {
    return error;
  }
}

validateCount("Monster78");
validateCount(888);

//2 task
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return (this.a + this.b + this.c);
  }

  getArea() {
    const per = this.getPerimeter() / 2;
    return Number(Math.sqrt(per * (per - this.a) * (per - this.b) * (per - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует"
    }
  }
}

const tri = new Triangle(2, 5, 5);
tri.getPerimeter();
tri.getArea();
getTriangle(8, 7, 7);
