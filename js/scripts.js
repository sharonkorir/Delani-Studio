//create toggle effect for 'what we do' section
$(document).ready(function(){
  $("#.clickable").click(function(){
    $("hidden").toggle();
    $("showing").toggle();
  });
});

//create feedback on form submission
function submitForm (event){
  event.preventDefault();
  console.log("test");
  document.getElementById("userMessage").hidden = false;
  document.getElementById("userMessage").innerText = "We have received your message. Thank you for contacting us";
}