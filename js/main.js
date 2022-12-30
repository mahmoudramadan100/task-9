let list = document.querySelector('.dashboard-list');
let app = document.querySelector('.applications');
let navSmall = document.querySelector('.small-menu');
let showMenu = document.querySelector('.show-menu');
let arrow = document.querySelector('.arrow');
let checkbox = document.querySelector("input[name=theme_switch]");
const toggleSidebar = () => document.body.classList.toggle("open");



list.onclick = function() {
    navSmall.classList.toggle("show");
    list.classList.toggle("arrow-icon")
}
app.onclick = function() {
    showMenu.classList.toggle("show");
    app.classList.toggle("arrow-icon")
}



        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.documentElement.setAttribute("data-theme", "light");
        checkbox.checked = true;
        } else {
        document.documentElement.setAttribute("data-theme", "dark");
        checkbox.checked = false;
        }

        // switch theme if checkbox is engaged
        checkbox.addEventListener("change", (cb) => {
        document.documentElement.setAttribute(
            "data-theme",
            cb.target.checked ? "light" : "dark"
        );
        });