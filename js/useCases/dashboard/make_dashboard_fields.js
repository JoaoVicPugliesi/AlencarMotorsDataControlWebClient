import counters from "../../../data/counters.js";
import default_data from "../../../data/default_data.js";
import dashboard_field_component from "../../components/dashboard/dashboard_field_component.js";

function make_dashboard_fields(data, type) {
    if (!Array.isArray(data) || data.length === 0) {
        data = [...default_data]
    }
    const dashboard = document.querySelector(
        `.dashboard[data-dashboard="${type}"]`
    );
    if (!dashboard) return;
    const dashboard_display_fields = dashboard.querySelector(
        '.dashboard-display-fields'
    );
    if (!dashboard_display_fields) return;
    dashboard_display_fields.innerHTML = '';
    const totals = {};
    data.forEach(row => {
        Object.entries(row).forEach(([key, value]) => {
            if (
                key === 'id' ||
                key === 'employee_id' ||
                key === 'date'
            ) {
                return;
            }
            if (!totals[key]) {
                totals[key] = 0;
            }
            totals[key] += Number(value) || 0;
        });

    });
    Object.entries(totals).forEach(([code, total]) => {
        const counter = counters.find(
            counter => counter.code === code
        );
        if (!counter) return;
        const employee = dashboard_field_component(
            counter.name,
            code,
            total
        );
        dashboard_display_fields.insertAdjacentHTML(
            'beforeend',
            employee
        );
    });
}

export default make_dashboard_fields;