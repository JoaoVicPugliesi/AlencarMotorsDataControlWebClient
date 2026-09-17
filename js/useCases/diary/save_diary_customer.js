import get_current_date from '../../helpers/get_current_date.js'
import show_message from '../../helpers/show_message.js'
import post_customers from '../../infra/use_cases/customer/post_customers.js';

function save__diary_customer (id) {
    const container = document.querySelector('.diary-customer-portifolios-add');
    const parent = document.querySelector('.diary-page');
    const save = document.querySelector(
        '.diary-customer-portifolios-add-save-command'
    );
    save.addEventListener('click', async () => {
        const name_i = document.querySelector(
            '.diary-customer-portifolios-add-name'
        ).value;
        const phone_i = document.querySelector(
            '.diary-customer-portifolios-add-phone'
        ).value;
        const origin_i = document.querySelector(
            '.diary-customer-portifolios-add-origin'
        ).value;
        const status_i = document.querySelector(
            '.diary-customer-portifolios-add-status'
        ).value;
        if (!name_i || !phone_i || !origin_i || !status_i) {
            show_message(
                parent,
                'error',
                'Os campos precisam ser preenchidos'
            );
            return;
        }
        const added_at = get_current_date();
        const params = {
            employee_id: id,
            name: name_i,
            phone: phone_i,
            added_at: added_at,
            origin: origin_i,
            status: status_i,
            status_updated_at: added_at
        };
        const loading_message = show_message(
            parent,
            'loading',
            'Salvando o cliente'
        );
        const { status, json } = await post_customers(params);
        loading_message.remove();
        if (status !== 201) {
            show_message(
                parent,
                'error',
                json.message
            );
            return;
        }

        show_message(
            parent,
            'success',
            json.message
        );

        container.classList.remove('opened');
    });
}

export default save__diary_customer;