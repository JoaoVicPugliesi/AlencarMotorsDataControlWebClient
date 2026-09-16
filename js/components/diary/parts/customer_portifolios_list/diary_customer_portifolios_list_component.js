import diary_customer_portifolios_list_filters_component from "./diary_customer_portifolios_list_filters_component.js";
import diary_main_input_component from "../diary_main_input_component.js";

function diary_customer_portifolios_list_component() {
    return `
    <div class="diary-customer-portifolios-list">
        ${diary_main_input_component('diary-customer-portifolios-list-input', 'Pesquise Pelo Nome', false)}
        ${diary_customer_portifolios_list_filters_component()}
        <div class="diary-customer-portifolios-list-display"></div>
    </div>
    `
}

export default diary_customer_portifolios_list_component;