$(document).ready(function(event) {
  $("#formOne").submit(function(event){
    var answer2 = $("input#question2").val();
    var answer4 = $("input#question4").val();
    var answer5 = $("input#question5").val();
    //var isTriangle = (side1 + side2) > side3 && (side2 + side3) > side1 && (side1 + side3) > side2;

    if (answer2 && answer4 === "yes"){
      $("#python").show();
    }
    //  else if (side1 === side2 || side2 === side3 || side1 === side3){
    //  $("#isosceles").show();
    //}
    //  else if (!isTriangle) {
    //  $("#notAtriangle").show();
    //}
    //  else {
    //  $("#scalene").show();
    //  }



    event.preventDefault();
  });

});
