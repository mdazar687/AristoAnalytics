let navItem3 = document.getElementById('navItem3');
let sectionHome = document.getElementById('sectionHome');
let illumiLogo = document.getElementById('illumiLogo');
let pricingSection = document.getElementById('pricingSection');
let loginLogo = document.getElementById('loginLogo');
let navbar = document.getElementById('navbar');
let loginbutton = document.getElementById('navItem5');
let loginSection = document.getElementById('loginSection');
let getStartButton = document.getElementById('navItem6');
let getStartSection = document.getElementById('getStartSection');
let getStartLogo = document.getElementById('getStartLogo');
let getStartLoginButton = document.getElementById('getStartLoginButton');
let loginCreateAccountButton = document.getElementById('loginCreateAccountButton');
let headerGetStartButton = document.getElementById('headerGetStartButton');
let courseCreationGetStartButton = document.getElementById('courseCreationGetStartButton');
let footerSection = document.getElementById('footerSection');
let faqGetStartButton = document.getElementById('faqGetStartButton');
let footerLoginButton = document.getElementById('footerLoginButton');
let footerRegisterButton = document.getElementById('footerRegisterButton');
let footerPricingButton = document.getElementById('footerPricingButton');
let higherEducationSection = document.getElementById('higherEducationSection');
let navbarHigherEduButton = document.getElementById('navbarHigherEduButton');
let footerHigherEduButton = document.getElementById('footerHigherEduButton');

illumiLogo.onclick = function() {
    sectionHome.classList.remove('d-none');
    pricingSection.classList.add('d-none');
    loginSection.classList.add('d-none');
    getStartSection.classList.add('d-none');
    footerSection.classList.remove('d-none');
    higherEducationSection.classList.add('d-none');
};
navItem3.onclick = function() {
    pricingSection.classList.remove('d-none');
    sectionHome.classList.add('d-none');
    footerSection.classList.remove('d-none');
    loginSection.classList.add('d-none');
    getStartSection.classList.add('d-none');
    higherEducationSection.classList.add('d-none');
};
loginLogo.onclick = function() {
    navbar.classList.remove('d-none');
    loginSection.classList.add('d-none');
    sectionHome.classList.remove('d-none');
    footerSection.classList.remove('d-none');
};

loginbutton.onclick = function() {
    sectionHome.classList.add('d-none');
    navbar.classList.add('d-none');
    loginSection.classList.remove('d-none');
    pricingSection.classList.add('d-none');
    footerSection.classList.add('d-none');
};

getStartLogo.onclick = function() {
    navbar.classList.remove('d-none');
    getStartSection.classList.add('d-none');
    sectionHome.classList.remove('d-none');
    footerSection.classList.remove('d-none');
};

getStartButton.onclick = function() {
    sectionHome.classList.add('d-none');
    navbar.classList.add('d-none');
    getStartSection.classList.remove('d-none');
    pricingSection.classList.add('d-none');
    footerSection.classList.add('d-none');
};

getStartLoginButton.onclick = function() {
    getStartSection.classList.add('d-none');
    loginSection.classList.remove('d-none');
};

loginCreateAccountButton.onclick = function() {
    getStartSection.classList.remove('d-none');
    loginSection.classList.add('d-none');
    footerSection.classList.add('d-none');
};

headerGetStartButton.onclick = function() {
    sectionHome.classList.add('d-none');
    getStartSection.classList.remove('d-none');
    footerSection.classList.add('d-none');
};

courseCreationGetStartButton.onclick = function() {
    sectionHome.classList.add('d-none');
    getStartSection.classList.remove('d-none');
    footerSection.classList.add('d-none');
};

faqGetStartButton.onclick = function() {
    navbar.classList.add('d-none');
    sectionHome.classList.add('d-none');
    footerSection.classList.add('d-none');
    loginSection.classList.remove('d-none');
};

footerLoginButton.onclick = function() {
    loginSection.classList.remove('d-none');
    sectionHome.classList.add('d-none');
    navbar.classList.add('d-none');
    pricingSection.classList.add('d-none');
    footerSection.classList.add('d-none');
};

footerRegisterButton.onclick = function() {
    getStartSection.classList.remove('d-none');
    sectionHome.classList.add('d-none');
    navbar.classList.add('d-none');
    pricingSection.classList.add('d-none');
    footerSection.classList.add('d-none');
};

footerPricingButton.onclick = function() {
    pricingSection.classList.remove('d-none');
    sectionHome.classList.add('d-none');
    footerSection.classList.remove('d-none');
    loginSection.classList.add('d-none');
    getStartSection.classList.add('d-none');
};

navbarHigherEduButton.onclick = function() {
    higherEducationSection.classList.remove('d-none');
    pricingSection.classList.add('d-none');
    sectionHome.classList.add('d-none');
}

footerHigherEduButton.onclick = function() {
    higherEducationSection.classList.remove('d-none');
    pricingSection.classList.add('d-none');
    sectionHome.classList.add('d-none');
}

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    const iconBars = document.querySelector('.navbar-toggler .fa-bars');
    const iconTimes = document.querySelector('.navbar-toggler .fa-times');

    if (navbarMenu.style.display === "block") {
        navbarMenu.style.display = "none";
        iconBars.style.display = "block";
        iconTimes.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
        iconBars.style.display = "none";
        iconTimes.style.display = "block";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const reviewsCarousel = document.getElementById('reviewsCarousel');
    let cardWidth = getCardWidth(); // Get initial card width
    let scrollPosition = 0;

    function getCardWidth() {
        // Use the first card to determine the current width
        return reviewsCarousel.children[0].offsetWidth;
    }

    // Clone the first three cards to make the carousel loop infinite
    for (let i = 0; i < 3; i++) {
        const clone = reviewsCarousel.children[i].cloneNode(true);
        reviewsCarousel.appendChild(clone);
    }

    // Update card width on resize
    window.addEventListener('resize', function() {
        cardWidth = getCardWidth();
    });

    // Function to scroll the carousel
    function scrollReviews() {
        scrollPosition += 2; // Speed of the scroll - increase or decrease as needed

        if (scrollPosition >= cardWidth) {
            // Shift the first card to the end to give an infinite loop effect
            reviewsCarousel.appendChild(reviewsCarousel.children[0]);
            reviewsCarousel.style.transition = 'none'; // Disable transition to reposition
            reviewsCarousel.style.transform = 'translateX(0)'; // Reset transform
            scrollPosition = 0; // Reset scroll position
            // Force reflow to apply the reset transform without transition
            reviewsCarousel.offsetWidth;
            reviewsCarousel.style.transition = 'transform 0.2s ease-out'; // Re-enable transition
        } else {
            reviewsCarousel.style.transform = `translateX(-${scrollPosition}px)`;
        }
    }

    // Start the scrolling using setInterval
    setInterval(scrollReviews, 20); // The second parameter is how often to move the carousel (in milliseconds)
});





document.addEventListener('DOMContentLoaded', function() {
    var yearlyBtn = document.getElementById('yearly-btn');
    var monthlyBtn = document.getElementById('monthly-btn');
    var yearlyCards = document.querySelector('.yearly-cards');
    var monthlyCards = document.querySelector('.monthly-cards');

    yearlyBtn.addEventListener('click', function() {
        monthlyCards.classList.remove('d-md-flex', 'active');
        monthlyCards.style.display = 'none'; // Override Bootstrap's display style
        yearlyCards.style.display = ''; // Clear any inline styles
        yearlyCards.classList.add('d-md-flex', 'active');
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
    });

    monthlyBtn.addEventListener('click', function() {
        yearlyCards.classList.remove('d-md-flex', 'active');
        yearlyCards.style.display = 'none'; // Override Bootstrap's display style
        monthlyCards.style.display = ''; // Clear any inline styles
        monthlyCards.classList.add('d-md-flex', 'active');
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var expandAllButton = document.querySelector('.expand-all');
    expandAllButton.addEventListener('click', function() {
        var accordionItems = document.querySelectorAll('.pricing-section .accordion-item .accordion-collapse');

        if (this.textContent.includes('Expand')) {
            accordionItems.forEach(function(item) {
                new bootstrap.Collapse(item, 'show');
            });
            this.textContent = 'Collapse All';
        } else {
            accordionItems.forEach(function(item) {
                new bootstrap.Collapse(item, 'hide');
            });
            this.textContent = 'Expand All';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.querySelector('.icon-accordion').classList.toggle('rotate-icon');
        });
    });
});