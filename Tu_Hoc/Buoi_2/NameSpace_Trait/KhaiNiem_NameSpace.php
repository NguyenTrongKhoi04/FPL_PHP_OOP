<?php

/**
 * ? Khi có 2 file trùng tên class thì khi include sẽ bị lỗi =>> Namespace giải quyết vẫn đề này
 * 
 * * NameSpace là tên thay thế cho 1 hoặc nhiều class
 *      Nếu nhiều class thì khi sử dụng "use" sẽ phải gọi cụ thể class đó 
 * 
 * * Có 2 cách khai Báo Namespace 
 *      -> Namespace luôn được đặt ở đầu file
 *      -> tạo đôi tượng bằng từ khóa "new" (VD: $a = new tenNamespace\tenClass() ) 
 *                      ! tenClass() = tenClass; ở dưới sẽ giải thích sự khác nhau của việc có và không '()' khi tạo đối tượng                     
 *      -> sử dụng từ khóa use
 *              + "as" là alias (thay thế) cho namespace cụ thể 
 *                      TODO: use tenNamespace\tenClass as Alias_TenThayThe 
 *              + use tenNamespace\tenClass sau đó tạo đối tượng như trên kia
 *                    ! Thứ tự viết use Namespace như sau 
 *                          NameSpace file hiện tại
 *                          include, require 
 *                          use CacNamespace_Cua_FileInclude
 *                    ? Nếu chỉ đơn giản như vậy thì dùng luôn cái cách đầu cho nhanh 
 *                      TODO: khi 2 file trùng class thì có 2 trường hợp sau 
 *                      TODO     + chỉ sử dụng Namespace ở 1 file còn file kia không dùng j đến 
 *                      TODO     + Sử dụng Namspace ở cả 2 file 
 *                           => khi gọi thì phải đặt tên thay thế bằng Alias cho cả 2 class đó
 *                          ? ví dụ phát hiểu luôn nè, 2 file dưới đây có cùng class là ConNguoi
 *                              File "File_NameSpace_2.php"
 *                                      class ConNguoi{
 *                                            private $hoten;
 *                                            public function getHoTen(): string{
 *                                                return 2; 
 *                                            }
 *                                        }     
 *                               File "File_NameSpace_1.php"
 *                                       namespace LopConnguoi;
 *                                       class ConNguoi{
 *                                           private $hoten;
 *                                           private $diem;
 *                                           public function __construct($name)
 *                                           {
 *                                               $this->hoten = $name;        
 *                                           }
 *                                           public function getHoTen(){
 *                                               return $this->hoten;
 *                                           }
 *                                       }
 *                                 File Run
 *                                      include_once 'File_NameSpace_2.php';
 *                                      include_once 'File_NameSpace_1.php';
 *                                    TODO: trường hợp chỉ 1 file có namespace (giống trên) 
 *                                      use LopConnguoi2\ConNguoi as Alias_LopConNguoi2;
 *                                      use ConNguoi as Alias_1;  
 *                                    TODO: 2 file đều có namespace 
 *                                      use LopConnguoi1\ConNguoi as ConNguoi_LopConNguoi1;
 *                                      use LopConNguoi2\ConNguoi as ConNguoi_LopConNguoi2;
 *                                    ! TIPS ở đây là khi gọi 2 class trùng tên thì nên đặt Alias cho chúng 
 *                  
 * ? Sự khác nhau giữa có và không "()" => nó giống như truyền tham số ở hàm 
 *     Vẫn ở ví dụ File "File_NameSpace_1.php" ở trên
 *          TODO: $a = new LopConNguoi\ConNguoi('NguyenTrongKhoi');
 *                  =>> tức là lúc này $name = NguyenTrongKhoi mà $this->hoten = $name =>> thuộc tính $hoten = NguyenTrongKhoi
 *                      ! chỉ khi function __contruct có tham số truyền vào thì mới có thể "new Class()"
 */

 $a =  $_SERVER['DOCUMENT_ROOT'];
 $b =  $_SERVER['HTTP_HOST'];
 $c = __DIR__;
 /**
  * * TỰ động biên dịch đường dẫn 
  * * Với hệ điều hành Linux, MacOs thì dùng dấu "/", Win thì ngược lại "\"
  * * Dùng để đảm bảo đúng đường dẫn khi chạy trên nhiều hệ điều hành khác nhau
  * TODO: Trên Win (khoi\hello\index.php) <=> Linux, MacOs (khoi/hello/index.php)
  *
  * ! echo "/" =>> lỗi vậy nên muốn in ra "/" thì phải viết là "//" =>> echo "//"
  */
 $d = DIRECTORY_SEPARATOR;
 
 var_dump($a);PHP_EOL;echo "<br>";
 var_dump($b); echo "<br>";
var_dump($c);PHP_EOL;echo "<br>";
var_dump($d);
