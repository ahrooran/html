function login() {
    var u = document.getElementById("inputUsername").value;
    var p = document.getElementById("inputPassword").value;
  
    var req = new XMLHttpRequest();
    req.open("GET", "https://us-central1-qac-sandbox.cloudfunctions.net/getUsers", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.withCredentials = true;
    req.onreadystatechange = function() {
      if (req.readyState == XMLHttpRequest.DONE) {
          console.log("yeh");
        if (req.status == 200) {        
            console.log("yeh");
 
        } 
        else if (req.status == 401) {

          console.log("error");
        }
      }
    }
    req.send(JSON.stringify({username: u, password: p}));
  }





  


       //   document.getElementById("log_form").style.display = 'none';
        //   document.getElementById("logged_user").style.display = 'block';
        //   document.getElementById("logged_user").textContent = document.getElementById("user_id").value;
        //   document.getElementById("logout_button").style.display = 'block';
        //   hide_error();


        //   document.getElementById('error_text').textContent = "User/password is incorrect";
        //   document.getElementById('error').style.display="";

































// function login(){
    
//     const request = new XMLHttpRequest();
//     request.onload = () =>{
//         console.log(u, e, p);
//         //console.log('okay', request);
//     }
  
  
//     const u = document.getElementById('inputUsername').value;
//     const e = document.getElementById('inputEmail').value;
//     const p = document.getElementById('inputPassword').value;
//     request.open('GET','https://us-central1-qac-sandbox.cloudfunctions.net/setUser');
//     request.setRequestHeader('Content-Type', 'application/json');
//     request.send(JSON.stringify({username: u, password: p, email: e }));
//     return false;

// }



    // const safeData = {};
    // for(let k in data){
        //     if(k){
            //         safeData[k] = data[k];
    //     }
    // }



// register();





        

        // request.send(JSON.stringify({username:"u", password:"p", email:"e"}));
        // console.log('sent');
        // if (userName) {
        //     //const user = JSON.parse(userName);
        //     const requestUser = request.data.userName;
        //     if (
        //         user.email === requestUser.email &&
        //         user.password === requestUser.password
        //     ) {
        //         return request.data;
        //     } else {
        //         response(401, { message: "Unauthorized" }, {}, "unauthorized");
        //     }
        // }
        // response(401, { message: "Unauthorized" }, {}, "unauthorized");
            
        // };
        //const parsedData = JSON.parse(request.responseText);
        //displayShd(parsedData);
        //console.log( );
        //sessionStorage.setItem('shdata',JSON.stringify(data));
        // const container = document.getElementById("squadName").innerHTML =  'Squad: ' + parsedData.squadName;
        // document.getElementById("homeTown").innerHTML = 'Town: ' + parsedData.homeTown;
        // document.getElementById("formed").innerHTML = 'EST: ' + parsedData.formed;
        // document.getElementById("secretBase").innerHTML = 'Base: ' + parsedData.secretBase;
        

    
    
    //x={inputUsername:"inputUsername"}

     
    

// request.send()
// login();