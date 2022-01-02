//create toggle effect for 'what we do' section
$(document).ready(function(){
  $(".development").click(function(){
    $("#dev-hidden").toggle();
    $("#dev-showing").toggle();
  });
  $(".design").click(function(){
    $("#design-hidden").toggle();
    $("#design-showing").toggle();
  });
  $(".product").click(function(){
    $("#product-hidden").toggle();
    $("#product-showing").toggle();
  });
});

// create hover effect on portfolio
$(document).ready(function(){
  $("#box-one").hover(function(){
    $("#project-one").toggle();
  });
  $("#box-two").hover(function(){
    $("#project-two").toggle();
  });
  $("#box-three").hover(function(){
    $("#project-three").toggle();
  });
  $("#box-four").hover(function(){
    $("#project-four").toggle();
  });
  $("#box-five").hover(function(){
    $("#project-five").toggle();
  });
  $("#box-six").hover(function(){
    $("#project-six").toggle();
  });
  $("#box-seven").hover(function(){
    $("#project-seven").toggle();
  });
  $("#box-eight").hover(function(){
    $("#project-eight").toggle();
  });
});

//business logic
//create feedback on form submission
function submitForm (event){
  event.preventDefault();
  console.log("test");
  document.getElementById("userMessage").hidden = false;
  document.getElementById("userMessage").innerText = "We have received your message. Thank you for contacting us";
}