<?php 
/**
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
 *      TODO: 6) "composer update" để cập nhật lại nhưng gì đã cấu hình =>> sau khi chạy thì sinh ra folder "vendor" và file "composer.lock"
 * 
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
 *                                                                                      cho chúng 1 namespace "namespace app;"   
 *                             * TIP: nên đặt trùng nhau tên thư mục - tên namespace của từng file trong folder đó - tên cấu hình trong autoload psr4
 *      ? "Vendor\\Namespace\\": ""
 *              
 */