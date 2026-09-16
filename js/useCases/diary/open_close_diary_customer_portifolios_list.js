import diary_customer_portifolio_component from "../../components/diary/parts/customer_portifolios_list/diary_customer_portifolio_list_component.js";
import show_message from "../../helpers/show_message.js";
import get_customers from "../../infra/use_cases/customer/get_customers.js";

function display_customers(display, customers) {
    display.innerHTML = '';
    customers.forEach((c) => {
        display.innerHTML += diary_customer_portifolio_component(c.id, c.name, c.phone, c.added_at, c.origin, c.status, c.status_updated_at);
    });
}

async function open_diary_customer_portifolios_list_helper(parent, params) {
    console.log(params);
    const display = document.querySelector('.diary-customer-portifolios-list-display');
    const commands = document.querySelector('.diary-customer-portifolios-commands');
    const container = document.querySelector('.diary-customer-portifolios-list');
    const loading_message = show_message(
        parent,
        'loading',
        'Carregando carteiras'
    );
    const { status, json } = await get_customers(params);
    console.log(status, json);
    loading_message.remove();
    if (status !== 200) {
        show_message(parent, 'error', json.message);
        return;
    }
    container.classList.add('opened');
    commands.classList.add('closed');
    display_customers(display, json.customers);
}
function open_diary_customer_portifolios_list(id) {
    const command = document.querySelector('.diary-customer-portifolios-list-command');
    const search = document.querySelector('.diary-customer-portifolios-search-command');
    const reset = document.querySelector('.diary-customer-portifolios-reset-command');
    command.removeEventListener('click', () => { });
    search.removeEventListener('click', () => { });
    reset.removeEventListener('click', () => { });
    const diary_page = document.querySelector('.diary-page');
    const list_input = document.querySelector('.diary-customer-portifolios-list-input');
    const date_input = document.querySelector('.diary-customer-portifolios-list-date-input');
    const phone_input = document.querySelector('.diary-customer-portifolios-list-phone-input');
    command.addEventListener('click', async () => {
        let params = {
            employee_id: id,
            name: null,
            phone: null,
            added_at: null
        }
        await open_diary_customer_portifolios_list_helper(diary_page, params);
    });

    reset.addEventListener('click', async () => {
        params = {
            employee_id: id,
            name: null,
            phone: null,
            added_at: null
        }
        list_input.value = null;
        date_input.value = null;
        phone_input.value = null;
        await open_diary_customer_portifolios_list_helper(diary_page, params);
    });
    search.addEventListener('click', async () => {
        if (!list_input.value && !date_input && !phone_input) {
            await open_diary_customer_portifolios_list_helper(diary_page, params);
            return;
        }
        params = {
            employee_id: id,
            name: list_input.value,
            phone: phone_input.value,
            added_at: date_input.value
        }
        await open_diary_customer_portifolios_list_helper(diary_page, params);
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