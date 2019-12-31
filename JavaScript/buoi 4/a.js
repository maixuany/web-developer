//huong doi tuong
//gom nhom cac thuoc tinh

//buoi 4 oop
//cach 1: khai bao truc tiep
//cach 2: class

// const nguoi ={name:'mai xuan y', tuoi:19,

// sayHello: function(){
//     console.log('Hello')
// }}
// nguoi.sayHello()

// function Person(ten, tuoi){
//     this.name=ten;
//     this.age=tuoi;
//     this.sayHello = function(){
//         console.log(`Xin chao, toi la ${this.name}`)
//         console.log('Xin chao, toi la '+this.name)
//     }
// }

// // console.log(Person)

// const ti = new Person('ti',10)
// console.log(ti.name)
// ti.sayHello()

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
            console.log('Xin Chao, Toi La '+this.name+', '+this.age+' Tuoi');
        }
}

const Teo = new Person('Nguyen Van Teo',20)
console.log(Teo)
Teo.sayHello()