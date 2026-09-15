function open_diary_customer_portifolios_add () {
    const container = document.querySelector('.diary-customer-portifolios-add');
    const command = document.querySelector('.diary-customer-portifolios-add-command');
    command.addEventListener('click', () => {
        container.classList.add('opened');
    });
}

function remove_diary_customer_portifolios_add () {
    const container = document.querySelector('.diary-customer-portifolios-add');
    const command = document.querySelector('.diary-customer-portifolios-add-cancel-command');
    command.addEventListener('click', () => {
        container.classList.remove('opened');
    });
}

function open_close_diary_customer_portifolios_add () {
    open_diary_customer_portifolios_add();
    remove_diary_customer_portifolios_add();
}

export default open_close_diary_customer_portifolios_add;