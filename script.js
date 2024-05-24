document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    showSlide(currentSlide);
});



// For REpsonsive navbar

// document.addEventListener("DOMContentLoaded", function() {
//     const hamburger = document.querySelector(".hamburger");
//     const navLinks = document.querySelector(".navmobile");

//     hamburger.addEventListener("click", function() {
//         navLinks.classList.toggle(".active")
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
 
    const navmobile = document.querySelector(".navmobile");

    // Event listener for hamburger icon click
    hamburger.addEventListener("click", function() {
        // Toggle the visibility of the navigation links
        if (navmobile.style.display === "flex") {
            navmobile.style.display = "none"; // Show desktop navigation links
           // Hide mobile navigation links
        } else {
           // Hide desktop navigation links
            navmobile.style.display = "flex"; // Show mobile navigation links
        }
    });

    if(window.innerWidth > 768)
    {
        navmobile,style.display="none"
    }
});

  



