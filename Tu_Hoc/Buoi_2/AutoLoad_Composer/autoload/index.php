<?php
include_once 'vendor/autoload.php';
use app\Home;
use app\Product;
use app_2\namespace_app_2\NewClass;
use app\hoten;

$a = new Home;
echo '<br>';
$b = new GlobalClass;
echo '<br>';
$c = new NewClass;
echo '<br>';
echo getMsg();
echo '<pre>';
print_r(get_included_files());
echo '</pre>';

$d = new hoten;

