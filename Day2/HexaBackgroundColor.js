
let btn = document.getElementById("btn");
let text = document.getElementById("colorText");
let body = document.querySelector("body");

let i = 0;
btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
  const colors = ["red", "blue", "green", "yellow", "purple", "white", "black"];

  const colorsHexa = ["#FF0000", "#0000FF", "#008000", "#FFFF00", "#800080", "#FFFFFF", "#000000"];

  console.log(i);
  
  if(i==3||i==5) text.style.color="black";
  else text.style.color="white"
  body.style.background=colors[i++];
  text.innerText="16진수 색 :" + colorsHexa[i];
  
  if(i>=colors.length){i = 0;}
}