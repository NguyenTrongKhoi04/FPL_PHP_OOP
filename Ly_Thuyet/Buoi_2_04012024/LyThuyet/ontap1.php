<?php
// ham khong co gia tri tra ve 
// ham khong co tham so      
function hello()
{
    echo ("Xin Chao");
}
// loi goi ham
hello();

// ham co tham so 
function helloName($name)
{
    echo ("xin chao $name");
}
echo ("<br / >");
helloName("Manh Dong");

// ham co gia tri tra ve 
function sum($a, $b)
{
    return $a + $b;
}

$tong = sum(10, 20);
echo ("<br / >");
echo ("Sum = $tong");

// ham khong biet truoc tham so 
// toan tu rest ...
function sumArguments(...$numbers)
{
    return array_sum($numbers);
}
echo ("<br / >");
echo("Tong cac so = " . sumArguments(3,2,1,4,5,6,4));

//
// function sumArguments(...$numbers)
// {
//     var_dump($numbers);
// }
// echo ("<br / >");
// sumArguments(3,2,1,4,5,6,4);

// toan tu spead
$arr1 = [3 , 65 , 12];
$arr2 = [6 , 78 , 9];
// gop mang [3 , 65 , 12 , 6 , 78 , 9]
$arrNerge =[...$arr1 , ...$arr2];
echo"<pre>";
print_r($arrNerge);


/**
 * ? chạy thử xem câu sql này có được không
 */
// them du lieu 
  // su dung cau lenh co tham so 
include_once 'ontap3.php';
$sql = "INSERT INTO products(name,image,cate_id,price) VALUE(:name , :image , :cate_id , :price)";

// chuan bi
 $stmt = $conn->prepare($sql);
 // du lieu insert dua vao 1 mang 
 $data = [
    "name" => "TEST",
    "image"=>"noimage.jpg",
    "cate_id"=>1,
    "price"=>200
 ];
 //thuc thi
 $stmt->execute($data);


