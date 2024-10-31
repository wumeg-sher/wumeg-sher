<?php 
	$fName = $_GET["fName"];
	$lName = $_GET["lName"];
	$DOB = $_GET["DOB"];
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>You've submitted the form </p>
    <p>here is your info</p>
	<?= $fName ?>
	<?= $lName ?>
	<?= $DOB ?>
</body>
</html>