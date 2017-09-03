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

module.exports = () =>
{
    // register empty resources
    const data = {
        nearby: [],
        shops: [],
        tags: [
            'florist',
            'grocery',
            'pharmacy',
            'newsstand',
            'butcher',
            'bakery',
            'cafe',
            'coffeshop',
            'clothes',
            'furnishings'
        ],
    };

    const randomizeTag = () => {
        return Math.floor(Math.random() * data.tags.length) 
    }

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
            tag: data.tags[randomizeTag()],
        });
    }

    return data;
};
