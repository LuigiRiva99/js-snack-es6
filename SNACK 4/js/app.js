console.log('snack 4');


//Creo array squadre di calcio
const teamList= [
    {
        name: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        name: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        name: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        name: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        name: 'Napoli',
        punti: 0,
        falli: 0
    },
];

//array squadre con nomi e falli
const newTeamList = [];

//ciclo la lista di squadre
for (i = 0; i < teamList.length; i++) {

    //creo randomicamente punti e falli
    teamList[i].punti = Math.floor(Math.random() * 90) + 1;
    teamList[i].falli = Math.floor(Math.random() * 50) + 1;

    //pusho oggetti con nomi e falli in newTeamList
    newTeamList.push({
        name:  teamList[i].name,
        falli: teamList[i].falli
    })
}

//stampo in console
console.log(teamList);
console.log(newTeamList);