<?php
function printName(?string $name) {
    if ($name === null) {
        echo "No name";
    } else {
        echo $name;
    }
}

printName("John"); // Output: John
printName(null);   // Output: No name
$a=printName(3);
var_dump($a);

function thu($a,$b=1,$c=2){
    echo $a.$b.$c;
}

thu(a:1,b:5);

$say = function($name){
    return true;
};
var_dump($say(null));
