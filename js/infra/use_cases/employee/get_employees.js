import base_URL from "../../base_URL.js";

async function get_employees() {
    const request = await fetch(`${base_URL}/get_employees`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    const status = request.status;
    const json = await request.json();

    return {
        status: status,
        employees: json.employees
    }
    
}

export default get_employees;