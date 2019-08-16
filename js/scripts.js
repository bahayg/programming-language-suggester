$(document).ready(function(event) {
  $("#formOne").submit(function(event){
    var personInput = $("input#person").val();
    var answer2 = $("input#question2").val();
    var answer4 = $("input#question4").val();

    $(".person").text(personInput);

    if (answer2 === "yes" && answer4 === "yes" ){
      $(".languages").fadeIn("slow").show();
      $("#languages").text("Python");
    }
      else if (answer2 === "yes" && answer4 === "no"){
        $(".languages").fadeIn("slow").show();
        $("#languages").text("Ruby");
      }
      else if (answer2 === "no" && answer4 === "yes"){
        $(".languages").slideDown("slow").show();
        $("#languages").text("Swift");
      }
      else if (answer2 === "no" && answer4 === "no"){
        $(".languages").slideDown("slow").show();
        $("#languages").text("Swift");
      }
      else {
        alert("Please answer all of the questions!")
      }

    event.preventDefault();
  });
});
