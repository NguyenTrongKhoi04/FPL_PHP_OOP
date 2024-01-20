<?php
class Animal{
    public $name;
    public $mau;

    public function __construct($name,$mau){
        $this->name = $name;
        $this->mau = $mau;
    }

    public function tiengKeu(){
        echo "$this->name đang kêu";
    }
}

class Dog extends Animal{
    public function tiengKeu() {
        echo "$this->name đang kêu gâu gâu";
    }
}

class Cat extends Animal{
    public function tiengKeu() {
        echo "$this->name đang kêu meo meo";
    }
}
