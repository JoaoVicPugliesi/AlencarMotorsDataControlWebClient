import diary_customer_portifolio_component from "./diary_customer_portifolio_component.js";
import diary_customer_portifolios_list_filters from "./diary_customer_portifolios_list_filters.js";
import diary_main_input_component from "../diary_main_input_component.js";

function diary_customer_portifolios_list() {
    return `
    <div class="diary-customer-portifolios-list">
        ${diary_main_input_component('diary-customer-portifolios-list-input', 'Pesquise Pelo Nome')}
        ${diary_customer_portifolios_list_filters()}
        <div class="diary-customer-portifolios-list-display">
            ${diary_customer_portifolio_component('João Victor Lima Almeida Pugliesi', '(82) 996026194', '25/09/2026')}
        </div>
    </div>
    `
}

export default diary_customer_portifolios_list;