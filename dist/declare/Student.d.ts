import Person from './Person';
declare class Student extends Person {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number);
    say(): void;
}
export default Student;
