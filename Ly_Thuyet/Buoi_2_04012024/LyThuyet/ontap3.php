<?php
// lam viec voi CSDL
$host = "localhost"; // localhost
$dbname = "we3014.01";
$username = "root";
$password = "";

try {
    $conn = new PDO(
        "mysql:host=$host; dbname=$dbname; charset=utf8",
        $username,
        $password
    );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Loi ket noi CSDL: " . $e->getMessage();
}

// hien thi du lieu 
$sql = "SELECT * FROM products";// sql
$stmt = $conn->prepare($sql);//su chuan bi
$stmt->execute();//thuc thi 
$result = $stmt->fetchAll(PDO::FETCH_OBJ); // LAY DU LIEU 
echo("<pre>");
print_r($result);
echo("</pre>");