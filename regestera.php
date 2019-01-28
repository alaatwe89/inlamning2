<?php


    session_start();

    if (isset($_POST['sign-in'])){

        include('inc.php');

        $Firstname= $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $Epostadress = $_POST['email'];
        $Password= $_POST['password'];
        $Type = $_POST['typeRadio'];
        $Acceptera = $_POST['accept'];
        //$sql = "INSERT INTO person (FirstName, LastName, email , password, type, accept ) VALUES ('".$Firstname."' ,'".$lastname ."','". $Epostadress."'," .$Password .", '". $Type ."', 1)";
          
        
        
    }
    header("Location: thanks.html");
?>





