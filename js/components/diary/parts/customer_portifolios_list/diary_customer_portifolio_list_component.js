function diary_customer_portifolio_component (id, name, phone, added, origin, status, last_updated) {
    return `
        <div class="diary-customer-portifolio">
            <div class="diary-customer-portifolio-info">
                <div class="diary-customer-portifolio-info-origin">
                    <span>Origem: </span>
                    <h3>${origin}</h3>
                </div> 
                <div class="diary-customer-portifolio-info-origin">
                    <span>Status: </span>
                    <h3>${status}</h3>
                </div> 
                <div class="diary-customer-portifolio-info-last_updated">
                    <span>Última atualização: </span>
                    <h3>${last_updated.split('-').reverse().join('-')}</h3>
                </div> 
                <div class="diary-customer-portifolio-info-update" data-id="${id}">
                    <span>Atualizar</span>
                    <i class="fa-solid fa-pen-to-square"></i>
                </div> 
            </div>
            <div class="diary-customer-portifolio-phone">
                <h3>${phone}</h3>
            </div>
            <div class="diary-customer-portifolio-name">
            <h3>${name}</h3>
            </div>
            <div class="diary-customer-portifolio-added">
                <h3>${added.split('-').reverse().join('-')}</h3>
            </div>
        </div>
    `
}

export default diary_customer_portifolio_component;