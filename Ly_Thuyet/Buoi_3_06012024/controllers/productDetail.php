<?php 
function productDetail()
{
    $products = listProductAll();
    
    view("ProductDetail/ProductDetail", ["products" => $products]);
}