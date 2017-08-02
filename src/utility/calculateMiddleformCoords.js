const calculateMiddleformCoords = locationSection =>
{
    // calculates given section object middle points
    // google place location is:
    // locationSection:
    // {f: {b: 'lng', f: 'lat'}, b: {b: 'lng', f: 'lat'}}
    const lat = (locationSection.f.b + locationSection.f.f) / 2;
    const lng = (locationSection.b.b + locationSection.b.f) / 2;
    return { latitude: lat, longitude: lng };
};

export default calculateMiddleformCoords;
