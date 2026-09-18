import show_message from "../../../helpers/show_message.js";
import get_current_date from '../../../helpers/get_current_date.js';
import base_URL from "../../base_URL.js";

function post_stats_helper (id, is_default) {
    const editable_cells = document.querySelectorAll(
        '.employees-main-painel-display td[data-editable="true"]'
    );
    let body = {
        employee_id: id,
        date: get_current_date(),
    };
    if(is_default) {
        body = {
            ...body,
            leads_crm: 0,
            leads_carchat: 0,
            leads_served_spoken: 0,
            passersby: 0,
            prospection: 0,
            spoken_prospection: 0,
            simulations_made: 0,
            registrations: 0,
            registrations_approved: 0,
            registrations_made: 0,
            sales: 0,
            sales_in_negotiation: 0,
            diary: {
                title: 'Sem título',
                description: 'Sem decrição'
            }
        }
    } else {
        if (editable_cells) {
            editable_cells.forEach(cell => {
                const row = cell.closest('tr');
                const counter_code = row.dataset.code;
                const value = Number(
                    cell.textContent.trim()
                ) || 0;
                body[counter_code] = value;
            });
        }
    }
    return body;
}

async function post_stats(id, is_default) {
    const body = post_stats_helper(id, is_default);
    const employees_main_painel = document.querySelector('.employees-main-painel');
    const request = await fetch(`${base_URL}/post_stats`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const status = request.status;
    const json = await request.json();
    if (status === 400) {
        show_message(employees_main_painel, 'error', `${json.message}`);
        return;
    }
    show_message(employees_main_painel, 'success', `${json.message}`);
}

export default post_stats;