
// //console.log("Hello from the console");
// //alert("hello from alert")
// //prompt("give your name")
// //var name = prompt("give your name")
// // console.log(name)
// console.error("this is error message")
// console.warn("this is a warning message")

// // declaration of variable and types
// var x = "hjfdkj" //string
// var y = 5555 // number
// var z = ["hello", 555]// array
// var person = {
//    name: "foulen",
//    age: 99,
//    info: function () {
//       return "my name is " + this.name + "and iam " + this.age + " years old."
//    }
// } // object

// z[z.length] = person
// z[z.length] = person

// z.unshift(person)

// // console.log(x.search("h"))
// // console.log(person.info())



// // Loop in javascript
// for (let i = 0; i < 5; i++) {

// }

// var array = [12, 25, 69, 33, 41];

// var sum = 0;

// for (var i = 0; i < array.length; i++) {
//    sum = sum + array[i]
// }

// // for...in return the index of each element in the array
// var sum2 = 0;
// for (var i in array) {
//    sum2 += array[i]
// }
// // console.log(sum2)

// // for...of loop return the values of array
// var sum3 = 0;
// for (const value of array) {
//    sum3 += value
// }
// // console.log(sum3)

// // delete person.info

// person.adresse = { city: "Ghazela", street: 14, ville: "Ariana" }
// person.hobby = ["html", "css", "js"]

// // console.log("I am " + person.name + " and i am from " + person.adresse.city + " and my hobby is " + person.hobby[2])

// // var ha = "hamza"
// // var h1 = ha.split('')
// // h1[0] = h1[0].toLocaleUpperCase()
// // console.log(h1.join(""))
// var number = 5;

// // while (number < 5) {
// //    console.log(number)
// //    number++
// // }

// // do {
// //    console.log(number)
// //    number++
// // } while (number < 5);
// // console.log("the value of number after while loop : " + number)

// // var input = prompt("give me a number to check if it is even or odd")

// // if (input % 2 === 0) {
// //    alert("your number is odd ")
// // } else {
// //    alert("your number is even ")
// // }

// // how to get a local date in javascript

// var date = new Date()
// console.log(date.toLocaleTimeString())

// // console.log(Math.floor(Math.random() * 100))

// var user = {
//    name: "Mariem",
//    age: 99,
//    study: "Gomycode",
// }


// user1.name = "Louay"
// // var b = 15
// // var c = b
// // c = 25
// // console.log("b = " + b)
// // console.log("c = " + c)


// console.log("user 1 ")
// console.log(user1)

// console.log("user  ")
// console.log(user)

var numbers = [1, 2, 3]

var numbers2 = [...numbers]
console.log(numbers)
console.log(numbers2)
numbers2.push(4)
console.log("numbers2 after adding 4")
console.log(numbers2)
console.log("numbers after modifying numbers2")
console.log(numbers)
var person = {
    name: "mariem",
    age: 50,
    info: function () {
        return console.log("my name is " + this.name + " and i'am " + this.age + " years old")
    }
}

person.adresse = {
    city: "Ghazela",
    ville: "Ariana"
}

person.info()

var n = 1
switch (n) {
    case 5:
        console.log("the number is equal to 5")
        break;
    case 2:
        console.log("the number less than 5")
        break;
    default:
        console.log("the number is greater than 5")

}