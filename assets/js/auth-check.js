auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href = "kpi_dashboard.html";
    }
});
