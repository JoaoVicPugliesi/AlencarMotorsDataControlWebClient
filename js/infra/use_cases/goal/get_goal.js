import base_URL from "../../base_URL.js";

async function get_goal() {
    const request = await fetch(`${base_URL}/get_goal`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    const status = request.status;
    const json = await request.json();
    return {
        status: status,
        goal: json.goal
    }
    
}

export default get_goal;