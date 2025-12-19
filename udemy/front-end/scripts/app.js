document.addEventListener("DOMContentLoaded", () => {
    const icon = () => document.querySelector(".fa-moon, .fa-sun"); // selects whichever exists
    const showcase = document.querySelector(".showcase");
    const logo = document.querySelector(".emongolia_logo");
    let isDark = false;

    const toggleTheme = () => {
        const currentIcon = icon();

        if (!isDark) {
            // DARK MODE
            document.documentElement.style.setProperty("--color-gray-50", "#03102F");
            document.documentElement.style.setProperty("--color-gray-200", "#4B515F");
            document.documentElement.style.setProperty("--btn-ligth-blue", "#1A314D");
            document.documentElement.style.setProperty("--white-pure", "#1E2A40");
            document.documentElement.style.setProperty("--color-gray-900", "#ffffff");

            document.querySelectorAll("h4").forEach(h4 => h4.style.color = "white");
            document.querySelectorAll(".login_btn i, .login_btn a").forEach(el => el.style.color = "white");

            logo.src = "/photos/emongolia_big_dark_logo.png";

            showcase.style.setProperty(
                "background-image",
                "url('https://cache.e-mongolia.mn/files/portal-v5/images/home/main-dark.svg')",
                "important"
            );

            currentIcon.classList.add("fa-sun");
            currentIcon.classList.remove("fa-moon");

            isDark = true;
        } else {
            // LIGHT MODE
            // DARK MODE – your custom variables
            document.documentElement.style.setProperty("--main-text", "#e5e7eb");
            document.documentElement.style.setProperty("--inactive-text", "#9ca3af");
            document.documentElement.style.setProperty("--header-btn", "#38bdf8");
            document.documentElement.style.setProperty("--sub-text", "#b0b0b0");
            document.documentElement.style.setProperty("--star-text", "#f59e0b");
            document.documentElement.style.setProperty("--bestseller-container", "#3a2f14");
            document.documentElement.style.setProperty("--bestseller-text", "#fde68a");
            document.documentElement.style.setProperty("--search-background", "#1f2933");
            document.documentElement.style.setProperty("--line", "#374151");
            document.documentElement.style.setProperty("--sub-li-text", "#6b7280");
            document.documentElement.style.setProperty("--shadow", "rgba(0, 0, 0, 0.6)");
            document.documentElement.style.setProperty("--primary-white", "#111827");
            document.documentElement.style.setProperty("--submit-green", "#22c55e");
            document.documentElement.style.setProperty("--light-green", "#4ade80");
            document.documentElement.style.setProperty("--login-red", "#f87171");


            document.querySelectorAll("h4").forEach(h4 => h4.style.color = "black");
            document.querySelectorAll(".login_btn i, .login_btn a").forEach(el => el.style.color = "black");

            logo.src = "/photos/E_Mongolia_Big_logo.jpg";

            showcase.style.setProperty(
                "background-image",
                "url('https://cache.e-mongolia.mn/files/portal-v5/images/home/main-light.svg')",
                "important"
            );

            currentIcon.classList.add("fa-moon");
            currentIcon.classList.remove("fa-sun");

            isDark = false;
        }
    };

    // Add listener to whichever icon exists
    icon().addEventListener("click", toggleTheme);
});
