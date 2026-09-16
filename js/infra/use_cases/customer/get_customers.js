import base_URL from "../../base_URL.js";

async function get_customers (params) {
    const query = new URLSearchParams(params).toString();
    const request = await fetch(`${base_URL}/get_customers?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const status = request.status;
    const json = await request.json();
    return {
        status: status,
        json: {
            message: json.message,
            customers: json.customers
        }
    }
}

export default get_customers;