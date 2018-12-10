function createEmployee(firstName, lastName, age, sex, employed) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        employed: employed
    }
}


var employees = [];
employees.push(createEmployee('John', 'Doe', 31, 'male', true))
employees.push(createEmployee('Amelia', 'Clark', 22, 'female', true))
employees.push(createEmployee('Jack', 'Jones', 21, 'male', false))
employees.push(createEmployee('Olivia', 'Wilde', 31, 'female', true))



function renderEmployees(employees) {
    
    var employeesDOM = document.getElementById('table-container');
    var tableDOM = '<table class="table">\n\
<thead>\n\
<tr>\n\
<th scope="col">Index</th>\n\
<th scope="col">First Name</th>\n\
<th scope="col">Last Name</th>\n\
<th scope="col">Age</th>\n\
<th scope="col">Sex</th>\n\
<th scope="col">Employed</th>\n\
</tr>\n\
</thead>';

    employees.forEach(function (employee) {
      
        tableDOM += '<tr>\n\
<td>' + employee.index + '</td>\n\
<td>' + employee.firstName + '</td>\n\
<td>' + employee.lastName + '</td>\n\
<td>' + employee.age + '</td>\n\
<td>' + employee.sex + '</td>\n\
<td>' + employee.employed + '</td>\n\
</tr>';
    });

    tableDOM += '</tbody>\n\
</table>';

    employeesDOM.innerHTML = tableDOM;
}


renderEmployees(employees);