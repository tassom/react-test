//Array functions

// includes()	Check if an array contains the specified element
// pop()	Removes the last element of an array, and returns that element
// push()	Adds new elements to the end of an array, and returns the new length
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// unshift()	Adds new elements to the beginning of an array, and returns the new length

interface Persons {
  name: string;
  lastName: string;
  age: number;
}

const persons: Persons[] = [
  { name: "Mr", lastName: "T", age: 45 },
  { name: "Mickey", lastName: "Mouse", age: 46 },
  { name: "SpongeBob", lastName: "SquarePants", age: 41 },
  { name: "Mr", lastName: "Bean", age: 66 }
];

export function App() {

  const filter = persons.filter((person) => {
    return person.age % 2 !== 1;
  });

  const map = persons.map((person, index) => {
    return (person[index] = { ...person, age: person.age++ });
  });

  const reduce = persons.reduce(
    (prev, curr) => {
      return { age: prev.age + curr.age };
    },
    { age: 100 }
  );

  const forEach = persons.forEach((person, index) => {
    person[index] = { ...person, age: person.age++ };
  });

  console.log(filter);
  console.log(map);
  console.log(reduce.age);
  console.log(forEach);
  console.log("persons array update", persons);
  return;
  
}


