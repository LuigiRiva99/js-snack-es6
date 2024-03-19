

//lista Dwayne Johnson
const invitedList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//creo una nuova lista dove ogni ospite diventi un object con i suoi attributi
const objectList =[];

//uso ciclo for per scorrere la lista originale e per ogni elemento creo un'oggeto da pushare nella nuova lista
for (let i = 0; i < invitedList.length; i++ ) {
    let guest= invitedList[i];
    guestObject =  {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: guest,
        posto: 1
    }

    objectList.push(guestObject)
}

// //stampo lista oggetti
console.log(objectList);



//--creo la lista di oggetti usando array.map--//

// const objectList = invitedList.map((el) => {
//     guestObject =  {
//         nomeTavolo: 'Tavolo VIP',
//         nomeOspite: el,
//         posto: 1
//     }
//     return guestObject
// })

// console.log(objectList);
