$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "�Completaste todos los campos correctamente?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    $("#msgSubmit").text("");
    $("#btsubmit").addClass("displaynone");
    $("#loader").addClass("loader");
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "https://condimo.com/condimolike/assets/core/sendemail.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
    console.log();
}

function formSuccess() {
    $("#loader").removeClass();
    window.location = "https://condimo.com/condimolike/gracias.php";
}

function formError() {
}

function submitMSG(valid, msg) {
    $("#btsubmit").removeClass("displaynone");
    $("#loader").removeClass();
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}