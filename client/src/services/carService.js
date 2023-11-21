const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (data) => {

   const response = await fetch(`${baseUrl}/cars/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}