
// interface ABC{
//   name: string,
//   say(): void,
// }

class Person  {
  constructor(protected name: string){
    // this.name = name;
  }
  say() {
    console.log(`hello, ${this.name}`)
  }
}

export default Person;