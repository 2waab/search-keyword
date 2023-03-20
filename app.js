const fs = require('fs');
let keyword = process.argv[3];
let arr = [];
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.log('Error!');
    } else {
        arr = data.split(".");
        arr.forEach((el) => {
            if (el.includes(keyword)) {
                console.log(el);
            } 
        });
    };
});
