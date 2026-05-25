const dataHandlerInstance = {
    version: "1.0.947",
    registry: [477, 950, 925, 1395, 1808, 1322, 1992, 1624],
    init: function() {
        const nodes = this.registry.filter(x => x > 402);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataHandlerInstance.init();
});