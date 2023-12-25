<?php 
/**
 * ? Lambda là gì 
 * ? Có tác dụng gì 
 */

/**
 * * Lambda là gì ?
 *      Lambda là một anonymous function (hàm ẩn danh) nó có thể khai báo,định nghĩa ở bất kỳ đâu và không có khả năng tái sử dụng.
 *              ? không tái sử dụng được là sao 
 *                  có nghĩa là bạn không sử dụng được lại, lần sau sử dụng sẽ cho ra kết quả khác lần trước 
 *                  TODO: ví dụ hàm tái sử dụng được 
 *                         +> function add($a, $b) {return $a + $b;}
 *                              => add(3,5) = add(5,3) => 2 kết quả giống nhau 
 *                         +> function number(){return 2;} =>> kết quả luôn luôn giống nhau khi gọi hàm
 *                  TODO: ví dụ hàm không tái sử dụng được
 *                          function generateRandomMessage() {
 *                                     $messages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
 *                                     $randomIndex = array_rand($messages);
 *                                     return $messages[$randomIndex];
 *                              }
 *                          =>> kết quả trả về sau mỗi lần gọi CÓ THỂ khác nhau hoàn toàn
 * 
 * * Dùng để xử lý những chỗ DUY NHẤT. Giống như JS thì khi bạn gán sự kiện vào 1 phần tử HTML thì dùng hảm ẩn danh cho nhanh
 *          * Có những thứ, chức năng,.... chỉ xuất hiện duy nhất trong 1 dự án, file code hay chỉ đơn giản là dùng cho trường hợp đó 
 *          TODO: ví dụ 1
 *             function generateRandomMessage() {
 *                 $messages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
 *                 $randomIndex = array_rand($messages);
 *                 return $messages[$randomIndex];
 *             }
 *          TODO: ví dụ 2
 *              function speak($message){
 *                echo $message();
 *              }
 *              
 *              // Gọi hàm
 *              speak(function(){
 *                return "Xin chào";
 *              });
 *              
 */