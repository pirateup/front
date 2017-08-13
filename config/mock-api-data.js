const faker = require('faker');

module.exports = () =>
{
    // register empty resources
    const data =
    {
        nearby: [],
        shops: [],
    };

    // populate them with random stuff if needed
    for (let i = 0; i < 100; i++)
    {
        data.nearby.push({
            id: i,
            name: faker.company.companyName(),
            distance: faker.random.number(),
            street: faker.address.streetName(),
            img: 'http://lorempixel.com/400/400',
        });
    }

    return data;
};
