
// document.getElementById('test').innerHTML = 'create';
// document.write(4 + 9);

// **********variable*********
// 1. how to craete variable
// var x;
// let y;

// 2. how wto use variale

// x = 5;
// y = 10;
// let z = x + y;
// console.log(z)

// **************** var ****************
// var x = 5;
// console.log(x) //output 5
// {
//     var x = 18;
//     console.log(x) //output 18
// }
// console.log(x) //output 18
// **************** let ****************
// let x = 5;
// console.log(x)  // output 5
// {
//     let x = 18;
//     console.log(x) //output 18
// }
// console.log(x)  //output 5

// **************** const ****************

// const p = 10.2345;
// // p = 10.2345;
// console.log(p)

// ****** constant Arrays
// const data = ["laptop", "mobile", "tablet"]; // create a contant array
// document.write(data[2]);  // print to array index 2[tablet]
// console.log(data)         // prirnt all object of array
// data.push("mouse");       // add mouse object
// console.log(data)

// ****** constant object

// const data = {
//     name: 'umesh',
//     height: '5.5F'
// };
// // console.log(data)
// // data.name = "divesh"
// console.log(data)
// data.device = "laptop"
// console.log(data);

// **************** Concept Of datatype ****************

// let a = 15 + 5 + 25 + "umesh" + 35 + 006;
// console.log(a)
// console.log(typeof (a))
// let a = null
// a = 5;
// console.log(a)

// ****************** Function ********************

// function abc(p1, p2) {
//     return p1 + p2;
// }
// let x = abc(5, 2);
// console.log(x)
// function abc1() {
//     document.getElementsByClassName('form_data').style.background = 'red';
// }

// function abc() {
//     let carName = "volvo";
//     console.log(carName)       // output volvo
// }
// console.log(carName)         // error : carName is not defined


// const car = {
//     type: "Fait",
//     model: "550",
//     color: "white",
//     carName: function () {                                       // function store as property
//         return this.type + " " + this.color + " " + this.model;
//     }
// };
// let name = car.carName();
// console.log(name)



// **************** Event in javaScript ****************

// 1.onclick()
// 2.onmouseover()
// 3.onmousemove()

// function abc1() {
//     document.getElementById('test').innerHTML = Date()
// }

// **************** String Method javaScript ****************

// ***********  1. ` .length `**********

// let name = "abcdefghijklmnopqrstuvxyz"
// let length = console.log(name.length)

// **********  2. `.slice` ***********
/* 1.`.slice` method is two paramiter (startIndex,endIndex) not count last index*/

// let name = "apple, ball, bat";
// console.log(name)
// let part = console.log(name.slice(5, 9));


// let name = "apple, ball, bat";
// console.log(name)
// let part = console.log(name.slice(-9, -3));

// **********  3. `.substring` ***********

// let name = "apple, ball, bat";
// console.log(name)
// let part = console.log(name.substring(0, 5));

// **********  4. `.substr` ***********

// let name = "apple, ball, bat";
// console.log(name)
// let part = console.log(name.substr(-4));

// **********  5. `.replace` ***********

// let name = "hi all hi hi hi";
// console.log(name);
// let newName = console.log(name.replace("hi", "hello"))
// let newName = console.log(name.replace(/HI/i, "hello"))
// let newName = console.log(name.replace(/hi/g, "hello"))

// ********** 6. `.toUpperCase` ***********

// let text = "hi all";
// let upCase = console.log(text.toLocaleUpperCase());

// ********** 7. `.toLowerCase` ***********

// let lowCase = console.log(text.toLowerCase());

// ********** 8. `.concate` ***********
// let str = "hello"
// let str2 = "all"
// let con = console.log(str.concat(" ", str2))

// ********** 9. `.strim` ***********
        // remove extra space both side
// let str = "                 hello         "
// let str2 = console.log(str.trim());


****************  String search method ****************