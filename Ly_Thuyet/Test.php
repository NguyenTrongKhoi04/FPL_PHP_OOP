<?php

$arr = [
    'key'       => 'value',
    'other_key' => 'other_value',
];
$obj = (object) $arr;
var_dump($obj);

/**
 * ? Đôi lúc bạn muốn nhét các thuộc tính lẻ tẻ vào 1 lớp để dùng 
 * ! Vấn đè ở đây chính là chỗ đó, bạn lại phải đi tạo đối tượng và setup thuộc tính trong lớp đó
 * ! nếu làm như cách trên thì rất mất time và đôi lúc trong quá trinh viết lại nhỡ lúc đó đầu đang lú thì cso thể viết sai
 * * Chính vì vậy nên mới sinh ra "stdClass"
 * TODO: nhìn vào ví dụ dưới sẽ hiểu luôn nhá
 */

/**
 * * $book ở đây sẽ là 1 obj và nó chứa mấy cái thuộc tính linh tinh
 * ! stdClass chỉ chứa thuộc tính 
 * ! Nếu muốn có phương thức thì ta phải gán vào biến, nhìn ví dụ ở dưới sẽ hiểu
 * ? gọi method ra kiểu gì
 */ 



die;
$book->amazon_link = "http://www.amazon.com/dp/0439136369/";
echo '<pre>';
print_r($book);
echo '</pre>';

// class Foo
// {
//     $time = time();
//     protected $_time = $time;
// }

//magic method   
class Foo
{
    public function __call($method, $args)
    {
        echo "Called __call with $method","\n<br>\n";
        var_dump($args);
            // ? sao $args không đặt kiểu dữ liệu và giá trị mặc định mà khi in ra nó không. 
            // ? Vì sao nó có thể tự đin
    }
}

$object = new Foo;
$object->someMethod(2,3,4);

class Foo2
{
    static public function someStaticMethod()
    {
        echo "Called";
    }

    public function __call($method, $args)
    {
        echo "Called __call with $method","\n<br>\n";
    }    
}
Foo2::someStaticMethod();

// magic method với static
class Foo3
{
    public function __call($method, $arguments)
    {
        echo "Called $method","\n";
    }

    static public function __callStatic($method, $arguments)
    {
        echo "Called $method","\n";
        var_dump($arguments);
    }

}

Foo3::someStaticMethod('khoi');

// class alias
class_alias('Enterprise_SalesArchive_Block_Adminhtml_Sales_Archive_Order_Container','ArchiveOrderContainer');

/**
 * ?làm sao đẻ khai báo method stdClass
 */