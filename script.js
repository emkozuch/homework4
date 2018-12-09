var employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        sex: 'male',
        employed: true
    },
    {
        firstName: 'Amelia',
        lastName: 'Clark',
        age: 22,
        sex: 'female',
        employed: true
    },
    {
        firstName: 'Jack',
        lastName: 'Jones',
        age: 21,
        sex: 'male',
        employed: false
    },
    {
        firstName: 'Olivia',
        lastName: 'Wilde',
        age: 31,
        sex: 'female',
        employed: true
    },
]

    function createEmployee(firstName, lastName, age, sex, employed){
        return{
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        employed: employed,

    };
}