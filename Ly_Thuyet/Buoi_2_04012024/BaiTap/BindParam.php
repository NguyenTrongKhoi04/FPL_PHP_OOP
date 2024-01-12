<?php
include_once '../LyThuyet/ontap3.php';

// du lieu insert dua vao 1 mang 
$data = [
    "name" => "TEST",
    "image" => "noimage.jpg",
    "cate_id" => 1,
    "price" => 300
];
//thuc thi

/**
 * @param: tên bảng và mảng data 
 */
function queryInsert($table,$data = []){
    global $conn;

    $field ='';
    $fieldValue = '';

    foreach($data as $key=>$value){
        $field .= ','.$key;
        $fieldValue .= ',:'.$key;
    }

    $field = trim($field,',');
    $fieldValue = trim($fieldValue,',');

    $sql = "INSERT INTO products($field) VALUE($fieldValue)";
    $stmt = $conn->prepare($sql);

    // TODO: xử lý SQL injection với BindParam
    foreach($data as $key=>$value){
        $stmt->bindParam(":$key",$value);
    }
    

    return  $stmt->execute($data);
}

/**
 * @param: $where => điều kiện
 * @param: $value => column = value
 */
function queryUpdate($table,$where,$data=[]){
    global $conn;

    $field ='';
    $fieldValue = '';
    $setValue ='';
    foreach($data as $key=>$value){
        $field .= ','.$key;
        $fieldValue .= ',:'.$key;
        $field = trim($field,',');
        $fieldValue = trim($fieldValue,',');

        $setValue .= ',' . $field . ' = ' .$fieldValue;
        $field ='';
        $fieldValue = '';
    }
    $setValue = trim($setValue,',');

    $sql = "UPDATE $table SET $setValue WHERE $where ";
    echo $sql;
    $stmt = $conn->prepare($sql);

    // TODO: xử lý SQL injection với BindParam
    foreach($data as $key=>$value){
        $stmt->bindParam(":$key",$value);
    }

    return  $stmt->execute($data);

    /**
     * ? Tại sao khi khi để dạng arr[key] trong BindParam thì execute() không cần cho $data vào
     */
    // foreach($data as $key=>$value){
    //     $stmt->bindParam(":$key",$data[$key]);
    // }

    // return  $stmt->execute();

};

// if(queryInsert("products",$data)){
//     echo 'run thành công';
// };
// queryUpdate("products","id = 174",$data);