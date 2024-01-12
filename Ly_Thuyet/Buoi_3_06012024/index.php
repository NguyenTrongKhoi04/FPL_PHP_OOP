<?php

require_once "models/db.php";
require_once "models/products.php";
require_once "controllers/controller.php";
require_once "controllers/productControllers.php";
require_once "controllers/homeController.php";
require_once "controllers/productDetail.php";
require_once "controllers/lienhe.php";
require_once "controllers/gioithieu.php";
$ctl = $_GET['ctl'] ?? "";

switch ($ctl) {
    case "home":
        homeIndex();
        break;
    case "lienhe":
        lienhe();
        break;
    case 'productdetail':
        productDetail();
        break;
    case "gioithieu":
        gioithieu();
        break;
    case "product":
        productIndex();
        break;
    default:
        echo "<h1>404 FILE NOT FOUND</h1>";
}
