const faker = require('faker');

function * range (max)
{
    let i = 0;
    while (i < max)
    {
        yield i;
        i++;
    }
    return max;
}

function setTagName ()
{
    const tagsArray = [
        'florist',
        'grocery',
        'pharmacy',
        'newsstand',
        'butcher',
        'bakery',
        'cafe',
        'coffeshop',
        'clothes',
        'furnishings',
    ];

    return tagsArray[faker.random.number({ min: 0, max: (tagsArray.length - 1) })];
}

module.exports = () =>
{
    // register empty resources
    const data = {
        nearby: [],
        shops: [],
    };

    // populate them with random stuff if needed
    // eslint-disable-next-line
    for (let i of range(50))
    {
        data.nearby.push({
            id: i,
            name: faker.company.companyName(),
            distance: faker.random.number(),
            street: faker.address.streetName(),
            // randomize prop is just a junk that enforces a different image per object
            img: `http://lorempixel.com/400/400/?randomize=${i}`,
            location: [Number(faker.address.latitude()), Number(faker.address.longitude())],
            tag: setTagName(),
        });
    }

    return data;
};
