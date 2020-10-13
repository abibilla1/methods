const func1 = () => {
    return () => {
        return 'Hello'
    }
}

console.log(func1()())


const func = (a) => (b) => {
    return a*b
}

const times = func(5)

console.log(times(3))