function dashboard_period_component() {
    return `
        <div class="dashboard-period">
            <div class="dashboard-period-initial-date">
                <span>Data Inicial</span>
                <input type="date" />
            </div>
            <div class="dashboard-period-final-date">
                <span>Data Final</span>
                <input type="date"/>
            </div>
            <div class="dashboard-period-commands">
                <button class="dashboard-period-search-command">Buscar</button>
                <button class="dashboard-period-comeback-command">Voltar</button>
            </div>
        </div>
    `
}

export default dashboard_period_component;