import show_message from "../../helpers/show_message.js";
import update_customers from "../../infra/use_cases/customer/update_customers.js";
import get_current_date from '../../helpers/get_current_date.js';

function update_diary_customers() {
    const commands = document.querySelectorAll('.diary-customer-portifolio-info-update');
    const container = document.querySelector('.diary-customer-portifolios-list');
    commands.forEach((c) => {
        c.addEventListener('click', async () => {
            const params = JSON.parse(c.getAttribute('data-params'));
            params.status_updated_at = get_current_date();
            if (params.status === 'comprou') {
                params.status = 'não comprou';
            } else if (params.status === 'não comprou') {
                params.status = 'comprou';
            }
            c.setAttribute('data-params', JSON.stringify(params));
            const loading_message = show_message(
                container,
                'loading',
                'Atualizando cliente'
            );
            const { status, json } = await update_customers(params);
            loading_message.remove();
            if (status !== 200) {
                show_message(container, 'error', json.message);
                return;
            }

            const parent = c.closest(
                '.diary-customer-portifolio-info'
            );

            parent.querySelector('.diary-customer-portifolio-info-status h3').textContent =
                params.status;

            parent.querySelector('.diary-customer-portifolio-info-last-updated h3').textContent =
                params.status_updated_at
                    .split('-')
                    .reverse()
                    .join('-');
        });
    })
}

export default update_diary_customers;