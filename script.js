var currentDate = moment().format('dddd MMMM Do');
var saveButton = document.querySelector("saveBtn")

document.getElementById("currentDay").innerHTML = currentDate;

var dateEl = document.querySelector("#currentDay");

var buttonEl = document.querySelectorAll("button");
console.log(buttonEl);


for (let i = 0; i < buttonEl.length; i++) {
    console.log(buttonEl[i].previousElementSibling);

    buttonEl[i].addEventListener("click", function(){
        localStorage.setItem("textarea" +i, buttonEl[i].previousElementSibling.value);
    })
    
    buttonEl[i].previousElementSibling.value = localStorage.getItem("textarea" +i);
}


