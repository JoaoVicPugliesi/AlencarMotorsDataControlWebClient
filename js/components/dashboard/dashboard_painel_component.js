function dashboard_painel_component () {
    return `
        <div class="dashboard-painel">
            <div class="dashboard-painel-display">
                <div class="dashboard-painel-display-header">
                    <div><h3>DADOS EM FORMA DE GRÁFICOS</h3></div>
                </div>
                <div class="dashboard-painel-display-charts">
                    <canvas class="dashboard-painel-display-bar-chart"></canvas>
                    <canvas class="dashboard-painel-display-donut-chart"></canvas>
                </div>
            </div>
            <div class="dashboard-painel-commands">
                <button class="dashboard-painel-comeback-command">Voltar</button>
            </div>
        </div>
    `
}

export default dashboard_painel_component;