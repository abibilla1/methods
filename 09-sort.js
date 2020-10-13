const user = [
    {name: 'Asan',age: 22},
    {name: 'Masan',age: 23},
    {name: 'Hasan',age: 24},
    {name: 'Aman',age: 27},
    {name: 'Art',age: 26},
    {name: 'Asa',age: 27},
    {name: 'Asi',age: 22},
    {name: 'Masan',age: 29},
]

user.sort((item,itemSecond) => {
    if(item.age > itemSecond.age) {
        return 1
    }else if(item.age < itemSecond.age) {
        return -1
    }else {
        return 0
    }
})

console.log(user)