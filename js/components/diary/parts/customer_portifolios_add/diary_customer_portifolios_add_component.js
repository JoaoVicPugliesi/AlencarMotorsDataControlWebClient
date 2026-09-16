function diary_customer_portifolios_add_component () {
    return `
        <div class="diary-customer-portifolios-add">
            <h3>Nova Carteira</h3>
            <input class="diary-customer-portifolios-add-name" type="text" placeholder="Nome">
            <input class="diary-customer-portifolios-add-phone type="tel" id="phone" name="phone" pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}" placeholder="(96) 98888-8888" required max-length="15"/>
            <button class="diary-customer-portifolios-add-save-command">Salvar</button>
            <button class="diary-customer-portifolios-add-cancel-command">Cancelar</button>
        </div>
    `
}

export default diary_customer_portifolios_add_component;