<?php

if(!$_POST) exit;

function clear_data($val){
    $val = trim($val);
    $val = stripslashes($val);
    $val = strip_tags($val);
    $val = htmlspecialchars($val);
    return $val;
}

$page = clear_data($_POST['page']);
$name = clear_data($_POST['name']);
$phone = clear_data($_POST['phone']);


if (isset($_POST["page"]) && isset($_POST["name"]) && isset($_POST["phone"]) ) {

$token = ""; //Токен бота
$chat_id = ""; // chat_id пользователя либо группового чата

$phone =  preg_replace("/[^0-9]/", "", $phone);
$text = "<b>Страница: </b>".$page.'%0A'."<b>Имя: </b>".$name.'%0A'."<b>Телефон: </b>".'%2B'.($phone);

$sendToTelegram = curl_init("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}");
curl_setopt($sendToTelegram, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
curl_exec($sendToTelegram); // Делаем запрос
curl_close($sendToTelegram); // Завершаем сеанс cURL
}
?>