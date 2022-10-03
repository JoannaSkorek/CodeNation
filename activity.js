
// Activity 1 



// let music = "classic"

// if (music == "classic"){
//     console.log ("I'm relaxing.")
// }
// else if (music == "rap"){
//     console.log ("Where are my dancing shoes!.")
// }

// else {
//     console.log ("Where's the party?")
// }

// Activity 2 / Age

// let age = 25

// if (age >= 17) {
//     console.log ("Yes, I can serve you")
// }
// else if (age <16 ) {
//     console.log ("I can't serve you, sorry.")
// }
// else {
//     console.log ("Bye")
// }


// // Activity 3 / Country 

// let age = 18
// let country = "UK"

// if ( age >= 17 && country == "UK"){
//     console.log ('Is ok.')
// }
// else if ( age >= 10 && country == "PL"){
//     console.log ('Wrong country.')
// }
// else {
//     console.log ('Bye')
// }






// Activity 4 Pizza

// let pizza = "ham"
// switch (pizza) {
//     case "garlic":
//     case "peperoni":
//         console.log ("These are important ingredients for my pizza")
//        break
//     case "tomato" :
//     case"ham":
//     console.log (" I din't mind having ham on my pizza")
//     break
//     default:
//         console.log ("Any topping should not be on a pizza.")
// }
 
// // Activity 4a / weekend alarm 

// let weekendAlarm = "Saturday"

// if (weekendAlarm == "Saturday" || weekendAlarm == "Sunday"){
//     console.log("Yay, it's the weekend")
// }
// else {
//     console.log("Oh no, work again")
// }









// Activity 5 / Password

// let password = "laptop"

// if (password.length <8){
// console.log ('Password is too short')
// }
// else {
//      console.log ('Password.')
// }





// Activity 6 / num 

// let num = "1001"
// let reverseNum = num.split("").reverse().join("")
// if (reverseNum == num){
//     console.log(true)
// }
// else {
//     console.log(false)
// }


// Activity 7  fizz/ buzz

// let num = 4

// if ((num) % 3 == 0) {
//    console.log ('fizz')
// }
// else if ((num) % 5 == 0) {
//     console.log ('buzz')
// }
// else if ((num) % 3 == 0 && (num) % 5 == 0) {
//     console.log ('fizz buzz')
// }
// else {
//     console.log ('pick again')
// }

// Activity 8  / Time


// Activity 9  / index

// let letters= "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let vowels = ["a","e","i","o","u"]
// let array = letters.split ("");
// let count = 0;
    
// for (let i = 0; i < array.length; i++){
//     for (let x = 0; x < vowels.length; x++){
//         if (array[i] == vowels[x]){
//             count = i;
//         }
//     }
// }


// console.log(count)

    








// let myString = "jrfndklhgfndjkjlkgprefijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let vowels = ["a", "e", "i", "o", "u"]
// let array = myString.split(""); // split string into array
// let vowelIndex = []
// for (const letter of vowels) {
//     vowelIndex.push(array.lastIndexOf(letter))
// }
// console.log(Math.max(...vowelIndex))
// // Activity 10  / word


// Activity 11  /  num1/num2

// let num1 = 5
// let num2 = 9

// if ((num1 + num2)% 2 == 0 ) {
//     console.log(num1 + num2)
// }
// else { 
//     console.log (num1 * num2)
// }
