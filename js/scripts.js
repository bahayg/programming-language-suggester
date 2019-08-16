$(document).ready(function(event) {
  $("#formOne").submit(function(event){
    var answer2 = $("input#question2").val();
    var answer4 = $("input#question4").val();

    if (answer2 === "yes" && answer4 === "yes" ){
      $("#python").show();
    //  $(this).remove();
      $(".languages").text();
    }
      else if (answer2 === "yes" && answer4 === "no"){
        $("#ruby").show();
      }
      else {
        $("#swift").show ();
      }


    event.preventDefault();
  });

});
