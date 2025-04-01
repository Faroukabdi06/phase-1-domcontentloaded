// Your code goes here
document.addEventListener('DOMContentLoaded', function(){
    console.log("The DOM has loaded")
   changeP();
})

console.log(  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered")


function changeP(){
    let p = document.querySelector('#text');
    p.textContent= "This is really cool!"
}