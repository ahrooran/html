function fetchsh(){

    const request = new XMLHttpRequest();
    request.onload = () => {
        const parsedData = JSON.parse(request.responseText);
        //displayShd(parsedData);
        console.log('DATA:', parsedData);
        //sessionStorage.setItem('shdata',JSON.stringify(data));
        const container = document.getElementById("squadName").innerHTML =  'Squad: ' + parsedData.squadName;
        document.getElementById("homeTown").innerHTML = 'Town: ' + parsedData.homeTown;
        document.getElementById("formed").innerHTML = 'EST: ' + parsedData.formed;
        document.getElementById("secretBase").innerHTML = 'Base: ' + parsedData.secretBase;
    
        
    };
    request.open('GET','https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');

    request.send();
    console.log('sent');

    // function generateMember(member, id){

    // }
    

}

function members(){
    
    const request = new XMLHttpRequest();
    request.onload = () => {
        const parsedData = JSON.parse(request.responseText);
        //displayShd(parsedData);
        console.log('DATA:', parsedData.members[0].name);
        
        // members.foreach(output);
        // function output(){
        //     document.getElementById("members").innerHTML = parseData.members;
        // }
        const memberscontainer = document.getElementById("members")
        for(let member of parsedData.members){
            const membernameEl = document.createElement('h2');
            membernameEl.innerText = member.name;
            membernameEl.className='';
            memberscontainer.append(membernameEl);
        }



        // for(let i = 0; i < parsedData.members.length; i++){
        //     const container = document.getElementById("members").innerHTML = 'Member: ' + parsedData.members[i].name;
        //     console.log(parsedData.members[i]);
            
         
        //  }


        //const container = document.getElementById("members").innerHTML = 'Member: ' + parsedData.members[].name;
    };
    request.open('GET','https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');

    request.send();
    console.log('sent');
}





// const shdata = JSON.parse(sessionStorage.getItem('shdata'));

// const sdata = {};


// function show(){
    
//     for (let x in shdata) {
//         const y = document.createElement('p');
//         y.innerText = shdata[x];
//         container.append(y);
//     }
// }