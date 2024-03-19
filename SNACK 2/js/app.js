console.log('snack 2');

//lista di studenti 
const students= [{
    id: 213,
    name: 'Marco della Rovere',
    grades: 78
},
{
    id: 110,
    name: 'Paola Cortellesa',
    grades: 96
},
{
    id: 250,
    name: 'Andrea Mantegna',
    grades: 48
},
{
    id: 145,
    name: 'Gaia Borromini',
    grades: 74
},
{
    id: 196,
    name: 'Luigi Grimardello',
    grades: 68
},
{
    id: 102,
    name: 'Piero della Francesca',
    grades: 50
},
{
    id: 120,
    name: 'Francesca da Polenta',
    grades: 84
},
]

//1.Creare una lista con i nomi in maiuscolo
const studentsUpperCase= [];
//2.Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const studentsGoodGrades= [];
//3.creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const studentsGoodGradesHighId= [];

for (i=0; i< students.length; i++){
    const singleStundent = students[i];
    //trasformo i nomi in maiuscolo
    singleStundent.name = singleStundent.name.toLocaleUpperCase();
    //pusho gli studenti nell'array apposito
    studentsUpperCase.push(singleStundent.name)

    if (singleStundent.grades > 70){
    studentsGoodGrades.push(singleStundent)
    } 
    
    if (singleStundent.grades > 70 && singleStundent.id >120){
        studentsGoodGradesHighId.push(singleStundent)
    }
}

// const studentsUpperCase= students.map ((el) => el.name.toLocaleUpperCase())
// const studentsGoodGrades= students.filter ((el) => el.grades > 70)
// const studentsGoodGradesHighId= students.filter ((el) => el.grades > 70 && el.id > 120)

console.log(studentsUpperCase);
console.log(studentsGoodGrades);
console.log(studentsGoodGradesHighId);



