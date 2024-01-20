<?php
/**
 * * làm kkhung mẫu cho class
 * ! không thể tạo instance cho class abstract
 */
abstract class Bank{
    public $hoTen;
    public $soTk;
    public $soDu;

    function __construct($hoTen,$soTk,$soDu){
        $this->hoTen = $hoTen;
        $this->soTk= $soTk;
        $this->soDu=$soDu;
    }
    abstract function chuyentien($sotien,$nguoinhan);
}


class Bank2 extends Bank{
    public function chuyentien($sotien,$nguoinhan){
        if ($this->soDu >= $sotien) {
            $this->soDu -= $sotien;
            $nguoinhan->soDu += $sotien; 
            echo "bạn đã chuyển $sotien đến tài khoản $nguoinhan->soTk thành công"; 
        }else{
            echo "lượng tiền bạn nộp quá lớn";
        }
    }
}

$user_1 = new Bank2("nguyễn văn A","ID_2101",20000);
$user_2 = new Bank2("nguyễn văn B","ID_3020",20000);

$user_1->chuyentien(500,$user_2);