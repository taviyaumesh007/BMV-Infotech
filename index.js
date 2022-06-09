
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


// ****************  String search method ****************

// let str1="JavaScript counts positions from zero"
// let result1 = console.log(str1.indexOf("c")+ " :indexOf ");

// let str="JavaScript counts positions from zero";
// let result = console.log(str.lastIndexOf("r",)+ " :lastIndexOf ");

// let str2="JavaScript counts positions from zero";
// let result2 = console.log(str2.search("c",)+ " :search()");

// let str3="JavaScript counts positions from zero";
// let result3 = console.log(str3.includes("c",20)+" :includes()")

// let str4="JavaScript counts positions from zero"
// let result4 = console.log(str4.startsWith("counts","from")+" :stringwith");

/* *************Numbehr method ************** */

/* 1. .toString */

/* let x= 123;
console.log(x.toString());
let y= x;
console.log(typeof y+00023);
 */

/* 2.   .toExponential */

/*
let x = 12.23;
console.log(x.toExponential(2))
console.log(x.toExponential(4))
console.log(x.toExponential(6))
*/

// ********************* Array *****************************

// let array=["laptop","mouse","mobile","desktop"];
// let update=array[2]="keybord";  // update Element of array

// let array=["laptop","mouse","mobile","desktop"];
// let update=array[2]     //  find Element of array

// object
// let obj = {
//   name: "umesh",
//   divice: "laptop"
// };
// let output = obj.divice;    // accecc to object data
// console.log(output);

// let array=["laptop","mobile","mouse","keybord"]
// console.log(array.length)

// let array=["laptop","mobile","mouse","keybord"]
// console.log(array.length -1)

  // ***** for loop with array *****

// const item = ["laptop", "mobile", "mouse", "keyboard"];
// // let list=item.length;
// let text = "<ul>";
// for (let i = 0; i < item.length; i++) {
//   text += "<li>" + item[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML=text;



// const point = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(point);

// const point2=[4,5,6,8,6,2,4,8,6]
// console.log(point2);


// ***************** Array Methods ****************

// const item=["laptop","keyboard","mouse"]
// console.log(item.toString())

// const item=["laptop","keyboard","mouse"]
// console.log(item.join())

// const item=["laptop","keyboard","mouse"]
// console.log(item.pop())   //remove last Element

// const item=["laptop","keyboard","mouse"]
// console.log(item.push("umesh"))   // return new lenght
// console.log(item)                 // add item


// const item=["laptop","keyboard","mouse"]
// console.log(item.shift())   // remove first element 
// console.log(item)           //  new item after remove item

// const item=["laptop","keyboard","mouse"]
// console.log(item.unshift("mobile"))   // allways add first element and show index 
// console.log(item)           //  new item add  


// const item=["laptop","keyboard","mouse"]
// let d=console.log(delete [2])   // allways add first element and show index
// console.log(d)                  // output undifine

// const item=["laptop","keyboard","mouse"]
// console.log(item.splice(2,0,"umesh","mobile"))  
// console.log(item)

// const item=["laptop","keyboard","mouse"]
// console.log(item.slice(1))  //remove first Elements
// console.log(item.slice(1,5))  
// console.log(item)

// const item=["laptop","keyboard","mouse","laptop1","keyboard1","mouse1"]
// console.log(item.toString())    // array to conver to string

// const item=["laptop","dhaval","akash","rahul"]
// console.log(item.sort())
// console.log(item.reverse())

// const item=[45,39,5,89,3,4,89,4,5,9,56,87,2,3,32]
// console.log(item.sort(function(a,b){
//   return a-b
// }))

// const item=[45,39,5,89,3,4,89,4,5,9,56,87,2,3,32]
// console.log(item.sort(function(a,b){
//   return b-a
// }))


// const item2=[45,39,5,89,3,4,89,4,5,9,56,87,2,3,32]
// const item=["umesh","akash","prekash","arpit","dhaval","divyansh","dharm"];

// document.getElementById("demo2").innerHTML = item2;
// document.getElementById("demo").innerHTML = item;

// function myFunction1()
// {
// 	item2.sort(function(a,b){
//     return a-b
//     })
//     document.getElementById("demo2").innerHTML = item2
 
// }
// function myFunction2()
// {
// 	item.sort()
    
//     document.getElementById("demo").innerHTML = item
 
// }


// const number= [1,2,3,4,5,6,7,8,9]
// console.log(number.sort(function randm (a,b){
//   return 0.5 - Math.random()
// }))

