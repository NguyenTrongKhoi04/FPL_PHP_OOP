<?php 
class Flag{
    public $flag = true;
}
$a = new Flag();
$b = new Flag();

var_dump($b);

var_dump($a);

/**
 * So sánh có cùng 1 đối tượng k
 * mặc dù a và b cùng 1 lớp nhưng chúng k tham chiếu đến cùng 1 đối tượng
 *  =>> false
 */
if($a===$b){
    echo'khoi';
}

// So Sánh giá trị của đối tượng
if($a==$b){
    echo'đúng';
}
if($a->flag === $b->flag){
    echo 'đúng 2';
}    

