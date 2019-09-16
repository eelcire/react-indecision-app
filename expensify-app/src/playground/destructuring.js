// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// // destructuring
// const { name: first = 'Anon', age} = person;
// const { city, temp: temperature } = person.location;

// console.log(first)

// console.log(`it's ${name} here`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { title, author } = book;
// console.log(author + ' wrote ' + title);

const { name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName)


// Array destructuring below, {} destructuring above

const address = ['1300 North Green Blvd', 'Seattle', 'Washington', '90210']

const [street, city, state, zip] = address;

// console.log(state)
// console.log(`you are in ${address[1]} ${address[2]} `)

const menu = ['coffee', '2.00', '2.50', '2.75']

const [item, s, m, l] = menu;
console.log(`a medium ${item} cost ${m}`)