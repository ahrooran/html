const formdata = {};

function subFunction(formE1){

    for(let control of formE1){
        formdata[control.id] = control.value;
        

        // console.log(control);
        // control.id;
        // control.value;
    }
    sessionStorage.setItem('userData',JSON.stringify(formdata));

    console.log("submit WORKED!!!");
    console.log(form, formdata);

    form.reset();
    nextPage();

    return false;
    
}
function message() {
    alert("Submission Sent");
}


function nextPage(){
    window.location = "nextpage.html";

}



