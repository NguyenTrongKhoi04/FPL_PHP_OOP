<?php
namespace LopConnguoi;
class ConNguoi{
    private $hoten;
    private $diem;
    public function __construct($name)
    {
        $this->hoten = $name;        
    }
    public function getHoTen(){
        return $this->hoten;
    }
}