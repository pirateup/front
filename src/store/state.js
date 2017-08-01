export default
{
    nearbyShops:
    [
        { id: 'idSetByServer1234567', name: 'U Jadźki', distance: 300, street: 'Ketonowa 7', img: 'https://s-media-cache-ak0.pinimg.com/736x/a3/03/61/a30361985814a564e8b87515bb373661--shop-facade-coffeeshops.jpg', location: [51.3668, -0.4628] },
        { id: 'idSetByServer7654321', name: 'U Józka', distance: 500, street: 'Betonowa 9', img: 'https://s-media-cache-ak0.pinimg.com/736x/a3/03/61/a30361985814a564e8b87515bb373661--shop-facade-coffeeshops.jpg', location: [51.4694, -0.08396] },
    ],
    location: [52.23, 21.02],
    // zoom will determinate how far from user we are looking
    // for shop or how far is shop from the user
    // for example user is looking around 1 km of his coords
    // so zoom needs to be calculated to show client and shop
    // both on the map, or if user is searching from unknown or
    // far location zoom will be set to comfortably view the Map
    zoom: 15,
    searchLocationFieldVisib: false,
};
