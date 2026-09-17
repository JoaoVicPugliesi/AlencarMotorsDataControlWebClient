import open_diary_customer_portifolios_list_helper from "../../helpers/open_diary_customer_portifolios_list_helper.js";
import update_diary_customers from "./update_diary_customers.js";

function open_diary_customer_portifolios_list(id) {
    const command = document.querySelector('.diary-customer-portifolios-list-command');
    const search = document.querySelector('.diary-customer-portifolios-search-command');
    const reset = document.querySelector('.diary-customer-portifolios-reset-command');
    const list_input = document.querySelector('.diary-customer-portifolios-list-input');
    const date_input = document.querySelector('.diary-customer-portifolios-list-date-input');
    const phone_input = document.querySelector('.diary-customer-portifolios-list-phone-input');
    command.addEventListener('click', async () => {
        const params = {
            employee_id: id,
            name: null,
            phone: null,
            added_at: null
        }
        await open_diary_customer_portifolios_list_helper(params);
        update_diary_customers();
    });

    reset.addEventListener('click', async () => {
        const params = {
            employee_id: id,
            name: null,
            phone: null,
            added_at: null
        }
        list_input.value = null;
        date_input.value = null;
        phone_input.value = null;
        await open_diary_customer_portifolios_list_helper(params);
    });

    search.addEventListener('click', async () => {
        if (!list_input.value && !date_input && !phone_input) {
            await open_diary_customer_portifolios_list_helper(params);
            return;
        }
        const params = {
            employee_id: id,
            name: list_input.value,
            phone: phone_input.value,
            added_at: date_input.value
        }
        await open_diary_customer_portifolios_list_helper(params);
    });
}

function close_diary_customer_portifolios_list() {
    const container = document.querySelector('.diary-customer-portifolios-list');
    const command = document.querySelector('.diary-customer-portifolios-comeback-command');
    const list_input = document.querySelector('.diary-customer-portifolios-list-input');
    const date_input = document.querySelector('.diary-customer-portifolios-list-date-input');
    const phone_input = document.querySelector('.diary-customer-portifolios-list-phone-input');
    command.addEventListener('click', () => {
        const commands = document.querySelector('.diary-customer-portifolios-commands');
        container.classList.remove('opened');
        commands.classList.remove('closed');
        list_input.value = null;
        date_input.value = null;
        phone_input.value = null;
    });
}

function open_close_diary_customer_portifolios_list_caller(id) {
    open_diary_customer_portifolios_list(id);
    close_diary_customer_portifolios_list();
}

export default open_close_diary_customer_portifolios_list_caller;