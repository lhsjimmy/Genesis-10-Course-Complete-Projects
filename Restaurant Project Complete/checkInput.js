function checkInput(form){
var box=document.getElementById("name")
var box2=document.getElementById("email")
var box3=document.getElementById("phone")

if (box.value==""||box2.value==""||box3.value.length<=9){
  alert("Please complete all required fields.");
  return false;
}
}
