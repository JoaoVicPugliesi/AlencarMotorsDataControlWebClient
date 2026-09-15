function diary_main_input_component (class_name, value) {
    return `
        <input
            class="${class_name}"
            type="text"
            value="${value}"
        >
    `
}

export default diary_main_input_component;