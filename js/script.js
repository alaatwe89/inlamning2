$(function () {
    var radioChecked = false;

    // check form inputs (type: text, password, email) on blur
    $("form input").blur(function() {
    
        if( $(this).attr("type") === "radio" ) {
            $("#typeRadio > div > input").each(function() {

                if( $(this).prop("checked") ) {
                    radioChecked = true;
                }

                if(radioChecked) {
                    $("#typeRadio > div > input").each( function() {
                        $(this).removeClass("is-invalid");
                    })
                } else {
                    $("#typeRadio > div > input").each( function() {
                        $(this).addClass("is-invalid");
                    })                   
                }

            });
        }




        // validate if value is empty and is required
        if( !$(this).val() && $(this).prop("required") ) {
            setInvalidClass($(this));
        } 
        // validate if value is empty and is not required     
        if( !$(this).val() && !$(this).prop("required") ) {
            setValidClass($(this));          
        }

    });
     // check form selects on blur
     $("form select").blur(function() {
        
        // validate if value is empty and is required
        if( !$(this).val() && $(this).prop("required") ) {
            setInvalidClass($(this));
        } 
        // validate if value is empty and is not required     
        if( !$(this).val() && !$(this).prop("required") ) {
            setValidClass($(this));          
        }

    });
    $("form input").change(function() {
     
        if( $(this).val() && $(this).prop("required") ) {

            if( $(this).val().length < 2 ) {
                setInvalidClass($(this));
            
            } else if( $(this).attr("type") === "email" && !validateEmail( $(this).val() ) ) {
                setInvalidClass($(this));              
                            
            } else if( $(this).attr("type") === "password" && $(this).val().length < 8 ) {
                setInvalidClass($(this));              
                            
            } else if( $(this).attr("type") === "password" && $(this).attr("id") === "confirmPassword" && !confirmPassword($("#password").val(), $(this).val()) ) {
                setInvalidClass($(this));
                $("#confirmPasswordInvalidFeedback").html("The password must match the above password");              
            }      
            
             else if( $(this).attr("type") === "radio" ) {
                $("#typeRadio > div > input").each(function() {
                    var checked = false;

                    if( $(this).prop("checked") ) {
                        checked = true;
                    }

                    if(checked) {
                        $("#typeRadio > div > input").each(function() {
                            $(this).removeClass("is-invalid");
                        });
                    }
                });
                            
            } else {
                setValidClass($(this));                 
            }

        }

    });
    $("form select").change(function() {
        var value = $($(this).attr("id") + " option:selected").val();
      
        if(value === "") {
            setInvalidClass($(this)); 
        } else {
            setValidClass($(this)); 
        }

    });
    


    /*$("form textarea").blur(function() {      
        var textarea = $("#validate-textarea").val();
   
        if (textarea === ""){
            console.log(1);
            setInvalidClass($(this)); 
            return false;  

            
        }else{
            console.log(2);
            setValidClass($(this));
          
            return true;
        }
    });*/
    
      

        $("form textarea").change(function() {
       
            if( $("#validate-textarea").val().length < 6 || $("#validate-textarea").val().length > 30 ) {
                setInvalidClass($(this));   
               
            }
            else {
                setValidClass($(this));   
                          
            } 
        });

    

    function setValidClass($input) {
        $input.addClass("is-valid");
        $input.removeClass("is-invalid");           
    }

    function setInvalidClass($input) {
        $input.addClass("is-invalid");
        $input.removeClass("is-valid");           
    }
    function validateEmail($email) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/.test($email);
    }

    function confirmPassword($password, $confirmPassword) {
        return ($password === $confirmPassword) ? true : false;
    }

    window.addEventListener("load", function() {
        var forms = document.getElementsByClassName("f-validation");
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                if(form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);



 
});