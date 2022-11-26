function getData(){
    let value;
    let Email = document.getElementById(`email`).value;
    let Password = document.getElementById(`password`).value;


    localStorage.setItem(`email`,email);
    localStorage.setItem(`password`,password);


    document.getElementById(`email`,email).value="";
    document.getElementById(`password`,password).value="";

}
function regData(){
    let value;
    let Username=document.getElementById(`username`).value;
    let Email=document.getElementById(`email`).value;
    let password=document.getElementById(`password`).value;

    localStorage.setItem(`username`,username);
    localStorage.setItem(`email`,email);


    document.getElementById(`username`,username).value="";
    document.getElementById(`email`,email).value="";
    document.getElementById(`password`,password).value="";



}