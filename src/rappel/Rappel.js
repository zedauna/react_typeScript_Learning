//Rest
const logNotes = (...notes) => {
  console.log(notes);
};
logNotes(1, 2, 3);
logNotes(1, 2, 3, 4, 5, 6);

//Spread
const tab1 = ["james", 45, true];
const tab2 = ["Norrington", "Commodore"];
const tabMerge = [...tab1, ...tab2];
console.log(tabMerge);

// 
const people =[
  {name :"bob",age:12},
  {name :"bo",age:14},
  {name :"bobh",age:19},
]

const peopleFiltered=people.filter(p=>p.age>=15)
console.log(peopleFiltered)

console.log(people.map(p=>p.name))
console.log(people.map(p=>p.age))
people.map(p=>(console.log(p.age)))

people.map(p=>{
  if(p.age >=15){
    console.log(p)
  }
})