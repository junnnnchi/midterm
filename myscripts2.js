    
        submit = function(){
        var state = document.querySelector("#state").value;
        var city = document.querySelector("#city").value;
            localStorage.setItem('st',state);
            localStorage.setItem('ci',city);
            if(state =="" ||city==""){
                alert("At least one field is missing");
            }
            else{
                display();
            }

        }
        
        display = function(){
            
            window.location.href="main.html";
        }
