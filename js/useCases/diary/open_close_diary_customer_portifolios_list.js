function open_diary_customer_portifolios_list () {
    const command = document.querySelector('.diary-customer-portifolios-list-command');
    const commands = document.querySelector('.diary-customer-portifolios-commands');
    const list = document.querySelector('.diary-customer-portifolios-list');
    command.addEventListener('click', () => {
        list.classList.add('opened');
        commands.classList.add('closed');
    });
}

function close_diary_customer_portifolios_list () {
    const list = document.querySelector('.diary-customer-portifolios-list');
    const command = list.querySelector('.diary-customer-portifolios-comeback-command');
    command.addEventListener('click', () => {
        const commands = document.querySelector('.diary-customer-portifolios-commands');
        list.classList.remove('opened');
        commands.classList.remove('closed');
    });
}

function open_close_diary_customer_portifolios_list () {
    open_diary_customer_portifolios_list();
    close_diary_customer_portifolios_list();
}

export default open_close_diary_customer_portifolios_list;