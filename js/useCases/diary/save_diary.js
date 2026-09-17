import get_current_date from "../../helpers/get_current_date.js";
import show_message from "../../helpers/show_message.js";
import get_stats from "../../infra/use_cases/stat/get_stats.js";
import post_stats_diary from "../../infra/use_cases/stat/post_stats_diary.js";
import open_close_diary from "./open_close_diary.js";

function save_diary(id, container, painel) {
    const save = container.querySelector(
        '.diary-save-command'
    );
    if (save) {
        save.removeEventListener('click', () => { })
        save.addEventListener('click', async () => {
            const title = document.querySelector('.employees-main-painel-diary-title').value;
            const description = document.querySelector('.employees-main-painel-diary-description').value;
            const employees_main_painel_diary_command = document.querySelector('.employees-main-painel-diary-command');
            const current_date = get_current_date();
            const diary = {
                title: title,
                description: description
            }
            const loading_message = show_message(
                container,
                'loading',
                'Salvando diário'
            );
            const res = await post_stats_diary(id, diary);
            loading_message.remove();
            if (!res) return;
            const { status, json } = await get_stats('month', null, null, id);
            const { stats, initial_day, final_day } = json;
            open_close_diary(
                id,
                employees_main_painel_diary_command,
                'write',
                stats,
                current_date,
                container,
                painel
            );
        });
    }
}

export default save_diary;
