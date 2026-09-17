import save__diary_customer from "./save_diary_customer.js";

function open_diary_customer_portifolios_add(id) {
    const container = document.querySelector('.diary-customer-portifolios-add');
    const command = document.querySelector(
        '.diary-customer-portifolios-add-command'
    );
    command.addEventListener('click', () => {
        container.classList.add('opened');
    });

    save__diary_customer(id);
}

function close_diary_customer_portifolios_add() {
    const container = document.querySelector(
        '.diary-customer-portifolios-add'
    );
    const command = document.querySelector(
        '.diary-customer-portifolios-add-cancel-command'
    );
    command.addEventListener('click', () => {
        container.classList.remove('opened');
    });
}


function open_close_diary_customer_portifolios_add_caller(id) {
    open_diary_customer_portifolios_add(id);
    close_diary_customer_portifolios_add();
}


export default open_close_diary_customer_portifolios_add_caller;