var o1 = 0;
var o2 = 0;
var o3 = 0;
var order1 = document.querySelector(".button1");
order1.addEventListener(
    "click", function(){
        o1 = parseInt(document.querySelector(".input1").value = 10);
    }
)

var order2 = document.querySelector(".button2");
order2.addEventListener(
    "click", function(){
        o2 = parseInt(document.querySelector(".input2").value = 15);
    }
)

var order3 = document.querySelector(".button3");
order3.addEventListener(
    "click", function(){
        o3 = parseInt(document.querySelector(".input3").value = 5);
    }
)

document.querySelector(".submit").addEventListener(
    "click", function(){
        let result = document.querySelector(".input4").value = o1 + o2 + o3;
    }
)

var buttonpop = document.querySelector(".ordernow");

buttonpop.addEventListener(
    "click", function(){
        let popUp = document.querySelector(".pop");
        popUp.classList.add("pop-up");
    }
)

let back = document.querySelector(".back");

back.addEventListener(
    "click", function(){
        alert("YOUR ORDER IS SUBMITTED, THANKS FOR BUYING!");
        location.reload();
    }
)