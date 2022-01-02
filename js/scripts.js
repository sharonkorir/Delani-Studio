//create toggle effect for 'what we do' section
$(document).ready(function(){
  $(".development").click(function(){
    $("#dev-hidden").toggle();
    $("#dev-showing").toggle();
  });
});
$(document).ready(function(){
  $(".design").click(function(){
    $("#design-hidden").toggle();
    $("#design-showing").toggle();
  });
});
$(document).ready(function(){
  $(".product").click(function(){
    $("#product-hidden").toggle();
    $("#product-showing").toggle();
  });
});

//create feedback on form submission
function submitForm (event){
  event.preventDefault();
  console.log("test");
  document.getElementById("userMessage").hidden = false;
  document.getElementById("userMessage").innerText = "We have received your message. Thank you for contacting us";
}