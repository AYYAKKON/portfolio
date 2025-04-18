<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

if(!empty($_POST["send"])){

$userName = $_POST["userName"];
$userEmail = $_POST["userEmail"];
$userPhone = $_POST["userPhone"];
$userMessage = $_POST["userMessage"];
$toEmail = "iyyakone4372@gmail.com";

$mailHeaders = "Name: " . $userName .
"\r\n Email: " . $userEmail .
"\r\n Phone: " . $userPhone .
"\r\n Message: " . $userMessage . "\r\n";


if(mail($toEmail, $userName, $mailHeaders)){

    $message = "Your Information is Received Successfully.";

}

}






?>
    



<section class="contact section" id="contact">
  <h2 class="section-title" data-aos="fade-down">Contact</h2>

<div class="form-container">
  <form method="post" name="emailContact" action="">
    <div class="input-row">
      <label for="">Name <em>*</em></label>
      <input type="text" name="userName" required>
    </div>

    <div class="input-row">
      <label for="">Email <em>*</em></label>
      <input type="email" name="userEmail" required>
    </div>

    <div class="input-row">
      <label for="">Phone Number<em>*</em></label>
      <input type="tel" name="userPhone" required>
    </div>

    <div class="input-row">
      <label for="">Message <em>*</em></label>
      <textarea name="userMessage" required></textarea>
    </div>

    <div class="input-row">
      <input type="submit" name="send" value="Submit" >
        <?php if(!empty($message)){ ?>
      <div class="success">
        <strong><?php echo $mailHeaders; ?></strong>
      </div>
      <?php } ?>
    </div>
  </form>
</div>

</section>
</body>
</html>