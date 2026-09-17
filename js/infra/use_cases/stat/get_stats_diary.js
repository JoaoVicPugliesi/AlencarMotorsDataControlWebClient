import base_URL from "../../base_URL.js";

async function get_stats_diary(params) {
    const query = new URLSearchParams(params).toString();
    const request = await fetch(`${base_URL}/get_stats_diary?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const status = request.status;
    const json = await request.json();
    return {
        status: status,
        json: json
    }
}

export default get_stats_diary;