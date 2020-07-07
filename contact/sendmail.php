<?php

$Referer_check_domain = "zelmo.jp";
$funcRefererCheck = refererCheck(0,$Referer_check_domain);//

usleep(300000);
$salon = cleanInput($_POST['salon']);
$emailadd = cleanInput($_POST['emailadd']);
$firstdate = cleanInput($_POST['firstdate']);
$seconddate = cleanInput($_POST['seconddate']);
$custmername = cleanInput($_POST['custmername']);
$phone = cleanInput($_POST['phone']);

include "tmpl.php";

if(mb_send_mail($mailTo, $subject, $message ,$from) and mb_send_mail($mailBack, $subject, $messageback ,$fromBack)){
setcookie("salon",$cookieSalon,time()+60*5,"/");
header('Location: ../contact/thanks.html');

}else{

echo "<script>alert('送信できませんでした');</script>";

}

function refererCheck($Referer_check,$Referer_check_domain){
	if($Referer_check == 1 && !empty($Referer_check_domain)){
		if(strpos($_SERVER['HTTP_REFERER'],$Referer_check_domain) === false){
			return exit("<script>alert('不正なアクセスです');</script>");
		}
	}
}

function cleanInput($input) {

		//Convert the predefined characters to HTML entities:
		$input = htmlspecialchars($input);

		//strip whitespace from the beginning and end of a string.
		$input = trim($input);

		//remove the backslash in the string
		$input = stripcslashes($input);

		return $input;

}

?>
