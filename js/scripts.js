$(document).ready(function(event) {
  $("#formOne").submit(function(event){
    var answer2 = $("input#question2").val();
    var answer4 = $("input#question4").val();

    if (answer2 === "yes" && answer4 === "yes" ){
      $(".languages").show();
      $("#languages").text("Python");
    }
      else if (answer2 === "yes" && answer4 === "no"){
        $(".languages").show();
        $("#languages").text("Ruby");
      }
      else {
        $(".languages").show ();
        $("#languages").text("Swift");
      }

    event.preventDefault();
  });

});
