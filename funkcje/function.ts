// interface boy{
//     name: string;
//     age: number;
// }

// let antek: boy=({name:'antek',age:21})

// console.log(antek.name)

// let js='{"name":"wojtek","age":"21"}'
// let czlowiek:boy=JSON.parse(js);
// console.log('sdfsdf  '+czlowiek.age);

// class Person {
//   imie: string = "sylwsdfia";
//   showMsg(): void {
//     console.log(this.imie);
//   }
//   saySth(speach: string) {
//     console.log(speach);
//   }
//   saySth2(word: string, word2?: string) {
//     console.log(word + " " + word2);
//   }
//   saySth3(word: string, word2: string = "hello") {
//     console.log(word + " " + word2);
//   }

//   saySth4 = (say: string): string => {
//     return "say to me " + say;
//   };
// }
// var osoba = new Person();
// osoba.showMsg();
// osoba.saySth("witam witam");
// osoba.saySth2("witam2");
// osoba.saySth3("witam");
// osoba.saySth3("hej", "haaaj");
// console.log(osoba.saySth4("i love majonez"));

export class ThisProblem {
  message: String = "hello";
  printFunction() {
    console.log(this);
    return () => {
      console.log(this.message);
    };
  }
}
export class Problem2 {
  show = () => console.log("helllllllo");
}
const problem1 = new ThisProblem();
const fun = problem1.printFunction();
fun();

const person = {
  name: "adam",
  //stary zapis
  walk: function() {
    console.log(this);
  },
  //nowy zapis od es6
  talk() {}
};
problem1.printFunction();
person.walk();

interface dog {
  name: string;
  age: number;
}
const json: string = '{ "name": "reksio", "age": "2" }';
const reksio: dog = JSON.parse(json);
console.log(reksio);

export const pi = 3.14;
