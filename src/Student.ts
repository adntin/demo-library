import Person from './Person';

class Student extends Person {
  constructor(protected name: string, protected age: number) {
    super(name);
  }
  say() {
    console.log(`I'm a student, I am ${this.name}, ${this.age} years old.`)
  }
}

export default Student;