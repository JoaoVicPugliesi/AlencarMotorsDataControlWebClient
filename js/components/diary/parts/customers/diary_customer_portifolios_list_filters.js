function diary_customer_portifolios_list_filters () {
    return `
        <div class="diary-customer-portifolios-list-filters">
            <h3>Filtros:</h3>
            <input type="date">
            <input type="text" placeholder="Telefone">         
            <div class="diary-customer-portifolios-search-command">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="diary-customer-portifolios-reset-command">
                <i class="fa-solid fa-rotate-left"></i>
            </div>
            <div class="diary-customer-portifolios-comeback-command">
                <i class="fa-solid fa-xmark"></i>
            </div>   
        </div>
    `
}

export default diary_customer_portifolios_list_filters;