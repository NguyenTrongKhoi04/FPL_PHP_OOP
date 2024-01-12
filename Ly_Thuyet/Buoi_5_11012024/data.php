<?php
class Bank{
    protected $nameAcc ;
    protected $idAcc;
    protected $moneyAcc = 0;

    function __construct($nameAcc,$idAcc){
        $this->nameAcc =$nameAcc;
        $this -> idAcc=$idAcc;
        echo "Xin chào: $idAcc - $nameAcc, có số tiền: $this->moneyAcc<br>";
    }

    function info(){
        return [
            'Tên tài khoản'=>$this->nameAcc ,
            'ID Tài Khoản' =>$this->idAcc,
            'Số dư'=>$this->moneyAcc
        ];
    }
    function NapTien($number){
        $this->moneyAcc =  $this->moneyAcc + $number;
        return $this->moneyAcc;
    }

    function RutTien($number){
        if($this->moneyAcc <=0 ){
            echo "<br>Tài khoản $this->nameAcc đã hết tiền nên không thể rút";
        }else{
            $this->moneyAcc =  $this->moneyAcc - $number;
        }
    }

    function idAcc(){
        return $this->idAcc;
    }
    function get(){
        echo "Xin chào: $this->idAcc - $this->nameAcc, có số tiền: $this->moneyAcc";
    }
 
}
class Bank2 extends Bank{
    private $hoTen;
    private $date;
     
    function guiLaiXuat(){
        $this->moneyAcc = $this->moneyAcc + $this->moneyAcc*(6/100); 
        return $this->moneyAcc;
    }
    
    function chuyentien($money,$NguoiNhan){
        $this->moneyAcc = $this->moneyAcc - $money;
        $NguoiNhan->NapTien($money);
    }
}

$a = new Bank('A',1);
$b = new Bank('B',2);
$c = new Bank('C',3);
$arrObj = [
    $a,
    $b,
    $c
];
$arrAcc = [
    $a->info(),
    $b->info(),
    $c->info()
];
// echo '<br>Số tiền nạp vào tài khoản a là 300<br>';
// $a->NapTien(300);
// $a->get();
// echo '<br>Số tiền nạp vào tài khoản a là 1000<br>';
// $a->NapTien(1000);
// $a->get();
// echo '<br><br>';
// $b->get();
// echo '<br>Tài khoản B rút 500k';
// $b->RutTien(500);
// echo '<br><br>';
// echo '<br>Số tiền nạp vào tài khoản b là 300<br>';
// $b->NapTien(300);
// $b->get();
// echo '<br>Số tiền nạp vào tài khoản b là 1000<br>';
// $b->NapTien(1000);
// $b->get();
// echo "<br>";
// echo "<br>";
// $d = new Bank2('D',4);
// echo 'Số tiền nạp vào tài khoản d là 100<br>';
// $d->NapTien(100);
// $d->get();
// echo '<br>  Số tiền lãi suất là :'.$d->guiLaiXuat();

// echo "<br><br>Tài khoản A chuyển cho tài khoản B 100";
// $d->ChuyenTien(50,$b);
// echo "<br>";
// $d->get();
// echo "<br>";
// $b->get();
?>