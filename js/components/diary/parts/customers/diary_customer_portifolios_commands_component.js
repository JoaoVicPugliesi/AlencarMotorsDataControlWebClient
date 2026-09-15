function diary_customer_portifolios_commands_component (mode) {
    let portifolios;
    if (mode === 'write') {
        portifolios = `
            <div class="diary-customer-portifolios-commands">
                <div class="diary-customer-portifolios-list-command">
                    <h3>Carteiras dos clientes</h3>
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="diary-customer-portifolios-add-command">
                    <h3>Adicionar carteira</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `

        return portifolios;
    }

    if (mode === 'read') {
        portifolios = `
            <div class="diary-customer-portifolios-commands">
                <div class="diary-customer-portifolios-list-command">
                    <h3>Carteiras de clientes</h3>
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="diary-customer-portifolios-add-command blocked">
                    <h3>Adicionar carteira</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `;
        return portifolios;
    }

}

export default diary_customer_portifolios_commands_component;