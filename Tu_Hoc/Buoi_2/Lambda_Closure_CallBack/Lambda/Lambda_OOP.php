<?php
 class student{
    public $name;
    public $score;

    function __construct()
    {
        $this->score = function($math,$historic){
            return ($math+$historic)/2;
        };        
    }

    function getScore(){
        return $this->score;
    }
 }

 $student1=new student();
 $a = $student1->getScore();
 echo $a(3,4);
 var_dump($a);


//======== Ví dụ khi phạm vi thay đổi ========
class MathOperations {
    private $addFunction;

    public function __construct() {
        $this->addFunction = function ($a, $b) {
            return $a + $b;
        };
    }

    public function getAddFunction() {
        return $this->addFunction;
    }
}

$math = new MathOperations();
$addFunction1 = $math->getAddFunction();

// Thay đổi closure qua biến $addFunction1
$addFunction1 = function ($a, $b) {
    return $a * $b;
};

// Gọi closure từ thuộc tính trong đối tượng
$addFunction2 = $math->getAddFunction();

echo $addFunction2(3, 4); // Kết quả là 12 (không phải 7 vì closure đã được thay đổi)

