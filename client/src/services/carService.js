const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (carData) => {

   const response = fetch(`${baseUrl}/cars/`, {
        method: 'POST',
        headers: {
            'Cpntent-Type': 'application/jeson'
        },
        body:JSON.stringify(carData)
    });
    const result = await response.json();

    return result;
}