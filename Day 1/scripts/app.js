/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table class="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Coloana1</th><th>Coloana2</th></tr>';

    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td>' +
            '<td>'+employeesList[i].lastName+'</td>' +
            '<td>'+employeesList[i].phone+'</td>' +
            '<td>'+employeesList[i].salary+'</td>' +
            '<td><button type="button" onclick="vizualizareAlert()" class="btn btndefault"> Vizualizare </button></td>' +
            '<td><button type="button" onclick="deleteRow()" class="btn btndefault"> Stergere </button></td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone,
        salary));
    showList();
}
function salaryTotal() {
    var total = 0;
    for (var i in employeesList) {
        total += employeesList[i].salary;
    }
    var container = document.getElementById('container1');
    container.innerHTML = total;
}
function deleteLastEmployee() {
    employeesList.pop();
    showList();
}
function vizualizareAlert() {
    for (var i in employeesList) {
         alert(employeesList[i].firstName);
    }
}