import show_message from './show_message.js'
import diary_customer_portifolio_list_component from '../components/diary/parts/customer_portifolios_list/diary_customer_portifolio_list_component.js'
import get_customers from '../infra/use_cases/customer/get_customers.js'

function display_customers(display, customers) {
    display.innerHTML = '';
    customers.forEach((c) => {
        display.innerHTML += diary_customer_portifolio_list_component(c.id, c.name, c.phone, c.added_at, c.origin, c.status, c.status_updated_at);
    });
}
async function open_diary_customer_portifolios_list_helper(params) {
    const diary_page = document.querySelector('.diary-page');
    const display = document.querySelector('.diary-customer-portifolios-list-display');
    const commands = document.querySelector('.diary-customer-portifolios-commands');
    const container = document.querySelector('.diary-customer-portifolios-list');
    const loading_message = show_message(
        diary_page,
        'loading',
        'Carregando carteiras'
    );
    const { status, json } = await get_customers(params);
    loading_message.remove();
    if (status !== 200) {
        show_message(
        diary_page, 
        'error', 
        json.message
    );
        return;
    }
    container.classList.add('opened');
    commands.classList.add('closed');
    display_customers(display, json.customers);
}

export default open_diary_customer_portifolios_list_helper;