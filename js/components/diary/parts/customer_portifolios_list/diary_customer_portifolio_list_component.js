function diary_customer_portifolio_list_component (id, name, phone, added, origin, status, status_updated_at) {
    const update_params = {
        id: id,
        status: status,
        status_updated_at: status_updated_at
    }
    return `
        <div class="diary-customer-portifolio">
            <div class="diary-customer-portifolio-info">
                <div class="diary-customer-portifolio-info-origin">
                    <span>Origem: </span>
                    <h3>${origin}</h3>
                </div> 
                <div class="diary-customer-portifolio-info-status">
                    <span>Status: </span>
                    <h3>${status}</h3>
                </div> 
                <div class="diary-customer-portifolio-info-last-updated">
                    <span>Última atualização: </span>
                    <h3>${status_updated_at.split('-').reverse().join('-')}</h3>
                </div> 
                <div class="diary-customer-portifolio-info-update" data-params='${JSON.stringify(update_params)}'>
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

export default diary_customer_portifolio_list_component;