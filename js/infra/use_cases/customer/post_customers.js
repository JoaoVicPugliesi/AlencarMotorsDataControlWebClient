import base_url from '../../base_URL.js'

async function post_customers (params) {
    const response = await fetch (`${base_url}/post_costumers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = response.status;
    const json = await response.json();

    return {
        status: status,
        json: json
    }
}

export default post_customers