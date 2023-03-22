var min = document.querySelector("#min");
var max = document.querySelector("#max");
var generate = document.querySelector("#generate");
var resDiv = document.querySelector(".resDiv");
var result = document.querySelector("#result");
var legend = document.querySelector("legend");


generate.onclick = function(){
  var minimum = Number(min.value.trim());
  var maximum = Number(max.value.trim());

  if ((minimum == "") || (Number.isInteger(minimum)==false)) {
    min.focus();
  }else if ((maximum == "") || (Number.isInteger(maximum)==false)) {
    max.focus();
  }else {
    var random = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    result.innerText = random;

    result.classList.add("light");
    legend.classList.add("light");
    resDiv.classList.add("lightBorder");
    setTimeout(function(){
      result.classList.remove("light");
      legend.classList.remove("light");
      resDiv.classList.remove("lightBorder");
    },500);
  }
}
