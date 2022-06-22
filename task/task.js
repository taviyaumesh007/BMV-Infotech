// *********************  task:1 ***********************

// const ages = [30, 39, 40, 25, 30, 40, "25", "39"]
// let equal = ages.filter((value) => {
//     return value == 39 ;
// })
// console.log(equal);


// *********************  task:2 ***********************

const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
let result = ages.filter((value) => {
    return value == 40;
})
console.log(result);


// *********************  task:3 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// let result = ages.filter((value) => {
//     return value == 25;
// })
// console.log(result);


// *********************  task:4 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// let result = ages.some((value) => {
//     return value == 25;
// })
// console.log(result);

// *********************  task:5 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// let result = ages.sort((a,b) => {
//     return a-b;
// })
// console.log(result);

// *********************  task:6 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// let result = ages.filter((value) => {
//     return typeof value === "string" ;
// })
// console.log(result);


// *********************  task:7 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// console.log(" old data : " + ages)
// let result =ages;
// result.push(15)
// console.log(" new data : " + result)


// *********************  task:8 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// let result = ages.filter((value) => {

//     return value !== 40
// })
// console.log(result)

// *********************  task:9 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]
// let result = ages.filter((value) => {
//     return typeof value !== "string"
// }).reduce((r, s) => {
//     return r + s
// })

// console.log(result)
// let sum = result.reduce((r, s) => {
//     return r + s
// })
// console.log(sum)

// *********************  task:10 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]

// let result = ages.filter((value) => {
//     return value === 25;
// })
// console.log(result)

// *********************  task:11 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]

// let result = ages.some((value) => {
//     return value == 37;
// })
// console.log(result)


// *********************  task:12 ***********************

// const ages = [30, 39, 40, 25, 30, 42, 30, 40, "25", "39"]

// let res = ages.every((value) => {
//     return value < 50;
// })
// console.log(res)

// *********************  task:13 ***********************

// const data = ["Dishant", "arpit", "dhaval", "akash", "prakash", "dharm"]
// data.forEach((value) => {
//     console.log(value)
// })
