function togglemanufacturingPanel() {
    
    document.getElementById("accounting-panel").classList.remove("show");
    document.getElementById("home-panel").classList.remove("show");

    // Toggle the visibility of the manufacturing panel
    const manufacturingPanel = document.getElementById("manufacturing-panel");
    manufacturingPanel.classList.toggle("show");
}

function toggleaccountingPanel() {
    // Hide other panels first
    document.getElementById("manufacturing-panel").classList.remove("show");
    document.getElementById("home-panel").classList.remove("show");

    // Toggle the visibility of the accounting panel
    const accountingPanel = document.getElementById("accounting-panel");
    accountingPanel.classList.toggle("show");
}

function togglehomePanel() {
    // Hide other panels first
    document.getElementById("manufacturing-panel").classList.remove("show");
    document.getElementById("accounting-panel").classList.remove("show");

    // Toggle the visibility of the home panel
    const homePanel = document.getElementById("home-panel");
    homePanel.classList.toggle("show");
}