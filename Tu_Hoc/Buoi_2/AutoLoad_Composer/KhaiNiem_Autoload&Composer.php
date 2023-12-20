<?php
/**
 * ? Composer là gì 
 *      Là 1 Công cụ quản lý SỰ PHỤ THUỘC trong php
 *      Cho phép bạn khai báo các thư viện và đông thời cũng quản lý các version của thư viện đó
 *      * Hiểu đơn giản là khi bắt đầu 1 dự án, chúng ta sẽ phải sử dụng các library (thư viện) để code cho nhanh
 *      * Nhưng vấn đề ở chỗ có nhiều thư viện lại sử dụng các thư viện khác (extend thư viện khác)
 *          * =>> để sử dụng thư viện đó thì bạn phải include các thư viện khác 
 *          * ngoài ra khi thư viện đó update =>> vào file gốc của thư viện đó để sửa version 
 *              ! TÌm Lòi mắt chưa chắc đã thấy file gốc và mất nhiều time khi tìm  
 *          TODO: Đó chính là lý do ra đời của COMPOSER
 * 
 * ? Có thể bạn sẽ hỏi autoload với spl_autoload_register() và autoload Composer khác gì nhau 
 *      Tuy là cả 2 đều include các class khi class đó được gọi ra bằng cách khởi tạo đối tượng mới nhưng nó sẽ khác nhau
 *      TODO: về bản chất thì 2 cách autoload này đều đúng nhưng phải phụ thuốc vào quy mô dự án 
 *          * Nếu bạn dùng các thư viện, framework thì dùng COMPOSER
 *              Khi muốn unclude thư viện vào dự án =>> Dễ cài đặt, 1 dòng lệnh (Library + Version)
 *              =>> Tiết kiệm thời gian khi update thư viện 
 *              Dễ quản lý các DEPENDENCIES - Cái này tý tôi sẽ giải thích sau. Ở chỗ này hiểu đơn giản là các thư viện
 *              Giúp mọi người trong team có chung 1 version library khi code, tránh trường hợp conflict vì khác version
 *          * Nếu bạn ko dùng framework, các thư viện,... thì nên dùng spl_autoload_register() 
 *      
 *      TODO: Lưu ý khi đặt tên file
 *          * spl_autoload_register
 *              Bạn đặt tên file trùng với tên class nếu không sử dụng namespace
 *              nếu dùng namespace =>> đặt tên theo cấu trúc thư mục (Lưu ý hoa-Thường)
 *          * COMPOSER 
 *              không phân biệt hoa thường nhưng khuyến cáo nên đặt tên file theo kiểu PascalCase (ex: ChiTiet.php)
 * 
 * ? COMPOSER chứa những gì và cần luư ý gì 
 *      Khi bạn install thì sẽ xuất hiện FOLDER vendor (trong đây có autoloda.php) và FILE composer.json
 *      2 cái ở dòng tên thì bạn nên đặt ngang hàng với file chạy của chương trình 
 *      TODO: composer.json
 *          * Đây là tệp tin chính định nghĩa các dependency, scripts, và các cấu hình khác cho dự án của bạn. 
 *          * Nó chứa thông tin về các gói cài đặt, phiên bản, và các yêu cầu khác. 
 *          * Khi bạn chạy composer install hoặc composer update, Composer sẽ đọc từ tệp tin này để cài đặt các thư viện và dependencies.
 *      TODO: composer.lock
 *          * Tệp tin này được tạo ra tự động khi bạn chạy lệnh composer install. 
 *          * Nó chứa danh sách các phiên bản cụ thể của các thư viện và dependencies, bao gồm cả các dependencies gián tiếp. 
 *          * Composer sẽ sử dụng file này để đảm bảo rằng phiên bản cụ thể của mỗi thư viện được cài đặt, giữ cho môi trường phát triển ổn định và giống nhau.
 * 
 * ? DEPENDENCY là gì
 *      ! Hôm nay là 20/12/2023, tôi đang học PRS_4, namespace và autoloading
 *      * Đây là 1 câu hỏi rộng, mất time để hiểu hết về nó. Hiểu đơn giản là "phụ thuộc"
 *      TODO : ví dụ sau sẽ giúp b hiểu hơn 
 *          * Tôi có 3 lớp: ClassA, ClassB, ClassC
 *          * ClassA hoạt động phụ thuộc vào ClassB. ClassB hoạt động phụ thuộc vào ClassC
 *          * =>> Nói 1 cách đơn giản là muốn ClassA hoạt động thì ClassB và ClassC phải hoạt động 
 * 
 *              class ClassA{
 *                  protected $ClassB;
 *                  public function __contruct(ClassB $ClassB){
 *                      $this->ClassB = ClassB;
 *                  }
 *                  
 *                      }
 *               class Class{
 *                  protected $ClassC;
 *                      Cấu trúc tương tự như ClassA
 *                      }
 *          * Ví dụ phát hiểu luôn nè: $khoi = new ClassA(ClassB(ClassC)); 
 *              ! Chỉ sử dụng được nhưng method của ClassA, không dùng được method ClassB và ClassC
 */