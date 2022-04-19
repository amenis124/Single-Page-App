//JS function to be able to change to dark mode, then save what the user has inputted into local storage

window.onload = function () {
    // Try to read from local storage, otherwise set to default/lightheme
    let currentTheme = localStorage.getItem("darktheme") || "default";

    setTheme("light", currentTheme);

    const darkTheme = document.getElementById("dark-theme");
    darkTheme.value = currentTheme;

    darkTheme.addEventListener("change", function (e) {
        const newTheme = e.currentTarget.value;
        // Setting the theme
        setTheme(currentTheme, newTheme);
    });

    function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body")[0];

        // Removing the old theme selected
        body.classList.remove(oldTheme);
        // Adding the new theme selected
        body.classList.add(newTheme);

        //Set the new theme selected as the current theme showing
        currentTheme = newTheme;

        // Store in local storage
        localStorage.setItem("darktheme", newTheme);
    }
};