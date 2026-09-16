function diary_main_input_component (class_name, value, is_valued) {
    return `
        <input
            class="${class_name}"
            type="text"
            placeholder="${value}"
            value="${is_valued ? value : ''}"
        >
    `
}

export default diary_main_input_component;