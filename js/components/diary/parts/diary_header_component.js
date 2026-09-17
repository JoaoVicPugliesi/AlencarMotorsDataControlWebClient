function diary_header_component(mode, date) {
    if (mode === 'read') {
        return `
            <div class="diary-header">
                <span class="diary-label">
                    DIÁRIO
                </span>
                <div class="diary-date-command">
                    <input type="date" value="${date}">
                </div>
            </div>
        `;
    }
    return `
        <div class="diary-header">
            <span class="diary-label">DIÁRIO</span>
            <span class="diary-date">
                ${date.split('-').reverse().join('-')}
            </span>
        </div>
    `;
}

export default diary_header_component;