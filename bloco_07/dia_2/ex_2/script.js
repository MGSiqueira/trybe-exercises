const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addChave = (object, key, value) => { object[key] = value }
addChave(lesson2, 'turno', 'manhã');

const listKeys = (object) => Object.keys(object);

const objectLength = (object) => Object.keys(object).length;

const objectValues = (object) => Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalStudents = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (index in array) {
    total += object[array[index]].numeroEstudantes;
  }
  return total;
}

const getValueByNumber = (object, number) => {
  const array = Object.keys(object);
  return object[array[number]];
}

const verifyPair = (object, key, value) => {
  const arr = Object.entries(object);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) { isEqual = true }
  }
  return isEqual;
}

console.log(lesson2);
console.log(listKeys(lesson3));
console.log(objectLength(lesson1));
console.log((objectValues(lesson2)));
console.log(allLessons);
console.log(totalStudents(allLessons));
console.log(getValueByNumber(lesson3, 3));
console.log(verifyPair(lesson3,'turno','noite'));
