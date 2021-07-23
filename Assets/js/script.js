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
    var name = document.getElementsById("name").Value;
    var email = document.getElementById("email").value;
    atposition=email.indexOf("@");
    dotposition =email.lastIndexOf(".");
     if(name=" "){
        alert ("Name must be filled out");
        return false;
    }
    else if(atposition < 2 || dotposition <2){
        alert("invalid email");
        return false;
    }
   
}
// fetching inputs and alerting feedback
$(document).ready(function(){
    $("form").submit(function(){
        var name=$("#name").val();
        var email=$("#email").val();
        alert(name+",  we have received your message.Thank you for reaching out to us.");
        return true;
    })
})

