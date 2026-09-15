import diary_customer_portifolios_add_component from "./customer_portifolios_add/diary_customer_portifolios_add_component.js";

function diary_customer_portifolios_commands_component(mode) {
    let portifolios = `
        <div class="diary-customer-portifolios-commands">
            ${diary_customer_portifolios_add_component()}
            <div class="diary-customer-portifolios-list-command">
                <h3>Carteiras dos clientes</h3>
                <i class="fa-solid fa-list"></i>
            </div>
            <div class="diary-customer-portifolios-add-command ${mode == 'read' ? 'blocked' : ''}">
                <h3>Adicionar carteira</h3>
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    `;

    return portifolios;

}

export default diary_customer_portifolios_commands_component;