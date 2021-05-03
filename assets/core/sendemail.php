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
    $errorMSG .= "El correo es requerido ";
} else {
    $email = $_POST["email"];
}

// TELEFONO
if (empty($_POST["phone"])) {
    $errorMSG .= "El telefono es requerido ";
} else {
    $subject = $_POST["phone"];
}

// EMPRESA
if (empty($_POST["company"])) {
    $errorMSG .= "La empresa es requerida ";
} else {
    $subject = $_POST["company"];
}


$EmailTo = "alan@alvetti.com";
$Subject = "Nuevo Mensaje landing Escandinava del Plata - Volvo";

// prepare email body text
$Body = 'Nombre: '.$name."\n";
$Body .= 'E-mail: '.$email."\n";
$Body .= 'Telefono: '.$phone."\n";
$Body .= 'Empresa: '.$company."\n";
$Body .= 'Cargo: '.$position;

$headers = "From: Contacto Landing Escandinava del Plata - Volvo <alan@alvetti.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// send email
$success = mail($EmailTo, $Subject, $Body, $headers);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Suceso";
}else{
    if($errorMSG == ""){
        echo "Ups, algo falló.";
    } else {
        echo $errorMSG;
    }
}

?>