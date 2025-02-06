const fullName = require('./names.js')
const hobbies = require('./hobbies.js')

// console.log(fullName("Alessandro", "Sartini"));
// console.log(hobbies("mangiare", "dormire", "salutare"));
function people() {
   
    return {
        
        name:fullName("Alessandro", "Sartini"),
        hobbies:hobbies("mangiare", "dormire", "salutare")
        
        
    };
}

console.log(people());