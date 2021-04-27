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
        public function get_count($table_name){
            $query = "SELECT COUNT(ID) AS COUNT FROM {$table_name}";
            $statement = $this->connection->prepare($query);
            $statement->execute();
            $result = $statement->get_result();
            return $result->fetch_assoc()['COUNT'];
        }
        public function get_id($table_name){
            $count = get_count($table_name);
            
        }
        public function insert_into_membership($param_array){
            $profile_pic_data = addslashes(file_get_contents($param_array['profile_pic']['tmp_name']));
            $profile_pic_type= getimagesize($param_array['profile_pic']['tmp_name'])['mime'];
            $verification_data = addslashes(file_get_contents($param_array['verification_doc']['tmp_name']));
            $verification_type = getimagesize($param_array['verification_doc']['tmp_name'])['mime'];
            $query = "INSERT INTO MEMBERSHIP_REQUESTS VALUES()";
        }
    }
    $db = new DB("localhost","joseph","3057","lms_php");
?>