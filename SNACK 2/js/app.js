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

for (i=0; i< students.length; i++){
    const singleStundent = students[i];
    singleStundent.name = singleStundent.name.toLocaleUpperCase();
    studentsUpperCase.push(singleStundent.name)
}

console.log(studentsUpperCase);