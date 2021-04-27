<?php 
    require "strict.php";
    class DB{
        private $db_server;
        private $db_user;
        private $db_password;
        private $db_name;
        private $connection;
        public function __construct($serv,$user,$pass,$db_name){
            $this->db_server = $serv;
            $this->db_user = $user;
            $this->db_password = $pass;
            $this->db_name = $db_name;
            $this->connection = new mysqli($serv,$user,$pass,$db_name);
            if($this->connection->connect_error){
                echo "DB error : {$this->connection->connect_error}";
            }
        }
        public function check_email($email,$admin=true){
            $table_name = null;
            if($admin){
                $table_name = "ADMIN_DETAILS";
            }
            else{
                $table_name = "USER_DETAILS";
            }
            $query = "SELECT EMAIL FROM {$table_name} WHERE EMAIL=?";
            $statement = $this->connection->prepare($query);
            $statement->bind_param("s",$email_value);
            $email_value = $email;
            $statement->execute();
            $result = $statement->get_result();
            $correct_email = $result->fetch_assoc()['EMAIL'];
            if($correct_email===$email){
                return true;
            }
            else{
                return 0;
            }
        }
        public function check_password($email,$password,$admin=true){
            $table_name = null;
            if($admin){
                $table_name = "ADMIN_DETAILS";
            }
            else{
                $table_name = "USER_DETAILS";
            }
            $query = "SELECT EMAIL,CAST(AES_DECRYPT(PASSWORD,'key') AS CHAR) AS PASSWORD FROM {$table_name} WHERE EMAIL=?";
            $statement = $this->connection->prepare($query);
            $statement->bind_param("s",$email_val);
            $email_val = $email;
            $statement->execute();
            $result = $statement->get_result();
            $correct_row = $result->fetch_assoc();
            if($correct_row['EMAIL']===$email&&$correct_row['PASSWORD']===$password){
                return true;
            }
            else{
                return 0;
            }
        }
        public function insert_into_table($table_name,$value_array,$type_string){
            $insert_query = "INSERT INTO {$table_name} VALUES(";
            $no_of_values = count($value_array);
            for($i=1;$i<=$no_of_values;$i++){
                $insert_query.="?";
                if($i<$no_of_values){
                    $insert_query.=",";
                }
            }
            $insert_query.=")";
            $statement = $this->connection->prepare($insert_query);
            $statement->bind_param($type_string,...$value_array);
            return $statement->execute();
        }
        public function get_count($table_name){
            $query = "SELECT COUNT(ID) AS COUNT FROM {$table_name}";
            $statement = $this->connection->prepare($query);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_assoc()['COUNT'];
        }
        public function create_id($table_name){
            $count = $this->get_count($table_name);
            $count++;
            return "{$table_name[0]}_{$count}";
        }
        public function insert_into_membership(&$param_array){
            
            $id = $this->create_id("MEMBERSHIP_REQUESTS");
        }
    }
    $db = new DB("localhost","joseph","3057","LMS_PHP");
?>