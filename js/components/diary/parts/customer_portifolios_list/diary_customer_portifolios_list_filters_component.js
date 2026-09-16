function diary_customer_portifolios_list_filters_component () {
    return `
        <div class="diary-customer-portifolios-list-filters">
            <h3>Filtros:</h3>
            <input class="diary-customer-portifolios-list-date-input" type="date">
            <input class="diary-customer-portifolios-list-phone-input" type="tel" id="phone" name="phone" pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}" placeholder="(96) 98888-8888" required max-length="15"/>        
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

export default diary_customer_portifolios_list_filters_component;