<?php
/*
 * 1 anonymouse function
 * 2 IIFE
 * 3 Closure
 * 4 Callback 
 */

// 1 anonymouse function
function () {
    echo ("xin chao");
};

// goi ham 
call_user_func(function ($name) {
    echo ("xin chao: $name");
}, "Nguyen Nam");

// 2 IIFE 
(function ($name) {
    echo ("<h2> Xin chao : $name</h2>");
})("Mnah donf");

// 3 Closuse
$hello = function () {
    echo ("Welcome to Summoner rift");
};
$hello();

// 4 Callback
function showName($name, $callback)
{
    $callback($name);
}
echo ("<br / >");
showName("ManhDong", function ($name) {
    echo ("<br> Ten may la $name");
});

// xay dung 1 ham de goi lai 
function getName($name){
    echo("<br> ten may : $name");
}
showName("ManhDong","getName");
