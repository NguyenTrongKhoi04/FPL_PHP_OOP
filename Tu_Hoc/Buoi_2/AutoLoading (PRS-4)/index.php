<?php
include_once 'AutoLoading.php';
/**
 * ? Bây giờ muốn dùng Namespace bằng AutoLoad thì làm như nào 
 **Biết File autolaoding như sau 
 *       <?php 
 *       function autoload($nameClass){
 *           include_once $nameClass.'.php';
 *       }
 *       spl_autoload_register('autoload');
 */

$a = new ClassA;
// var_dump(dirname(__FILE__));
$a = str_replace('PHP_2_OOP','',dirname(__FILE__));
$b = new ClassB;
echo "<pre>";
print_r(get_included_files());
echo "</pre>";