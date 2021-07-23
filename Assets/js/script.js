// javascript validating form
function validateForm(){
    var name= document.getElementById("name1").value;
    var email= document.getElementById("email1").value;
    atposition=email.indexOf("@");
    dotposition =email.lastIndexOf(".");
     if(name ===""){
        alert("Name must be filled out");
        return false;
    }
     else if(atposition< 2 || dotposition - atposition<2){
        alert("invalid email");
        return false;
    }
    
    else{
        alert(name+",Your Message has been recieved.Thank you for reaching out to us.")
    }
}

// Using Jquery to toggle
$(document).ready(function(){
    $(".one").click(function(){
    $(".description").slideToggle()
    $("#img1").slideToggle();
    })
});
$(document).ready(function(){
    $(".two").click(function(){
    $(".description1").slideToggle()
    $("#img2").slideToggle();
    })
});
$(document).ready(function(){
    $(".three").click(function(){
    $(".description2").slideToggle()
    $("#img3").slideToggle();
    })
});


