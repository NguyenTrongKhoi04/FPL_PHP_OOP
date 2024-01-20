<?php
require_once "./env.php";
require_once "./config.php";
require_once __DIR__ ."/vendor/autoload.php";

use App\Models\ProductModel;

// dd(ProductModel::find(143));

$data = ProductModel::where('name','LIKE','%iphone%')
    ->andWhere('price','>=',1000)
    ->get();
// dd($data);
