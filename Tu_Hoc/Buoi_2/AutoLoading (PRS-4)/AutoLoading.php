<?php

/**
 * * Viết lại dưới dạng đường dẫn tuyệt đói 
 */

function autoload($nameClass){

    include_once $nameClass.'.php';
}
/**
 * ? Hoạt động spl_autoload
 * TODO: Khi chương trình gặp 1 Class(lớp) chưa xác định thì sẽ tự động gọi vào spl_autoload_register()
 * TODO: Lúc này spl_autoload_register() sẽ gọi hàm được đăng ký(register) 
 * ! Thường thì hàm đc spl_autoload_register() gọi func include file
 */
spl_autoload_register('autoload');


// spl_autoload_register(function($className) {
//     var_dump($className);echo "<br>";

//     $a = str_replace("\\", DIRECTORY_SEPARATOR, $className);
//     var_dump($_SERVER['DOCUMENT_ROOT'] . '/' . $className . '.php');die; 
//     echo "<br>";
//     include_once $_SERVER['DOCUMENT_ROOT'] . '/' . $className . '.php';

// });