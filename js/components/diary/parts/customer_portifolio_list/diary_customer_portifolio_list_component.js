function diary_customer_portifolio_component (name, phone, added) {
    return `
        <div class="diary-customer-portifolio">
            <div class="diary-customer-portifolio-name">
                <h3>${name}</h3>
            </div>
            <div class="diary-customer-portifolio-phone">
                <h3>${phone}</h3>
            </div>
            <div class="diary-customer-portifolio-added">
                <h3>${added}</h3>
            </div>
        </div>
    `
}

export default diary_customer_portifolio_component;