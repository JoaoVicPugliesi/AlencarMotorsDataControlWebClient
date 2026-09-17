import diary_component from "../../components/diary/diary_component.js";
import show_message from "../../helpers/show_message.js";
import change_diary_date from "./change_diary_date.js";
import open_close_diary_customer_portifolios_add_caller from "./open_close_diary_customer_portifolios_add.js";
import open_close_diary_customer_portifolios_list_caller from "./open_close_diary_customer_portifolios_list.js";
import save_diary from "./save_diary.js";

function open_close_diary(id, el, mode, data, date, container, painel) {
    el.addEventListener('click', () => {
        const daily_data = data.find(item => item.date === date);
        if (!daily_data) {
            show_message(painel, 'error', `Não há dados para ${date.split('-').reverse().join('-')}`, 3000);
            return;
        }
        container.innerHTML = diary_component(
            mode,
            daily_data.date,
            daily_data.diary
        );
        container.classList.add('opened');
        const comeback = container.querySelector(
            '.diary-comeback-command'
        );
        comeback.addEventListener('click', () => {
            container.classList.remove('opened');
        });
        save_diary(id, container, painel);
        change_diary_date(id);
        open_close_diary_customer_portifolios_list_caller(id);
        open_close_diary_customer_portifolios_add_caller(id);
    });
}

export default open_close_diary;