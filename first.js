const PI = 3.14159;
let radius;
let circumference;

document.getElementById("btn").onclick = function(){
    radius = document.getElementById("userText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = `the circumference of circus: ${circumference} cm`;
}