<?php
include_once 'data.php';
echo '<pre>';
print_r($arrAcc);
echo '</pre>';
if(!empty($_POST['NapTien'])){
    extract($_POST);
    foreach($arrAcc as $arr1=>$key){    
            if($key =  $idAcc){
                // duyệt để lấy ra được đới tượng nạp tiền
                foreach($arrObj as $acc){
                    $check = $acc->idAcc() ;
                    if($idAcc == $check){
                        $acc->NapTien($soTienNap);
                        var_dump($acc);
                        $acc[$arr1]=$acc;
                        echo '<pre>';
                        print_r($arrAcc);
                        echo '</pre>';
                        break;
                    }
                }
                break;
            };
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <br>
    <form action="" method="POST">
        FROM <input type="text" placeholder="Nhập id" name="idAccChuyen"> TO <input type="text" name="idAccNhan" placeholder="nhập id">
        <br>
        <label for="">Số tài chuyển muốn chuyển  </label>
        <input type="number" name="idAcc"><br>
        <input type="submit" name="ChuyenTien" value="Chuyển">
        <br>
        <br>

        <label for="">Số tài khoản muốn rút tiền</label>
        <input type="number" name="idAcc" min="0" placeholder="Nhập ID">
        <br>
        <label for="">Rút Tiền</label>
        <input type="number" name="" min=1 >
        <br>
        <input type="submit" name="RutTien" value="Rút">
        <br><br>

        <label for="">Số tài khoản muốn nạp</label>
        <input type="number" placeholder="nhập id" name="idAcc">
        <br>
        <label for="">Số Tiền Nạp</label>
        <input type="number" min=1 name="soTienNap">
        <br>
        <input type="submit" name="NapTien" value="Nạp Tiền">
    </form>
</body>
</html>
<?php 
$arrObj = [
    $a,
    $b,
    $c
];
?>