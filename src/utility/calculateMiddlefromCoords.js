    // calculates given section object middle points
    // google place location is:
    // locationSection:
    // {f: {b: 'lng', f: 'lat'}, b: {b: 'lng', f: 'lat'}}
    // and returns exact location point

export default function (locationSection)
{
    const latitude = (locationSection.f.b + locationSection.f.f) / 2;
    const longitude = (locationSection.b.b + locationSection.b.f) / 2;

    return {
        latitude,
        longitude,
    };
}
