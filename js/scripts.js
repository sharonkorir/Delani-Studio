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
$( portfolio).mouseenter( handlerIn ).mouseleave( handlerOut );

//create feedback on form submission
function submitForm (event){
  event.preventDefault();
  console.log("test");
  document.getElementById("userMessage").hidden = false;
  document.getElementById("userMessage").innerText = "We have received your message. Thank you for contacting us";
}