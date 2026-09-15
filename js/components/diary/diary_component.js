import diary_customer_portifolios_commands_component from "./parts/customers/diary_customer_portifolios_commands_component.js";
import diary_header_component from "./parts/diary_header_component.js";
import diary_main_input_component from "./parts/diary_main_input_component.js";
import diary_description_component from "./parts/diary_description_component.js";
import diary_commands_component from "./parts/diary_commands_component.js";
import diary_customer_portifolios_list from "./parts/customers/diary-customer-portifolios-list.js";

function diary_component(mode, date, diary) {
    const {
        title,
        description
    } = diary ?? {};
    const splited_reversed_formatted =
        date.split('-').reverse().join('-');
    return `
        <div class="diary-page">
            ${diary_customer_portifolios_list()}
            ${diary_customer_portifolios_commands_component(mode)}
            ${diary_header_component(splited_reversed_formatted)}
            ${diary_main_input_component('employees-main-painel-diary-title', title)}
            ${diary_description_component(description)}
            ${diary_commands_component(mode)}
        </div>
    `;
}

export default diary_component;