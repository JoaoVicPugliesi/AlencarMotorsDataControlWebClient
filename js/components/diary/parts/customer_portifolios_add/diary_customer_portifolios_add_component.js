function diary_customer_portifolios_add_component () {
    return `
        <div class="diary-customer-portifolios-add">
            <h3>Nova Carteira</h3>
            <input type="text" placeholder="Nome">
            <input type="tel" placeholder="Telefone">
            <button class="diary-customer-portifolios-add-save-command">Salvar</button>
            <button class="diary-customer-portifolios-add-cancel-command">Cancelar</button>
        </div>
    `
}

export default diary_customer_portifolios_add_component;