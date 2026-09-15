import dashboard_bottom_component from "./dashboard_bottom_component.js";
import dashboard_content_component from "./dashboard_content_component.js";
import dashboard_header_component from "./dashboard_header_component.js";
import dashboard_painel_component from "./dashboard_painel_component.js";
import dashboard_period_component from "./dashboard_period_component.js";

function dashboard_component(type) {
    return `
        <div class="dashboard" data-dashboard="${type}">
            ${dashboard_period_component()}
            ${dashboard_painel_component()}
            <div class="dashboard-display">
                ${dashboard_header_component()}
                <div class="dashboard-display-fields"></div>
                ${dashboard_content_component()}
                ${dashboard_bottom_component()}
                <div class="dashboard-display-commands">
                    <button class="dashboard-display-comeback-command">Voltar</button>
                </div>
            </div>
        </div>
    `;
}

export default dashboard_component;