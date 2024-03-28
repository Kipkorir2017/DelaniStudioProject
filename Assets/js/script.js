// javascript validating form
function validateForm() {
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    var textArea = document.getElementById("message").value;    
    atPosition = email.indexOf("@");
    dotPosition = email.lastIndexOf(".");
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    else if (atPosition < 2 || dotPosition - atPosition < 2) {
        alert("invalid email");
        return false;
    }
    else if (textArea === "") {
        alert("Kindly write a message!!");
        return false;
    }

    else {
        alert("Thank you " + name + "for reaching out to us," +" "+ "Your Message has been recieved.")
    }
}

// Using Jquery to toggle
$(function () {
    $(".one").click(function () {
        $(".description").slideToggle()
        $("#img1").slideToggle();
        $(".descr1" + i).css("font-weight", "900")
    })
});
$(function () {
    $(".two").click(function () {
        $(".description1").slideToggle()
        $("#img2").slideToggle();
    })
});
$(function () {
    $(".three").click(function () {
        $(".description2").slideToggle()
        $("#img3").slideToggle();
    })
});

// jquery  hover effect

$(function () {
    $("#project1").hover(
        function () {
            $("#project1 .solid-border").toggle();
        });
});

$(function () {
    $("#project2").hover(function () {
        $("#project2 .solid-border").toggle();
    });
});

$(function () {
    $("#project3").hover(function () {
        $("#project3 .solid-border").toggle();
    });
});

$(function () {
    $("#project4").hover(function () {
        $("#project4 .solid-border").toggle();
    });
});

$(function () {
    $("#project5").hover(function () {
        $("#project5 .solid-border").toggle();
    });
});
$(function () {
    $("#project6").hover(function () {
        $("#project6 .solid-border").toggle();
    });
});
$(function () {
    $("#project7").hover(function () {
        $("#project7 .solid-border").toggle();
    });
});
$(function () {
    $("#project8").hover(function () {
        $("#project8 .solid-border").toggle();

    });
   
});
