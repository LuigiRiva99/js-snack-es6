console.log('snack 3');

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bicycles = [
{
    name: 'Bianchi',
    weight: 8
},
{
    name: 'Atala',
    weight: 7
},
{
    name: 'Olmo',
    weight: 9
},
{
    name: 'Cinelli',
    weight: 10
},
];

console.log(bicycles);

//determinare quale bici ha il peso minore

let lighterBicycle = bicycles[0]

//ciclare l'array delle bici
for (i = 0 ; i < bicycles.length; i++) {
    const bicycle = bicycles[i];
    console.log(bicycle);
    
    if (bicycle.weight < lighterBicycle.weight){
        console.log('più leggera');
        lighterBicycle = bicycle
    } else {
        console.log('più pesante');
    }
}

console.log('↓ bici più leggera ↓');
console.log(lighterBicycle);
