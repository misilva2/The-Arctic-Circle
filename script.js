const themeToggle = document.getElementById("theme-toggle");
const storageKey = "arctic-theme";

const applyTheme = (theme) => {
    if (theme === "night" || theme === "day") {
        document.body.setAttribute("data-theme", theme);
        return;
    }
    document.body.removeAttribute("data-theme");
};

const updateToggleLabel = (theme) => {
    if (!themeToggle) return;
    const isNight = theme === "night";
    themeToggle.setAttribute("aria-pressed", String(isNight));
    themeToggle.textContent = isNight ? "Switch to Day Mode" : "Switch to Night Mode";
};

const savedTheme = localStorage.getItem(storageKey);
applyTheme(savedTheme);
updateToggleLabel(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        const nextTheme = currentTheme === "night" ? "day" : "night";
        applyTheme(nextTheme);
        localStorage.setItem(storageKey, nextTheme);
        updateToggleLabel(nextTheme);
    });
}
