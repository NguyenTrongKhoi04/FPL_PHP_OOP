<?php
include_once 'File_NameSpace_2.php';
include_once 'File_NameSpace_1.php';
use LopConnguoi2\ConNguoi as Alias_LopConNguoi2;
use LopConnguoi\ConNguoi;

$a = new LopConnguoi\ConNguoi('khoi');

$hoTen=$a->getHoTen();
var_dump($hoTen);
