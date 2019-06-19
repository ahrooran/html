

const userData = JSON.parse(sessionStorage.getItem('userData'));

// const  data = document.getElementById('data')

// data.innerText = userData.firstName + ' ' + userData.lastName;


function show(){
    const container = document.getElementById("demo");
    for (let x in userData) {
        const y = document.createElement('p');
        y.innerText = x + ': ' + userData[x];
        container.append(y);
    }
}
















// function showObject(userData) {
//     var result = "";
//     for (var p in userData) {
//       if( userData.hasOwnProperty(p) ) {
//         result += p + " , " + userData[p] + "\n";
//       } 
//     }              
//     document.getElementById("demo").innerHTML = result;
//     return result;
// }

// if (userData.hasOwnProperty(key)) {
//     document.getElementById("demo").innerHTML = (key + ": " + userData[key]);
// }

// const container = document.getElementById();
// for(let key in userData){

// }
// function show(){

//     document.getElementById("demo").innerHTML = sessionStorage.getItem(JSON.parse(sessionStorage.getItem('userData')));
// }
