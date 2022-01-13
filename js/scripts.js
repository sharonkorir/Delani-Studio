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
  $("#proj-one").hover(function(){
    $("#project-one").toggle();
  });
  $("#proj-two").hover(function(){
    $("#project-two").toggle();
  });
  $("#proj-three").hover(function(){
    $("#project-three").toggle();
  });
  $("#proj-four").hover(function(){
    $("#project-four").toggle();
  });
  $("#proj-five").hover(function(){
    $("#project-five").toggle();
  });
  $("#proj-six").hover(function(){
    $("#project-six").toggle();
  });
  $("#proj-seven").hover(function(){
    $("#project-seven").toggle();
  });
  $("#proj-eight").hover(function(){
    $("#project-eight").toggle();
  });
});

//business logic
//create feedback on form submission
function submitForm (event){
  event.preventDefault();
  console.log("test");
  var userName = document.getElementById("name").value;
  console.log(userName);
  document.getElementById("userMessage").hidden = false;
  document.getElementById("userMessage").innerText = "We have received your message " + userName + " Thank you for contacting us";
}