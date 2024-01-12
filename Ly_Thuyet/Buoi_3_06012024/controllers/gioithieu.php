<?php

//Trang hiển thị danh sách sản phẩm
function gioithieu()
{
    $products = listProductAll();

    view("gioithieu/gioithieu", ["products" => $products]);
}
