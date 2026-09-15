function dashboard_field_component(name, code, total) {
    return `
        <div class="dashboard-field-component" data-total="${total}" data-code="${code}">
            <div >
                <h3>${name}</h3>
            </div>
            <div>
                <h3>${total}</h3>
            </div>
        </div>
    `
}

export default dashboard_field_component;