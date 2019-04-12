let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

function facebook() {
    window.open("https://www.facebook.com");
}
function snapchat() {
    alert("Go to my contact me page");
}
function linkedin() {
    window.open("https://www.linkedin.com/in/izaac-crooke-213220b3/");
}
function instagram(){
    window.open("https://www.instagram.com/izaac_crooke/");
}

function aboutpage() {
    document.location.href = "about.html";
}
function goToAbout() {
    document.location.href = "services.html";
}
$(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
});

function myFunction() {
    var x = document.getElementById("js-menu");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}

