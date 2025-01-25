'use strict';

// creating objects using constructor function

/*

const Person  = function(firstName,birthyear){
  // Instance properties.
  this.firstName = firstName;
  this.birthyear = birthyear;

  // Never do this.==> creates thoushand of copy performance 
  // this.calAge = function(){
  //   console.log(2037 - this.birthyear);
  // };
};
// Behind the seen (***  new operator ***) 4 steps happend .
// 1 . new {} is created. 
// 2. function is called this =  {}.
// 3. {} object linked to prototype .
// 4. function automatically return {}.

const jonas = new Person('jonas',1991);
console.log(jonas);

const kamlesh = new Person('kamlesh', 1996);
// console.log(kamlesh);

const sanjay = new Person('Sanjay', 1992);
console.log(sanjay,kamlesh);

// instanceof operatior to check instance

console.log(jonas instanceof Person);
 
// not a static method not a prototype not inherited to obj
Person.hey = function(){
  console.log('Hey there 🙋‍♀️');
  console.log(this);
}

Person.hey();
// kamlesh.hey();    not a prototye or static method

//************************************************
//*******************  Prototype  ****************
//************************************************

console.log(Person.prototype);

Person.prototype.calAge = function(){
  console.log(2037-this.birthyear);
};

kamlesh.calAge();
sanjay.calAge();
jonas.calAge();

console.log(kamlesh.__proto__);
console.log(kamlesh.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(kamlesh));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kamlesh ,sanjay);
console.log(kamlesh.species,sanjay.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


//************************************************
//************************************************
// prototype chain 

console.log(kamlesh.__proto__);
//Object.prototype (top of prototype chain)
console.log(kamlesh.__proto__.__proto__); // objectconstructor
console.log(kamlesh.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); //constructor

// prototype properties in array

const arr =[3,6,6,8,5,6,4,2,3,3,9,9,9,8]; //new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
  return [...new Set(this)];
};

console.log(arr.unique());

// selecting dom element  prototype chain at the end object 
const h1 = document.querySelector('h1');
console.dir(x=>x+1);

*/
//**********************************************
//**********************************************
///////////////////////////////////////
// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
//

/*

const Car = function(make,speed){
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
  this.speed +=10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function(){
  this.speed -=5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};


const bmw = new Car("BMW" ,120);
const mercedes = new Car("MERCEDES" ,95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.break();
mercedes.accelerate();


*/

/*

//************************************************
//******************* ES6 Classes ****************
//**********************************************
//**********************************************
// ES6 Classes

// 1. class are NOT hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

// class Expression
// way to write the class as fuction experession

const PersonCl1 = class {};

// 2 way class decleration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  //Methods will be added to .prototype property (will be prototype inheritance)

  calAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // getter
  get age() {
    return 2037 - this.birthYear;
  }
  // Important set the property that alredy exists
  // setter first name to fullname
  // _fullname is for removing conflits for consturctor
  // also getter is used to get the property

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a FullName!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static mehtod
  static hey() {
    console.log(`Hey there 🙋‍♀️`);
    console.log(this);    //this referes to class
  }
}

const Deepak = new PersonCl('Deepak bisht', 1996);
console.log(Deepak);
Deepak.calAge();
console.log(Deepak.__proto__ === PersonCl.prototype);

console.log(Deepak.age);  // getter property

// another setter example
const kamlesh1 = new PersonCl('kamlesh bisht', 1996);
console.log(kamlesh1);

// static method call by class name
PersonCl.hey();

//   class hide the nature of prototype inheritance
//    PersonCl.prototype.greet = function(){
//    console.log(`Hey ${this.fullName}`);
//   }

Deepak.greet();

*/

/*


//**********************************************
//**********************************************
//************************************************
// setters and getters accesser property 
// used for validation and set and the property 
//************************************************

const account ={
  name : 'kamlesh ',
  movements:[200,600,120,300],

 // getter 
  get latest(){
    return this.movements.slice(-1).pop();
  },
 // setter
  set latest(mov){
    this.movements.push(mov);
  }
};


console.log(account.latest);

// set the value of movement becoz it is  property
account.latest =50;
account.latest =60;
 
console.log(account.movements);

//**********************************************
//**********************************************
//*********** OBJECT.CREATE MEHTOD  **************
//************************************************

console.log('**** object. create method ******');

const person2 ={
   isHuman : false,
   humanInto : function(){
     console.log(`my name is  ${this.name} and Am I human ? Answer is => ${this.isHuman}`);
   } 
};

const me = Object.create(person2);
me.isHuman = true;
me.name = 'kamlesh singh bisht';

me.humanInto();

//**********************************************
//**********************************************
//************************************************
//************* OTHER EXAMPLE ********************
//                 OBJECT.CREATE *****************

const personProto = {
  calAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  },

  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const suman = Object.create(personProto);
suman.name = "suman rawat";
suman.birthYear = 1990;
suman.calAge();

//other object create.....

const deepak = Object.create(personProto);
deepak.name = "Deepak rawat";
deepak.birthYear =2000;
deepak.calAge();

// we are setting the properties through init function
const ajay = Object.create(personProto);
ajay.init('Ajay',1999);
ajay.calAge();


*/

/* 
//**********************************************
//**********************************************
///////////////////////////////////////
// Coding Challenge #2

// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  // getter function get speed but convert to mile/hour
  get speedUS() {
    return this.speed / 1.6;
  }

  // setter function that set the speed & conveted to km/hour
  set speedUS(speed) {
    this.speed = speed *1.6;
  }
}
// creating the ford using ES-6 class

const ford = new CarCl('Ford',120);
console.log(ford.speed);
console.log(ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS =50;
console.log(ford);

*/
//**********************************************
//**********************************************
//***************************************************
// Inheritance Between "Classes": Constructor Functions
//***************************************************

/*

const Person = function (fullName, birthYear) {
  this.fullname = fullName;
  this.birthYear = birthYear;
};

Person.prototype.CalAge = function () {
  const currentYear = new Date().getFullYear();
  console.log(`your current age is ${currentYear - this.birthYear}.`);
};

const Student = function (fullName, birthYear, course) {
  // setting this keyword during function call
  Person.call(this, fullName, birthYear);
  this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.fullname} and I study ${this.course} course.`);
};

// object create

const kamlesh = new Student('Kamlesh', 1996, 'JavaScipt');
kamlesh.introduce();
kamlesh.CalAge();

console.log(kamlesh.__proto__);
console.log(kamlesh.__proto__.__proto__);
console.log(kamlesh.__proto__.__proto__.__proto__);
console.log(kamlesh.__proto__.__proto__.__proto__.__proto__);

console.log(kamlesh instanceof Student);
console.log(kamlesh instanceof Person);
console.log(kamlesh instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


*/

//**********************************************
//**********************************************
// POLYMORPHISM

///////////////////////////////////////
// Coding Challenge #3

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23

// POLYMORPHISM

/*

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// POLYMORPHISM

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h,with a charge of ${this.charge}%`
  );
};


// object create

const tesla = new EV('Tesla',120,23);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();

const zippsy= new Car('Zipsy',50);
zippsy.accelerate();
zippsy.accelerate();
zippsy.brake();

*/

//**********************************************
//**********************************************
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

/*

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 🙋‍♀️');
  }
}

// inheritance take place

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super needs to be first! statement
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}  and I study ${this.course}`);
  }
  // polymorphism
  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(
      `I'm ${
        currentYear - this.birthYear
      } year old,but as student I fell more like ${
        currentYear - this.birthYear + 10
      }`
    );
  }

  static hey() {
    console.log('It is child class hey  ');
  }
}

// object creation

const deep = new StudentCl('Deepika rawat', 2000, 'computer science');
deep.introduce();
deep.calcAge();
StudentCl.hey();

const rawat = new PersonCl('rawat rawat', 1998);
rawat.calcAge();
PersonCl.hey();


*/

//**********************************************
//**********************************************
// Inheritance Between "Classes": Object.create

/*


const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// inheritance 
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`my name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'computer science');
jay.introduce();
jay.calAge();


*/

/*

//********************************************
//********************************************
//********************************************
// Another Class Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account,${owner}`);
  }

  // public interface of the object or API
  deposite(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }
 
  approveLone(val){
    return true;
  }

  requestLone(val){
   if(this.approveLone(val)){
    this.deposite(val);
    console.log(`Lone approved !`);
   }
  }
}

const acc1 = new Account('kamlesh', 'IND', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposite(250);
acc1.withdraw(140);
acc1.requestLone(1000);
acc1.approveLone(1000); //not to access becz need data encepulation // internal method data privacy and data 
console.log(acc1);

console.log(acc1.pin);

*/

//******************************************************
//******************************************************
//******************************************************

/*

// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields  #sign use
// 3) Public methods
// 4) Private methods
// STATIC version of these 4 feild & method

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account,${owner}`);
  }

   // devloper to read the movements
  getMovements() {
    return this.#movements;
  }

  // public interface of the object or API
  deposite(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }
  // private method internal method not access to public
  #approveLone(val) {
    //Fake method
    return true;
  }

  requestLone(val) {
    if (this.#approveLone(val)) {
      this.deposite(val);
      console.log(`Lone approved !`);
    }
  }

  // static feild
  static test(){
    console.log(`TEST`);
  }
}

const acc1 = new Account('kamlesh', 'IND', 1111);
acc1.deposite(500);
acc1.withdraw(200);
acc1.deposite(20);
// acc1.movements=[5,10,60,70]; // cant change private move's
// console.log(acc1.#movements); // cant access becoz now private

console.log(acc1);

const acc2 = new Account('Deepak', 'IND', 2222);
acc2.deposite(1000);
acc2.withdraw(800);
acc2.deposite(230);
console.log(acc2);

// acc1.#apporoveLone(5000); // cant acess becoz private feild

// static method belog to class
Account.test();

*/

//******************************************************
//******************************************************
//******************************************************
          //  CHAINING THE METHOD  LIKE FILTER MAP AND REDUCE
          
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields  #sign use
// 3) Public methods
// 4) Private methods
// STATIC version of these 4 feild & method

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account,${owner}`);
  }

   // devloper to read the movements
  getMovements() {
    return this.#movements;
  }

  // public interface of the object or API
  deposite(val) {
    this.#movements.push(val);
    return this;  // this is for chainning pursose obj return
  }

  withdraw(val) {
    this.deposite(-val);
    return this;
  }
  // private method internal method not access to public
  #approveLone(val) {
    //Fake method
    return true;
  }

  requestLone(val) {
    if (this.#approveLone(val)) {
      this.deposite(val);
      console.log(`Lone approved !`);
    }
    return this;
  }

  // static feild
  static test(){
    console.log(`TEST`);
  }
}

const acc1 = new Account('kamlesh', 'IND', 1111);
// acc1.deposite(500);
// acc1.withdraw(200);
// acc1.deposite(20);

acc1.deposite(1500)
.withdraw(200)
.withdraw(100)
.deposite(25000)
// .getMovements()  // not chaing in getMovements()
.withdraw(4000);
console.log(acc1);


const acc2 = new Account('Deepak', 'IND', 2222);
acc2.deposite(5000).withdraw(20).deposite(700).deposite(263).deposite(863).deposite(12000).withdraw(2635).getMovements();


console.log(acc2.getMovements());

// getmovement() function at last in chaining becoz don't have this 


//******************************************************
//******************************************************

// Coding Challenge #4

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%


 class CarCl {
   constructor(make, speed) {
     this.make = make;
     this.speed = speed;
   }

   accelerate() {
     this.speed += 10;
     console.log(`${this.make} is going at ${this.speed} km/h`);
   }

   brake() {
     this.speed -= 5;
     console.log(`${this.make} is going at ${this.speed} km/h`);
     return this;
   }
   
   get speedUS() {
     return this.speed / 1.6;
   }

   set speedUS(speed) {
     this.speed = speed * 1.6;
   }
 }

 // inheritance 
class EvCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  };

  // POLYMORPHISM
  accelerate(){
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h,with a charge of ${this.#charge}%`
    );
    return this;
  };
}


 
// object create


const rivian = new EvCl('Rivian', 120, 23);

// rivian.accelerate();
// rivian.accelerate();
// rivian.accelerate();
// rivian.brake();
// rivian.chargeBattery(90);
// rivian.accelerate();

// chaning
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(90)
  .accelerate();
  console.log(rivian.speedUS);

  rivian.speedUS =50;
  console.log(rivian.speedUS);


