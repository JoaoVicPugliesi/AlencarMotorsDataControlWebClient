function open_diary_customer_portifolios_list () {
    const command = document.querySelector('.diary-customer-portifolios-list-command');
    const commands = document.querySelector('.diary-customer-portifolios-commands');
    const container = document.querySelector('.diary-customer-portifolios-list');
    command.addEventListener('click', () => {
        container.classList.add('opened');
        commands.classList.add('closed');
    });
}

function close_diary_customer_portifolios_list () {
    const container = document.querySelector('.diary-customer-portifolios-list');
    const command = document.querySelector('.diary-customer-portifolios-comeback-command');
    command.addEventListener('click', () => {
        const commands = document.querySelector('.diary-customer-portifolios-commands');
        container.classList.remove('opened');
        commands.classList.remove('closed');
    });
}

function open_close_diary_customer_portifolios_list () {
    open_diary_customer_portifolios_list();
    close_diary_customer_portifolios_list();
}

export default open_close_diary_customer_portifolios_list;