<?php

$a = function (){
    return 'nguyễn trọng khôi';
};

function getNumber($info){
    return $info();
}

$b = getNumber($a);
echo $b;