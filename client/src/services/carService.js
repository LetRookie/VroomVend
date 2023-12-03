import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/cars';


export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

//I will be back on this soon
// export const getLatest = async () => {
//     const query = new URLSearchParams({
//         sortBy: `_createdOn desc`,
//         count: 3
//     });

//     const result = await request.get(`${baseUrl}?${query}`)

//     return result;
// }

export const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
}

export const getCar = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);
    return result;
}

export const edit = async (carId, data) => {
    const result = await request.put(`${baseUrl}/${carId}`, data);
    return result;
}

export const remove = async (carId) => request.remove(`${baseUrl}/${carId}`);


//API for search box

export const getBrands = async () => {
    const query = new URLSearchParams({
        distinct: "brandName",
        select: "brandName"
    });
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getModels = async (brandName) => {
    const query = new URLSearchParams(`?where=brandName%3D%22${brandName}%22`);
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}


