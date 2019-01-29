"use strict";
// interface boy{
//     name: string;
//     age: number;
// }
exports.__esModule = true;
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
var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.message = "hello";
    }
    ThisProblem.prototype.printFunction = function () {
        var _this = this;
        console.log(this);
        return function () {
            console.log(_this.message);
        };
    };
    return ThisProblem;
}());
exports.ThisProblem = ThisProblem;
var Problem2 = /** @class */ (function () {
    function Problem2() {
        this.show = function () { return console.log("helllllllo"); };
    }
    return Problem2;
}());
exports.Problem2 = Problem2;
var problem1 = new ThisProblem();
var fun = problem1.printFunction();
fun();
var person = {
    name: "adam",
    //stary zapis
    walk: function () {
        console.log(this);
    },
    //nowy zapis od es6
    talk: function () { }
};
problem1.printFunction();
person.walk();
var json = '{ "name": "reksio", "age": "2" }';
var reksio = JSON.parse(json);
console.log(reksio);
exports.pi = 3.14;
