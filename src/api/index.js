import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            method: 'GET',
            url: URL,
            params: {
              latitude: sw.lat,
              longitude: ne.lon,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'b347313d6cmsh5890f0d0f0a8749p1e3aa5jsn451818363ab5'
            }
        });  

        return data;
    } catch (error) {
        console.log(error);
    }
}