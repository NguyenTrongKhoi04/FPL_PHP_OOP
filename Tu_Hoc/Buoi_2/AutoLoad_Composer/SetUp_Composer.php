<?php 
/**
 * * =============================================================
 * *                VÍ DỤ CỤ THỂ Ở FOLDER autoload
 * * =============================================================
 * 
 * * Cài đặt Composer trên máy
 *      TODO: lên trang https://getcomposer.org/ để instanll về và giải nén. Lưu ý cần phải cài php trước (xampp, laragon,...) 
 *          ! hệ điều hành Linux và MacOS sẽ làm thêm 1 số thao tác nữa
 * 
 * 
 * * Cài Composer trong dự án 
 *      TODO: 1) Mở cmd Win hoặc terminal vscode rồi gõ "composer -v" để kiểm tra version composer
 *                  ! nếu được báo là không tìm thấy =>> cài lại composer (xóa đi, cài lại)
 *      TODO: 2) "cd <folder muốn chứa composer trong dự án>" (ví dụ: cd autoload) 
 *                  "cd" =>> Change Directory (thay đổi nơi chứa)
 *      TODO: 3) "composer init" or "composer create-project" để tạo project composer cho dự án 
 *          
 *      TODO: 4) Sau đó điền các thông tin dưới đây là ví dụ
 *              Package name (<vendor>/<name>) [admin/autoload]: nguyen_trong_khoi/autoload 
 *              Description []: autoload voi composer
 *              Package Type (e.g. library, project, metapackage, composer-plugin) []: library
 *              Would you like to define your dependencies (require) interactively [yes]? y
 *              Would you like to define your dev dependencies (require-dev) interactively [yes]? y
 *              Add PSR-4 autoload mapping? Maps namespace "NguyenTrongKhoi\Autoload" to the entered relative path. [src/, n to skip]: n
 *              Do you confirm generation [yes]? y
 *              ! Những gì cần điền đã đề cập ở trên, các mục ko có trong phần trên =>> "n" hoặc "nhấn enter"
 *              * Sau đó bạn mở folder bạn chọn ở dòng "cd ..." (ví dụ trong trường hợp này là folder "autoload") 
 *              * bạn sẽ thấy file composer.json, nó chứa các thông tin cơ bản của COMPOSER và phần "require" sẽ chứa url đến các thư viện (PHPMailer,...)
 *      TODO: 5) Thêm autoload vào file composer.json. Ta sẽ cấu hình lại phần "prs-4". Phần này rất quan trọng, tôi sẽ viết chi tiết ở phần dưới 
 *                      "autoload": {
 *                           "psr-4": {
 *                               để trống phần này
 *                           }
 *                       }
 *      TODO: 6) "composer dump-autoload" hoặc "composer update" để cập nhật lại nhưng gì đã cấu hình =>> sau khi chạy thì sinh ra folder "vendor" và file "composer.lock"
 *                 ! tất cả các thư viện mà bạn muốn require thì sẽ ở trong vendor
 * 
 * * Cấu Hình autoload trong composer
 *      TODO: Khi lên documention ở trang web để tải composer, ta có code mẫu sau (gõ psr-4 ở phần tìm kiếm -> ctrl F "autoload")
 *            "autoload": {
 *               "psr-4": {
 *                   "Monolog\\": "src/",
 *                   "Vendor\\Namespace\\": ""
 *               }
 *           }
 *          ! 2 nhân vật chính ở đây là "Monolog\\": "src/" và "Vendor\\Namespace\\": ""
 *      ? "Monolog\\": "src/" là gì  
 *             "Monolog\\" =>> đây là namespace của FOLDER đó
 *                             tức là tên nó phải trùng với tên folder chứa các file có class bạn muốn dùng
 *                             TODO: Trong folder autoload chứa folder app mà app chứa các file như Home.php, Product.php (file chứa các class)
 *                             TODO: Ở tình huống này, ta sẽ đặt "app\\" : "app/" 
 *                                  app\\ =>> namespace của "FOLDER app", muốn sử dụng các file chứa class trong folder này thì ta phải 
 *                                                                                     cho chúng 1 namespace "namespace app;"   
 *              ! Nếu muốn 1 "Monolog" làm việc với nhiều folder =>> ví dụ: "app\\":["app/","global/"]
 *                             * TIP: nên đặt trùng nhau tên thư mục - tên namespace của từng file trong folder đó - tên cấu hình trong autoload psr4
 *      ? "Vendor\\Namespace\\": "" là sao
 *              * "Vendor\\Namespace\\" là gì
 *                      hiểu đơn giản thì nó tương tự như "namespace 1 cấp (src/)" trên kia nhưng tên nó dài hơn
 *                      cái này là đặt tên, TÊN THAY THẾ cho ĐƯỜNG DẪN SAU DẤU 2 CHẤM
 *      ? Bạn còn có thể chèn thêm vào sao psr-4 =>> "files": ["helpers/functions.php"]   
 * * Cấu hình require 
 *       TODO: Bạn ghi thư viện và version của thư viện đó 
 *                 "require": {
 *                      "phpmailer/phpmailer":"^6.9.1",
 *                      "php-pagination/php-pagination" : "*" 
 *                  }
 *                      ! "*" ở đây nghĩa là phiên bản bất kỳ
 * * Global namespace
 *       tức là namespace cục bộ của 1 folder nào đó, nó được viết trong psr-4 của autoload
 *       khi bạn dùng class mà không khai báo namespace =>> dùng đến namespace cục bộ
 *          TODO: "" : "global/":
 * ! ========================== 21/12/2023: Theo như tôi hiểu thì đặt tên class và file trùng nhau thì composer mới hoạt động được ==============================
 * * ================ Ví Dụ Tổng Thể của file composer.json - lấy từ ví dụ ở folder autoload ==================================
 *                     {
 *               "name": "nguyen_trong_khoi/autoload",
 *               "description": "autoload voi composer",
 *               "type": "library",
 *               "autoload": {
 *                   "psr-4": {
 *                       "app\\" : "app/",
 *                       "app_2\\namespace_app_2\\": "double_namespace/",
 *                       "" : "global/"
 *                   },
 *                   "files": ["helpers/functions.php"]
 *               },
 *               "require": {
 *                   "phpmailer/phpmailer":"^6.9.1",
 *                   "php-pagination/php-pagination" : "*" 
 *               }
 *           }
 * * ==========================================================================================================================
 */