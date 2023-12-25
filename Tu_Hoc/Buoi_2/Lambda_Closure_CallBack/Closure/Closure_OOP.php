<?php
// Hàm closure
$closure = function() {
    // name chính là thuộc tính name của đối tượng cần bindTo
    return $this->name; 
};
 
// Lớp động vật
class Animal {
    private $name = 'Cat';
}
 
// Khởi tạo lớp động vật
$animal = new Animal();
 
// Lúc này $getName là một closure mới với ngữ cảnh của đối tượng $animal và phạm vi 'Animal'
$getName = $closure->bindTo($animal, 'Animal');
 
// Gọi closure $getName;
echo $getName(); // Output: Cat


/**
 *  ! bindTo trả về 1 closure mới 
 *  * BindTo được use để chuyển đổi ngữ cảnh (context)
 *      TODO: Chuyển đổi từ ngữ cảnh 'closure' ban đầu sang ngữ cảnh của đối tượng '$animal'
 *      TODO: Hiểu đơn giản là khi gọi CLOSURE thì nó sử dụng ngữ cảnh của đối tượng '$animal' và có thể truy cập vào thuộc tính name
 *  * hàm CLOSURE ghi nhớ context (ngữ cảnh) trong đó nó được tạo ra =>> ví dụ nó được tạo ra trong class 
 */