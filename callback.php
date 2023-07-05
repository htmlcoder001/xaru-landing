<?php
/**
 * Created by PhpStorm.
 * Author: webtitov.ru
 */

if (isset($_POST['firstName']) && !empty($_POST['firstName'])) {
  $firstName = 'First Name: ' . $_POST['firstName'] . "\n";
}
if (isset($_POST['lastName']) && !empty($_POST['lastName'])) {
  $lastName = 'Last Name: ' . $_POST['lastName'] . "\n";
}
if (isset($_POST['phone']) && !empty($_POST['phone'])) {
  $phone = 'Phone Number: ' . $_POST['phone'] . "\n";
}
if (isset($_POST['company']) && !empty($_POST['company'])) {
  $company = 'Company Name: ' . $_POST['company'] . "\n";
}
if (isset($_POST['email']) && !empty($_POST['email'])) {
  $email = 'Email: ' . $_POST['email'] . "\n";
}
if (isset($_POST['country']) && !empty($_POST['country'])) {
  $country = 'Country: ' . $_POST['country'] . "\n";
}

$to = 'web@2dsd.ru';

$subject = 'XARU | Test mail';

$message = $firstName . $lastName . $phone . $company . $email . $country;

$headers = 'From: noreply@evaline.ru' . "\r\n" .
    'Reply-To: noreply@evaline.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);