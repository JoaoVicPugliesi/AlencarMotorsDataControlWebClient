function diary_customer_portifolios_add_component () {
    return `
        <div class="diary-customer-portifolios-add">
            <h3>Nova Carteira</h3>
            <input class="diary-customer-portifolios-add-name" type="text" placeholder="Nome" autocomplete="off">
            <input class="diary-customer-portifolios-add-phone" type="tel" id="phone" name="phone" pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}" placeholder="(96) 98888-8888" required max-length="15" autocomplete="off"/>
            <select class="diary-customer-portifolios-add-origin">
                <option value="" disabled selected>Origem</option>
                <option value="crm">CRM</option>
                <option value="carchat">Carchat</option>
                <option value="indicação">Indicação</option>
            </select>
            <select class="diary-customer-portifolios-add-status">
                <option value="" disabled selected>Status</option>
                <option value="comprou">Comprou</option>
                <option value="não comprou">Não comprou</option>
            </select>
            <button class="diary-customer-portifolios-add-save-command">Salvar</button>
            <button class="diary-customer-portifolios-add-cancel-command">Cancelar</button>
        </div>
    `
}

export default diary_customer_portifolios_add_component;