var d = sessionStorage.getItem("nameSession");
var e = sessionStorage.getItem("matSession");
console.log(d,e);

  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var questions = [
    ["Who is the president of Nigeria?", "Buhari", "Goodluck", "Obasanjo", "A"],
    ["How many continents are in the world?", "five", "seven", "two", "B"],
    ["What is the name of the tallest mountain on earth?", "Kilimanjaro" ,"Everest", "Himalayas", "B"],
    ["Nigeria is in which continent?", "Africa", "Asia", "Europe", "A"],
    ["Nigeria has how many states?", "30", "50", "36", "C"],
    ["Who is the Queen of England?", "Queen Mary", "Queen Elizabeth", "Queen Diana", "B"],
    ["Who is the president of South Africa?", "Jacob Zuma", "Nelson Mandela", "Asuu Ekoto", "A"],
    ["Who is the father of Computer?", "Charles Cabbage", "Charles Gabbage", "Charles Barbbage", "C"],
    ["Binary is made up of?", "zeros and ones", "twos and threes", "infinity and beyond", "A"],
    ["Who was the EPL top scorer in 2016/2017 season?","Cristiano Ronaldo","Harry kane", "Romelu lukaku", "B"]
  ]
  var pos = 0;
  var choice;
  var choices;
  var correct = 0;
  var a;



function start() {

  if(pos <= questions.length-1){
    p2.innerHTML = "- Question " + (pos+1) + " of " + questions.length + " -";
    p1.innerHTML = "<p>"+questions[pos][0]+"</p>";
    p1.innerHTML += "<input type='radio' name='choices' value='A'>" +questions[pos][1]+ "<br>";
    p1.innerHTML += "<input type='radio' name='choices' value='B'>" +questions[pos][2]+ "<br>";
    p1.innerHTML += "<input type='radio' name='choices' value='C'>" +questions[pos][3]+"<br>";

    /*if(pos > questions.length-1){
      pos = 0;
    }*/
  }else{
    if(correct > 9){
      a = "Excellent!";

    }else if(correct <= 9 && correct > 4){
        a = "Good!";
    }else{
      a = "Poor Score!";
    }
    p1.innerHTML = "<p id='p3'> <br><br>"+ d +" "+ e + " your Quiz Score is " +correct+" out of 10!<br>"+ "<p5 id='p5'>"+a+"</p5>" +"<br>Try Again</p>"
    p2.style.visibility = "hidden";
    if(correct > 9){
      document.getElementById("p5").style.color = "green";

    }else if(correct <= 9 && correct > 4){
      document.getElementById("p5").style.color = "green";
    }else{
      document.getElementById("p5").style.color = "red";
    }

  }

}
function submit() {
  choices = document.getElementsByName("choices");
  for(var i = 0; i < choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
    if(choice == questions[pos][4]){
      correct++;
    }
    pos++;
    start();
    console.log(correct);

}

function restart() {
  location.href='login.html';
//  location.reload();
}
window.addEventListener('load',start, false);
