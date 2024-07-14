document.addEventListener("DOMContentLoaded", function () {
    function confirmExit() {
        if (window.confirm("Are you sure you want to exit?")) {
            window.close(); 
        }
    }
    
    var exitButton = document.querySelector('.exit-button');
    if (exitButton) {
        exitButton.addEventListener('click', confirmExit);
    }
});