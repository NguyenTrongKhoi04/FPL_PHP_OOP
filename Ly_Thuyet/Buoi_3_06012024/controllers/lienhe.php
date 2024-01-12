<?php 
function lienhe()
{
    $products = listProductAll();
    
    view("lienhe/lienhe", ["products" => $products]);
}