const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readLine.on('line',word1=>{
    readLine.on('line',word2=>{

      let a1 = word1.split('');
      let a2 = a1.sort().join();
      let b1 = word2.split('');
      let b2 = b1.sort().join();
        if(a2 == b2) {
            console.log('true')
        }else {
            console.log('false')
        }
        readLine.close()
    })
});