let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log("1. Nam san xuat cua xe la " + car.year);

let person = {
  name: "Huy",
  address: {
    street: "Duong 3 thang 2",
    city: "HCM",
    country: "VN",
  },
};
console.log("2. Ten duong cua nguoi nay la " + person.address.street);

let student = {
  name: "Nguyen Van A",
  grades: {
    math: 9,
    english: 3,
  },
};
console.log("3. Diem toan la " + student.grades["math"]);

let settings = {
  volume: 89,
  brightness: "dontknow",
};
settings.volume = 100;
console.log("4. Volume sau khi thay doi la " + settings.volume);

let bike = {};
bike.color = "Blue";
console.log("5. Bike color " + bike.color);

let employee = {
  name: "Nguyen Van B",
  age: "20",
};
delete employee.age;
console.log("6. Xoa age of employee ", employee);

const school = {
  classA: ["An", "Binh", "Chau"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log("7. school ", school);
