const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const totalGrade = (right, student, check) => {
  return check(right, student);
}

const calculate = (right, student) => {
  let grade = 0;
  for (let index = 0; index < student.length; index += 1) {
    if (student[index] !== 'N.A') { right[index] === student[index] ? grade += 1 : grade -= 0.5; }
  }
  return grade;
}

console.log(totalGrade(rightAnswers, studentAnswers, calculate))