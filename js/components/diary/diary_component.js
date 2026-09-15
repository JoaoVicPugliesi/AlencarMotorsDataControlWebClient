import diary_commands from "./diary_commands.js";
import diary_customer_portifolios_component from "./diary_customer_portifolios_component.js";

function diary_component(mode, date, diary) {
    const {
        title,
        description
    } = diary ?? {};
    const splited_reversed_formatted =
        date.split('-').reverse().join('-');
    return `
        <div class="diary-page">
            ${diary_customer_portifolios_component(mode)}
            <div class="diary-header">
                <span class="diary-label">DIÁRIO</span>
                <span class="diary-date">
                    ${splited_reversed_formatted}
                </span>
            </div>
            <input
                class="employees-main-painel-diary-title"
                type="text"
                value="${title}"
            >
            <textarea
                class="employees-main-painel-diary-description"
                maxlength="1000"
            >${description}</textarea>
            ${diary_commands(mode)}
        </div>
    `;
}

export default diary_component;