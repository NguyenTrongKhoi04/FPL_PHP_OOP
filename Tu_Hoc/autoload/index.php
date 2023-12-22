<?php
include_once 'vendor/autoload.php';
use app\Home;
use app\Product;
use app_2\namespace_app_2\test;

$a = new Home;
$b = new GlobalClass;
echo '<pre>';
print_r(get_included_files());
echo '</pre>';
$c = new test;

