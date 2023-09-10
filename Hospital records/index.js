// fill in javascript code here

// fill in javascript code here
let myForm = document.querySelector('form');

myForm.addEventListener('submit' , function(e){
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let DoctorID = document.getElementById('docID').value;
    let Specialization = document.getElementById('dept').value;
    let Experience = document.getElementById('exp').value;
    let Email = document.getElementById('email').value;
    let Mobile = document.getElementById('mbl').value;

    // console.log(name,employeeID,department,experience,email,mobile)

    let Role;
    if(Experience > 5 ){
        Role = "Senior";
    }
    else if(Experience >= 2 && Experience <= 5  ){
        Role = "Junior";
    }
    else{
        Role = "Trainee";
    }
    
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");

    let data = [Name,DoctorID,Specialization,Experience,Email,Mobile,Role]

    data.forEach((ele)=>{

        let td = document.createElement("td");
        td.innerText = ele
        row.appendChild(td);

    })

    tbody.appendChild(row);

    let deleteTd = document.createElement('td');
    let deletBtn = document.createElement('button');
    deletBtn.innerText = "Delete";

    deletBtn.addEventListener('click',function(){
        tbody.removeChild(row);
    })

    deleteTd.appendChild(deletBtn);
    row.appendChild(deleteTd);


})


