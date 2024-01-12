<?php
/**
 * * Bài tập 1 : thao tác lại form có phương thức post, tạo mảng sinh viên, viết chương tình tìm kiếm sinh viên
 *             * cho phép người dùng nhập vào họ tên sinh viên 
 */
$a=[
    [
        'ho'   => 'nguyen',
        'ten' => 'a',
        'tuoi' => 5,
        'address' => 'HN',
        'Nghanh_hoc' => 'web'
    ],
    [
        'ho'   => 'tran',
        'ten' => 'b',
        'tuoi' => 4,
        'address' => 'HCM',
        'Nghanh_hoc' => 'UDPM'
    ],
    [
        'ho'   => 'luu',
        'ten' => 'c',
        'tuoi' => 10,
        'address' => 'Hue',
        'Nghanh_hoc' => 'MKT'
    ]
];

if($_SERVER["REQUEST_METHOD"]==='POST'){
    extract($_POST);
    if(!empty($ho) && !empty($ten)){
        foreach($a as $item){
            if($item['ho']== $ho && $item['ten']==$ten && !empty($item['ho']) && !empty($item['ten']) ){
                extract($item);
                echo '<h1 style="color: green"> Thông tin học sinh </h1>';echo '<br>';
                echo "Họ tên học sinh : ".$ho.PHP_EOL.$ten;echo '<br>';
                echo "Tuổi học sinh : ".$tuoi;echo '<br>';
                echo "Địa chỉ : ".$address;echo '<br>';
                echo "ngahnh hc  : ".$Nghanh_hoc;echo '<br>';
                break;
            }
        }
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
    <form action="" method="POST">
    <h2>Tìm Kiếm Tài Khoản </h2>
        <label>Nhập họ :</label>
            <input type="text" name="ho">
            <br>
        <label>Nhập tên: </label>
            <input type="text" name='ten'>
    <br>
        <input type="submit" value="Search" name="search">
    </form>
</body>

</html>