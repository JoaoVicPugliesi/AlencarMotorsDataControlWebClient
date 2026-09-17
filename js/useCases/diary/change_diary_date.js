import show_message from "../../helpers/show_message.js";
import get_stats_diary from "../../infra/use_cases/stat/get_stats_diary.js";

function change_diary_date(id) {
    const change = document.querySelector('.diary-date-command input');
    if (change) {
        change.addEventListener('change', async () => {
            const date = change.value;
            const params = {
                employee_id: id,
                date: date
            }
            const { status, json } = await get_stats_diary(params);
            const diary_page = change.closest('.diary-page');
            const title = diary_page.querySelector('.employees-main-painel-diary-title');
            const description = diary_page.querySelector('.employees-main-painel-diary-description');
            if (status === 400) {
                show_message(diary_page, 'error', json.message);
                return;
            }
            title.value = ''; 
            description.value = '';
            if (status === 404) { 
                title.value = 'Sem título'; 
                description.value = 'Sem descrição'
                return; 
            }
            const { diary } = json;
            console.log(diary);
            title.value = diary.title; 
            description.value = diary.description;
        });
    }
}

export default change_diary_date;