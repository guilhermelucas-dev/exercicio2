const students = [
  {
    name: "João",
    testOne: 6,
    testTwo: 6
  },

  {
    name: "Letícia",
    testOne: 9,
    testTwo: 10
  },
  {
    name: "Diego",
    testOne: 9,
    testTwo: 9
  },
  {
    name: "Julia",
    testOne: 6,
    testTwo: 5
  }    
];


function average(testOne, testTwo) {
  return (testOne + testTwo) / 2;
}

students.forEach(student =>{
  const result = average(student.testOne, student.testTwo);

  if (result < 7) {
    alert(`A média do(a) aluno(a) ${student.name} é ${result} \n Não foi dessa vez, ${student.name}! Tente novamente!`);
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é ${result} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
  }

});