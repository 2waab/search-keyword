const fs = require('fs');
let keyword = process.argv[2];
let arr = [];
fs.readFile('./story.txt', 'utf-8', (err, data) => {
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