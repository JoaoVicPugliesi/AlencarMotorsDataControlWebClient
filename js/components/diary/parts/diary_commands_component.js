function diary_commands_component(mode) {
    let commands;
    if (mode === 'write') {
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
        return commands;
    }
    if (mode === 'read') {
        commands = `
            <div class="diary-commands">
                <button class="diary-comeback-command">
                    VOLTAR
                </button>
            </div>
        `;
        return commands;
    }
}

export default diary_commands_component;