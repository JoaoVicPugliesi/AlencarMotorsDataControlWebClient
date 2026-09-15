function diary_customer_portifolios_component (mode) {
    let portifolios;
    if (mode === 'write') {
        portifolios = `
            <div class="diary-customer-portifolios">
                <div class="diary-customer-portifolios-list">
                    <h3>Carteiras de clientes</h3>
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="diary-customer-portifolios-add">
                    <h3>Adicionar carteira</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `

        return portifolios;
    }

    if (mode === 'read') {
        portifolios = `
            <div class="diary-customer-portifolios">
                <div class="diary-customer-portifolios-list">
                    <h3>Carteiras de clientes</h3>
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="diary-customer-portifolios-add blocked">
                    <h3>Adicionar carteira</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `;
        return portifolios;
    }

}

export default diary_customer_portifolios_component;