const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("",function (sub) {
    rl.question("", function (str) {
        console.log(str.indexOf(sub))



        rl.close();
    });
});

