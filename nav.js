document.addEventListener("DOMContentLoaded", function () {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').outerHTML = data;
        })
        .catch(error => console.error('Error loading navigation bar:', error));
    });


    

