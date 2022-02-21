const openSubMenu = (divId) => {
    let ele = document.getElementById(divId)
    let btn = document.getElementById("btn-" + divId);
    btnClassName = "btn-sidebar-item hover:bg-gray-700 rounded-full";

    btn.className === btnClassName ? (
        ele.style.display = ele.style.display === 'block' ? "none" : "block"
    ): (
        ele.style.display = ele.style.display === 'none' ? "block" : "none"
    );

    btn.className = btn.className === btnClassName ? btnClassName+" rotate-180" : btnClassName
};

function sidebarHandler() {
    let btnSidebar = document.getElementById("btn-sidebar");
    let sidebar = document.getElementById('sidebar');
    let width = sidebar.style.width;
    if (width === "0px") {
        btnSidebar.style.transform = "rotate(0deg)";
        sidebar.style.width = "256px";
    } else {
        sidebar.style.width = "0px";
        btnSidebar.style.transform = "rotate(180deg)";
    }
};



(dateTime = () => {
    var today = new Date();
    today = today.toLocaleString('un-US', { hour12: true })
    document.getElementById('time').innerHTML = today;

    setTimeout(function () {
        dateTime()
    }, 1000);
})();
