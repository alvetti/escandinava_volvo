$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "¿Completaste todos los campos correctamente?");
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
    var phone = $("#phone").val();
    var company = $("#company").val();
    var position = $("#position").val();


    $.ajax({
        type: "POST",
        url: "https://escandinaviaplata.com/volvo/assets/core/sendemail.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&company=" + company +"&position=" + position,
        success: function (text) {
            if (text == "Gracias, recibimos tu solicitud y en breve nos comunicaremos con vos.") {
                formSuccess();
                submitMSG(true, text);
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
    console.log();
}

function formSuccess() {
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