let ID = document.getElementById('studentid');
let Sname = document.getElementById('StudentName');
let Email = document.getElementById('Email');
let AbsDay = document.getElementById('AbsenceDays');
let Task = document.getElementById('Tasks');
let Total = document.getElementById('total');
let Submit = document.getElementById('Submit');


let Amro = 'Create'
// console.log(ID,Sname,Education,Email,AbsDay,Task,Submit);


//local & ADD

let Data;

if (localStorage.AllData !=null){
    Data = JSON.parse(localStorage.AllData)
} else {
    Data = [];
}

 Submit.onclick =function(){
    event.preventDefault()

    let Info = {
        ID:ID.value,
        Sname:Sname.value,
        Email:Email.value,
        AbsDay:AbsDay.value,
        Task:Task.value,
        // Total:Total.innerHTML,
    }    
    Data.push(Info)
    localStorage.setItem('AllData' , JSON.stringify(Data))
    // console.log(Data);


    ClearData()
    ShowData()
}

//Clear 
function ClearData() {
        ID.value= '';
        Sname.value= '';
        Email.value= '';
        AbsDay.value= '';
        Task.value= '';
        // Total.innerHTML= '';
}


//Read 

function ShowData() {

let table = '';

for ( let i=1; i<Data.length; i++ ) 
   //<td>${i}</td>
    table += `
    <tr>
    
    <td>${Data[i].ID}</td>
    <td>${Data[i].Sname}</td>
    <td>${Data[i].Email}</td>
    <td>${Data[i].AbsDay}</td>
    <td>${Data[i].Task}</td>
    <td> <button onclick="UpdateData(${i})" id="Update">Edit</button></td>
    <td> <button onclick="DeletData(${i})" id="Delete">Delete</button></td>
    </tr>
`
document.getElementById('tbody').innerHTML = table;

// let DeleteBtn = document.getElementById('DeletAll');

// if (Data.length > 0 ){

//     DeleteBtn.innerHTML = `
//     <button onclick="DeleteAll()">Delete All</button>
//    `
// } 
   
//    else{
//     DeleteBtn.innerHTML = '';
// }
}
ShowData()



//Delet

function DeletData (i) {
console.log(i)

Data.splice(i,1);
localStorage.AllData = JSON.stringify(Data);
ShowData()
}


//DeletAll , Clear

function DeleteAll() {
    localStorage.clear();
    Data.splice(0);
    ShowData()
}



//Update
function UpdateData(i) {
   



    ID.value = Data[i].ID;
    Sname.value = Data[i].Sname;
    Email.value = Data[i].Email;
    AbsDay.value = Data[i].AbsDay;
    Task.value = Data[i].Task;
    Submit.innerHTML = 'Update';
    // Amro = 'Update'
    // console.log(i)

    scroll ({
        top:0,
        behavior:'smooth'
    })
}