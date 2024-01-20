<?php
interface Bank{
    public function rutTien($sotien);
    public function chuyenTien($soTien,$nguoiNhan);
}

class Bank2 implements Bank{
    public $hoTen;
    public $soTk;
    public $soDu;

    function __construct($hoTen,$soTk,$soDu){
        $this->hoTen = $hoTen;
        $this->soTk= $soTk;
        $this->soDu=$soDu;
    }
    public function rutTien($sotien){
        $this->soDu -= $sotien;
    }

    public function chuyenTien($soTien,$nguoiNhan){
        if ($this->soDu >= $soTien) {
            $this->soDu -= $soTien;
            $nguoiNhan->soDu += $soTien; 
            echo "bạn đã chuyển $soTien đến tài khoản $nguoiNhan->soTk thành công"; 
        }else{
            echo "lượng tiền bạn nộp quá lớn";
        }
    }
}