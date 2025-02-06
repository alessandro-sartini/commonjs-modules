const name = require('./names.js')
const hobbies = require('./hobbies.js')

// console.log(fullName("Alessandro", "Sartini"));
// console.log(hobbies("mangiare", "dormire", "salutare"));
function people() {
   
    return {
        
        fullName:name("Alessandro", "Sartini"),
        hobbies:hobbies("mangiare", "dormire", "salutare")
        
        
    };
}

console.log(people());