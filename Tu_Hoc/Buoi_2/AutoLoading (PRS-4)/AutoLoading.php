<?php

/**
 * * Viết lại dưới dạng đường dẫn tuyệt đói 
 */

function autoload($nameClass){
    include_once $nameClass.'.php';
}

spl_autoload_register('autoload');
