const arr = [12,3,4,566,7,235,7,32]

const ans=arr.reduce((ans,item) => {
    return item+ans;
})

console.log(ans)

const max = arr.reduce((ans,item) => {
    if(ans>item) {
        return ans
    } else {
        return item
    }
})

console.log(max)

const min = arr.reduce((ans,item) => {
    if(ans<item) {
        return ans
    } else {
        return item
    }
})

console.log(min)