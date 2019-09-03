// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

//this keywork - no longer bound

const user = {
    name: 'Eric',
    cities: ['Raleigh', 'Charlotte', 'Baton Rouge'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
        // const that = this;
        // this.cities.forEach(function (city) {
        //     console.log(that.name + ' has lived in ' + city)
        // });
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());