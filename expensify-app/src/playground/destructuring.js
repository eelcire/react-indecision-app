// Object destructuring

// const person = {
//     name: 'Eric',
//     age: 24,
//     location: {
//         city: 'Baton Rouge',
//         temp: 90
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = ['999 N 9th St', 'Baton Rouge', 'Louisiana', '70802'];
const [ , city, state = 'New York' ] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '%2.75']
const [ coffee, , medium ] = item
console.log(`A medium ${coffee} costs ${medium}`)