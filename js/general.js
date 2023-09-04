
fetch('/templates/nav.html').then(res => res.text()).then(function (html) {
    document.getElementById('nav').innerHTML = html;

    document.querySelectorAll('.nav-link').forEach(function (navItem) {
        if (navItem.href == window.location.href) {
            navItem.classList.add('active')
        }
    })
});