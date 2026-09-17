import base_URL from "../../base_URL.js";

async function update_customers (params) {
    const request = await fetch(`${base_URL}/update_customers`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    })

    const status = request.status;
    const json = await request.json();
    console.log(json);
    return {
        status: status,
        json: {
            message: json.message
        }
    }
}

export default update_customers;