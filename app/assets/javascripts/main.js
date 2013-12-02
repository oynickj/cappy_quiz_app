console.log("hi");

$(document).ready(function(){

  $('button').click(function(){
    $('h1').text("Jabba Jive");
    $('body').attr("class", "pink");
    $(this).prop("disabled", true);
  });

});
