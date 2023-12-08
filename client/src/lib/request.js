const buildOptions = (data) => {
    const options = {};

    const token = localStorage.getItem('accessToken');

    // options.headers = {};
    
    if(data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type':'application/json'
        }
    }
    
    if(token) {
        options.headers = {
            ...options.headers,
            'X-Authorization' : token
        }
    }

    return options;
}

const request = async (method, url, data) => {

    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if(response.status === 204){
        return {};
    }

    if(!response.ok){
        throw new Error('Unknonwn error occured');
    }

    const result = await response.json();
    
    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');