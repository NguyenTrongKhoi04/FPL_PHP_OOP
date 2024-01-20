<?php
namespace APP\Models;

use PDO;

class BaseModel
{
    protected $conn;
    protected $sqlBuilder = "";
    protected $tableName;
    public function __construct()
    {
        $host = HOSTNAME;
        $dbname = DBNAME;
        $username = USERNAME;
        $password = PASSWORD;
        try {
            $this->conn = new PDO("mysql:host=$host;dbname=$dbname; charset=utf8", $username, $password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $e) {
            echo "Lỗi kết nối dữ liệu" . $e->getMessage();
        }
    }
    //Phương thức lấy ra toàn bộ dữ liệu của bảng
    public static function all()
    {
        $model = new static;
        $model->sqlBuilder = "SELECT * FROM $model->tableName";
        //Chuẩn bị
        $stmt = $model->conn->prepare($model->sqlBuilder);
        //thực thi
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

    //Phương thức find: dùng để tìm dữ liệu theo id
    public static function find($id)
    {
        $model = new static;
        $model->sqlBuilder = "SELECT * FROM $model->tableName WHERE id=:id";
        //Chuẩn bị
        $stmt = $model->conn->prepare($model->sqlBuilder);
        //thực thi
        $stmt->execute(['id' => $id]);
        //lẫy dữ liệu
        $result = $stmt->fetchAll(PDO::FETCH_CLASS);
        if ($result) {
            return $result[0]; //làm gọn mảng khi lấy
        }
        return $result;
    }

    public static function where($column, $codition, $value)
    {
        $model = new static;
        $model->sqlBuilder = "SELECT * FROM $model->tableName WHERE `$column` $codition '$value'";
        return $model;
    }
    //thêm điều kiện and cho hàm trên
    public function andWhere($column, $codition, $value)
    {
        $this->sqlBuilder .= "AND `$column` $codition '$value'";
        return $this;
    }
    public function orWhere($column, $codition, $value)
    {
        $this->sqlBuilder .= "OR `$column` $codition '$value'";
        return $this;
    }
    //thực thi câu lệnh điều kiện
    public function get()
    {
        $stmt = $this->conn->prepare($this->sqlBuilder);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_CLASS);
    }
    
    public static function delete($id){
        $model = new static;
        $model->sqlBuilder = "DELETE FROM $model->tableName WHERE id = :id ";
        $stmt = $model -> conn->prepare($model->sqlBuilder);
        $stmt->execute(['id' => $id]);
    }

    // TODO: Insert với parameters
    public function insert($data){
        $values = " VALUES( ";
        $this->sqlBuilder = "INSERT  INTO $this->tableName(";
        foreach($data as $column => $value){
            $this->sqlBuilder .= "'{$column}', "; //? sao để ngoặc nhọn lại lỗi         
            $values .= " :$column, ";
        }
        // xóa dấu phẩy cách 
        $this->sqlBuilder = rtrim($this->sqlBuilder, ', ');
        $values = rtrim($values, ", ");

        // Nối chuỗi sql
        $this->sqlBuilder .= ")" . $values ." ) ";
        // echo $this->sqlBuilder;

        $stmt = $this->conn->prepare($this->sqlBuilder);
        $stmt->execute($data);

        // return $this->conn-> lastInsertId();
        return $this;
    }
}