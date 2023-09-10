// fill in javascript code here
let myForm = document.querySelector('form');

myForm.addEventListener('submit' , function(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let employeeID = document.getElementById('employeeID').value;
    let department = document.getElementById('department').value;
    let experience = document.getElementById('exp').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mbl').value;

    // console.log(name,employeeID,department,experience,email,mobile)

    let role;
    if(experience > 5 ){
        role = "Senior";
    }
    else if(experience >= 2 && experience <= 5  ){
        role = "Junior";
    }
    else{
        role = "Fresher";
    }
    
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");

    let data = [name,employeeID,department,experience, email,mobile,role]

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