<?php 
/**
 * ? Hàm ẩn danh thường dùng trong trường hợp nào 
 */

// Callback trong hàm - thường dùng với array_map, array_filter
$numbers = [1, 2, 3, 4, 5];
$squared = array_map(function ($number) {
    return $number * $number;
}, $numbers);

// Hàm truyền tham sô
$result = array_reduce($numbers, function ($carry, $item) {
    return $carry + $item;
}, 0);

// Closure
function multiplyBy($factor) {
    return function ($number) use ($factor) {
        return $number * $factor;
    };
}

$double = multiplyBy(2);
echo $double(5); // Kết quả là 10

// Điều khiển luồng chương trình
usort($array, function ($a, $b) {
    return $a['age'] <=> $b['age'];
});
