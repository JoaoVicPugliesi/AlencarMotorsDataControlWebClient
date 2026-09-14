function employee_diary_component(mode, date, diary) {
    let commands;
    let portifolios;
    const {
        title,
        description
    } = diary ?? {};
    const splited_reversed_formatted =
        date.split('-').reverse().join('-');
    if (mode === 'write') {
        portifolios = `
            <div class="diary-customer-portifolios">
                <div class="diary-customer-portifolios-list">
                    <h3>Carteiras de clientes</h3>
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="diary-customer-portifolios-add">
                    <h3>Adicionar carteira</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `
        commands = `
            <div class="diary-commands">
                <button class="diary-comeback-command">
                    VOLTAR
                </button>
                <button class="diary-save-command">
                    SALVAR
                </button>
            </div>
        `;
    }
    if (mode === 'read') {
        portifolios = `
            <div class="diary-customer-portifolios">
                <div class="diary-customer-portifolios-list">
                    <h3>Carteiras de clientes</h3>
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="diary-customer-portifolios-add blocked">
                    <h3>Adicionar carteira</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `;
        commands = `
            <div class="diary-commands">
                <button class="diary-comeback-command">
                    VOLTAR
                </button>
            </div>
        `;
    }
    return `
        <div class="diary-page">
            ${portifolios}
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
            ${commands}
        </div>
    `;
}

export default employee_diary_component;