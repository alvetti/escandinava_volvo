<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "El nombre es requerido ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "El email es requerido ";
} else {
    $email = $_POST["email"];
}

// EMAIL
if (empty($_POST["subject"])) {
    $errorMSG .= "El asunto es requerido ";
} else {
    $subject = $_POST["subject"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "El mensaje es requerido ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "alan@alvetti.com";
$Subject = "Nuevo Mensaje desde Condimo Like";

// prepare email body text
$Body = 'Nombre: '.$name."\n";
$Body .= 'E-mail: '.$email."\n";
$Body .= 'Asunto: '.$subject."\n";
$Body .= 'Mensaje: '.$message;

$headers = "From: Contacto Site Condimo Like <alan@alvetti.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// send email
$success = mail($EmailTo, $Subject, $Body, $headers);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Ups, algo falló.";
    } else {
        echo $errorMSG;
    }
}

?>