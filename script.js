
    // --- Burger Menü ---
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // --- Dark Mode Button ---
    const darkBtn = document.querySelector(".dark-toggle");

    function setDarkMode(on) {
      if (on) {
        document.body.classList.add("dark-mode");
        darkBtn.textContent = "☀️";
      } else {
        document.body.classList.remove("dark-mode");
        darkBtn.textContent = "🌙";
      }
    }

    // Button-Klick für Dark Mode
    darkBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      setDarkMode(!isDark);
    });

    // --- System Dark Mode beim Laden prüfen ---
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // --- System Dark Mode Änderungen überwachen ---
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setDarkMode(e.matches);
    });

