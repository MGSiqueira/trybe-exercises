const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  }
  return employees;
}

const createEmail = (name) => {
  const email = name.toLowerCase().split(' ').join('_')
  return { name, email: `${email}@trybe.com`, }
}

console.log(newEmployees());