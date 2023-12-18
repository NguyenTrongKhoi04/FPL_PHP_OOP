<?php
/**
 * ==================INPUT==================
 *     $arr = [
 *   'a' => 'khoi',
 *   'b'=> 'thang',
 *   'c'=> 'tuan'
 *   ]; 
 * ==================OUTPUT==================
 *     $arr = [
 *   $a => 'khoi',
 *   $b=> 'thang',
 *   $c=> 'tuan'
 *   ]; 
 * ko được xóa mảng rồi tạo mới, chỉ được chỉnh sửa mảng
 * vardump key ra null cũng được  
 */

































 
 $arr = [
    'a' => 'khoi',
    'b'=> 'thang',
    'c'=> 'tuan'
 ];
 foreach($arr as $key => $value ){
    extract($arr);
 }
