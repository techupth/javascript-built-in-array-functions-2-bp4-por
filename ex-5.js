let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"]; //Global varaible

function searchCrimeRecord(name) {
  // Start coding here
  let message;

  if (crimeRecordNames.indexOf(name) === -1 ) {
    message = (`${name} has no crime record`);
  } else {
    message = (`${name} has crime record !!!`);
  }
  return message;
}

console.log(searchCrimeRecord("Por Malakul"))

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"