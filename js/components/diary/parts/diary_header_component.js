function diary_header_component (date) {
    return ` 
        <div class="diary-header">
            <span class="diary-label">DIÁRIO</span>
            <span class="diary-date">
                ${date}
            </span>
        </div>
    `
}

export default diary_header_component;