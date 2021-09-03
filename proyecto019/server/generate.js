var faker = require('faker');

var database = { books: [] };

for (var i = 1; i <= 300; i++) {
    database.books.push({
        id: i,
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number()
    });
}

console.log(JSON.stringify(database));
