<?php
/**
 * ? CLOSURE là gì
 * ? Có mấy loại CLOSURE 
 * ? Cách thức hoạt động của nó 
 * ? CLOSURE chỉ dùng được hàm ẩn danh 
 * ? Sự khác biệt hàm ẩn danh và CLOSURE 
 * ? ghi nhớ context (ngữ cảnh) của CLOSURE là sao
 * ? áp dụng thực tế của CLOSURE (nâng cao)
 *      ?  Đối tượng Callback trong Môi Trường Hướng Đối Tượng:
 *      ?  Callback trong Môi Trường Đa Luồng
 *      ?  Thực Hiện Logic Callback Linh Hoạt
 */


/**
 * * 1) CLOSURE giống như lambda nhưng nó sử dụng biến bên ngoài function
 *        CLOSURE dịch theo nghĩa thuần việt là khép kín.
 *      TODO: sử dụng từ khóa "use" hoặc dùng "bindTo"
 *      TODO: Cấu truc như sau 
 *            function (argument) use (scope) {} 
 *                +> "argument" là tham số truyền vào của func
 *                +> "scope" là biến ngoài phạm vi func
 *   
 * * 2) CLOSURE có 2 loại
 *        * Closure không gắn kết (Non-Capturing Closure)
 *            không sử dụng bất kỳ biến nào từ ngoài phạm vi của nó
 *                  $greet = function () {
 *                               return "Hello, world!";
 *                             };
 *        * Closure gắn kết (Capturing Closure):
 *                   $name = "John";
 *                   $greet = function () use ($name) {
 *                       return "Hello, $name!";
 *                   };
 * * 3) Cách thức hoạt động 
 *         Nó bắt phải được gán vào biến hoặc tham số (thường thì sẽ là "tham số truyền vào của function")
 *         Hoạt động giống Lambda
 * 
 * * 4) CLOSURE dùng được cả hàm ản danh và hàm thường
 *       TODO: Ví dụ không dùng hàm ẩn danh
 *              // sử dụng hàm ẩn danh
 *              $closure1 = function ($x) {
 *                  return $x * $x;
 *              };
 *              
 *              // Sử dụng hàm có tên
 *              function square($x) {
 *                  return $x * $x;
 *              }
 *              
 *              // Gán hàm có tên làm closure
 *              $closure2 = 'square';
 *              
 *              // Sử dụng closures
 *              echo $closure1(5); // Kết quả là 25
 *              echo $closure2(5); // Kết quả cũng là 25
 * 
 * * 5) Sự khác biệt CLOSURE và hàm ẩn danh
 *      sự khác biệt lớn nhất -> CLOSURE gắn kết (capture) biến bên ngoài phạm vi scope của nó còn hàm ẩn danh thì không
 *      ! Hàm ẩn danh là 1 dạng của CLOSURE
 * 
 * * 6) Context CLOSURE 
 *      Context (ngữ cảnh) được sinh ra cùng nới 1 function, class, method
 *      nên khi sinh ra sẽ mặc đinh tự quy định phạm vi của closure đó 
 *          =>> CLOSURE được sử dụng những gì tronng phạm vi quy đinh đó 
 *      TODO: Ví dụ phát hiểu luôn nè
 *              function createClosure($x) {
 *                  return function ($y) use ($x) {
 *                      return $x + $y;
 *                  };
 *              }
 *              
 *              $myClosure = createClosure(10);
 *              
 *              // Gọi closure với đối số 5
 *              $result = $myClosure(5);
 *              
 *              echo $result; // Kết quả là 15
 * 
 * * 7) Áp dụng thực tế của CLOSURE - Bao giờ thành thạo hàm ẩn danh, CLOSURE cơ bản thì hẵng đọc, ko là lú luôn đấy
 *        TODO: Đối tượng Callback trong Môi Trường Hướng Đối Tượng:
 *                   class EventListener {
 *                      private $name = 'Event';
 *                  
 *                      public function handleEvent($callback) {
 *                          // Gắn closure vào đối tượng EventListener
 *                          $handler = $callback->bindTo($this, 'EventListener');
 *                  
 *                          // Xử lý sự kiện
 *                          $handler();
 *                      }
 *                  }
 *                  
 *                  $eventListener = new EventListener();
 *                  $callback = function() {
 *                      echo "Handling event in {$this->name}\n";
 *                  };
 *                  
 *                  $eventListener->handleEvent($callback);
 *              
 *          TODO: Callback trong Môi Trường Đa Luồng    
 *                   class Worker {
 *                      private $name = 'Worker';
 *                  
 *                      public function performTask($callback) {
 *                          // Gắn closure vào đối tượng Worker
 *                          $task = $callback->bindTo($this, 'Worker');
 *                  
 *                          // Thực hiện công việc
 *                          $task();
 *                      }
 *                  }
 *                  
 *                  $worker = new Worker();
 *                  $callback = function() {
 *                      echo "Performing task as {$this->name}\n";
 *                  };
 *                  
 *                  $worker->performTask($callback);
 * 
 *          TODO: Thực Hiện Logic Callback Linh Hoạt
 *                   class Calculator {
 *                      private $factor = 2;
 *                  
 *                      public function calculate($callback) {
 *                          // Gắn closure vào đối tượng Calculator
 *                          $operation = $callback->bindTo($this, 'Calculator');
 *                  
 *                          // Thực hiện phép toán
 *                          return $operation(5);
 *                      }
 *                  }
 *                  
 *                  $calculator = new Calculator();
 *                  $callback = function($x) {
 *                      return $x * $this->factor;
 *                  };
 *                  
 *                  $result = $calculator->calculate($callback);
 *                  echo "Result: $result\n";
 *                                    
 */
