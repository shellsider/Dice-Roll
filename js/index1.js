// // First Dice
// var n1 = Math.random();
// n1 = (n1*6) + 1;
// n1 = Math.floor(n1);
// console.log(n1);

// if(n1 === 1){
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }
// else if(n1 === 2){
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }
// else if(n1 === 3){
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }
// else if(n1 === 4){
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }
// else if(n1 === 5){
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }


// //  Second Dice
// var n2 = Math.random();
// n2 = (n2*6) + 1;
// n2 = Math.floor(n2);
// console.log(n2);

// if(n2 === 1){
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// }
// else if(n2 === 2){
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// }
// else if(n2 === 3){
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// }
// else if(n2 === 4){
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// }
// else if(n2 === 5){
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
// }

// //Setting Up Test
// if(n1>n2){
//     document.querySelector("h1").textContent = "Player 1 Wins";
// }
// else if(n1<n2){
//     document.querySelector("h1").textContent = "Player 2 Wins";
// }
// else{
//     document.querySelector("h1").textContent = "Its a Draw";
// }




//TUTORIAL SOLUTION

//IMG 1
var num1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + num1 + ".png";
var imgSource = "images/" + randomDiceImage;
document.querySelector(".img1").setAttribute("src", imgSource);

//IMG 2
var num2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + num2 + ".png";
var imgSource2 = "images/" + randomDiceImage2;
document.querySelector(".img2").setAttribute("src", imgSource2);

//Setting Up Test
if(num1>num2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if(num1<num2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
    document.querySelector("h1").textContent = "Its a Draw";
}
































