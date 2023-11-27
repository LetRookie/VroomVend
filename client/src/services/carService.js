import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/cars';


export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
}

export const getCar = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);
    return result;
}

