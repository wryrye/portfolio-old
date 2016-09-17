



$(document).ready(function(){

  console.log("hello!")
  $("#knight")
    .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function(e){
        console.log("ahhhh")

        $(this).off(e);
      });

});

