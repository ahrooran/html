function register(){
    
    const request = new XMLHttpRequest();
    request.onload = () =>{
        
        //console.log('okay', request);
    }
      

    const cp = document.getElementById("inputConfirmPassword").value;  
    const u = document.getElementById('inputUsername').value;
    const e = document.getElementById('inputEmail').value;
    const p = document.getElementById('inputPassword').value;
    
    validatePassword()
    
    

  
function validatePassword(){
    if(p.value == cp.value) {
        request.open('POST','https://us-central1-qac-sandbox.cloudfunctions.net/setUser');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: u, password: p, email: e }));
        console.log("Passwords Match");
        console.log('--------------------')
        console.log(u, e, p);
        let a = 'first';
        let b = 'second';
        let c = a;
        let a = b;
        let c = b;
        console.log(a, b);

        alert("Regstration Complete");
        return false;
    }
    else{
        alert("Password does not match, Please try again.");
    }
}

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

     
}
