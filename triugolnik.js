const prompt = require('prompt-sync')();

const a = prompt('a :')
const b = prompt('b :')
const c = prompt('c :')

const trig = () => {
    if(a+b>c && c+a>b && c+b>a) {
        return 'tura'
    }else {
        return 'false'
    }
}

console.log(trig())