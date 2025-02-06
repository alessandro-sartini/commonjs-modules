function hobbies(...hobbys) {
  const hobbies = [];
  hobbies.push(... hobbys);
  return hobbies;
}

hobbies('mangiare', 'dormire', 'salutare')

// console.log(hobbies("mangiare", "dormire", "salutare"));

module.exports = hobbies;