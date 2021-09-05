var faker = require('faker');

var database = { books: [] };

for (var i = 1; i <= 50; i++) {
    database.books.push({
        id: i,
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        published: true,
    });
}

console.log(JSON.stringify(database));