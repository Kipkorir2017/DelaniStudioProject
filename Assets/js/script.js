// Using Jquery to toggle What we do
$(document).ready(function(){
    $(".one").click(function(){
    $(".description").toggle()
    $("#img1").toggle();
    })
});
$(document).ready(function(){
    $(".two").click(function(){
    $(".description1").toggle()
    $("#img2").toggle();
    })
});
$(document).ready(function(){
    $(".three").click(function(){
    $(".description2").toggle()
    $("#img3").toggle();
    })
});
//  Name and Email Validation
function validateForm(){
    var name = document.getElementById("name").Value;
    var email = document.getElementById("email").value;
    atposition=email.indexOf("@");
    dotposition =email.lastIndexOf(".");
    console.log(name)
    if(atposition < 2 || dotposition <2){
        alert("invalid email");
        return false;
    }
    else if(name.length <=5 || name.length >= 50){
        alert ("Enter a correct Name");
        return false;
    }
    else{
        return true;
    }
}