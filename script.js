//
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYa4yQwQbseMvEqPdvDMPU9sC4XiAphFHX09sjTH_y2THlwdgVXOln_mN0T7XMmDeJbQ/exec';
        const form = document.forms['hunter'];
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    if (response.ok) {
                        alert("Submitted Sucessefully !!! We will reach you as soon as possible to help you for the problem that you are facing and we will fight together for it legally.");
                        form.reset();
                    } else {
                        throw new Error("Oops! Something went wrong.");
                    }
                })
                .catch(error => {
                    console.error('ERROR!', error.message);
                    alert("Oops! Something went wrong. Please try again.");
                });
        });

// navigation menu bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// progress bar for scrolling of the page
  const scrollline = document.querySelector('.scroll-line');

  function fillscrollline(){
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    scrollline.style.width = percentScrolled + '%';
  };

  window.addEventListener('scroll', fillscrollline);

//navigate to the top button
  let mybutton = document.getElementById("myBtn");


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

// Listen for changes in radio buttons and update the currentSlide accordingly
const radioButtons = document.querySelectorAll('input[name="toggle"]');
radioButtons.forEach((radioButton, index) => {
radioButton.addEventListener('change', () => {
  currentSlide = index;
  updateCarousel();
});
});

startCarousel();

// Cards For About Our Organization



