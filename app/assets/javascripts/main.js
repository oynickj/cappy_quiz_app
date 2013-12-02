console.log("hi");

$(document).ready(function(){

  $('#button1').click(function(){
    $('h1').text("Jabba Jive");
    $('body').attr("class", "pink");
    $(this).prop("disabled", true);
  });

  $('#calc-button').on("click", checkIncreasing);
  // {
  //   // $('body').attr("class", "green");
  // })


  function checkIncreasing(e) {

    var array = [];
    $('#calc_input').each(function(){
      array.push( $(this).val() );
    });
    var newArray = array[0].split(",");
    var intArray = newArray.map(function(x) {
      return parseInt(x, 10);
    });
    console.log(intArray.join());
    var sorted = true;
    for(var i = 1; i < intArray.length; i++) {
      if(intArray[i-1] > intArray[i]){
        sorted = false;
        break;
      }
    }
    if (sorted === true) {
      console.log("array is sorted and ascending");
      $('body').attr("class", "green");
    } else {
      console.log("array is not sorted");
      $('body').attr("class", "red");
    }
    // debugger;
  }

});
