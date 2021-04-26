<?php 
    declare(strict_types=1);
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
        public function check_username($email,$admin){
            $query = "SELECT EMAIL FROM ADMIN_DETAILS WHERE EMAIL=?";
            $statement = $this->connection->prepare($query);
            $statement->bind_param("s",$email_value);
            if($admin){
                $table_name = "ADMIN_DETAILS";
            }
            else{
                $table_name = "USER_DETAILS";
            }
            $email_value = $email;
            $statement->execute();
            $result = $statement->get_result();
            $correct_email = $result->fetch_assoc()['EMAIL'];
            if($correct_email===$email){
                return true;
            }
            return false;
        }
    }
?>