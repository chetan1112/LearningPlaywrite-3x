
let login = 3

for( let i=0; i<login; i++){
    if(login === 1){
        console.log ("login attempt" + i)
    }
    else{
        
    }
    
}

// Leap-year input handling: optional CLI arg or stdin
const fs = require('fs');
function checkLeap(year){
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return 'YES';
    }
    return 'NO';
}

const argYear = process.argv[2];
if (argYear) {
    const y = parseInt(argYear, 10);
    if (!isNaN(y)) console.log(checkLeap(y));
}
else {
    try {
        const data = fs.readFileSync(0, 'utf8').trim();
        if (data) {
            const y = parseInt(data, 10);
            if (!isNaN(y)) console.log(checkLeap(y));
        }
    } catch (e) {
        // no stdin input, ignore
    }
}