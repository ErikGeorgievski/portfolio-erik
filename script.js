/*NAVBAR FUNCTION*/ 
function myMenuFunction(){
  const menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  }else{
    menuBtn.className = "nav-menu";
  }
}

/*ADD SHADOW ON NAV*/ 
window.onscroll = function(){headerShadow()}

  function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

      navHeader.style.boxShadow = "0 1 px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px" ;

    } else {

      
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px" ;

    }
  }

const textContainer = document.querySelector('.text-container');
const animatedText = document.querySelector('.animated-text');
const words = ['Developer', 'UX Designer', 'E-Commerce'];

let currentWordIndex = 0;

function animateText() {
  anime({
    targets: animatedText,
    translateY: ['100%', '0%'],
    opacity: [0, 1],
    color: ['#28C0CD', '#28C0CD'],
    easing: 'easeOutExpo',
    duration: 1500,
    complete: function() {
      setTimeout(() => {
        anime({
          targets: animatedText,
          translateY: ['0%', '-100%'],
          opacity: 0,
          easing: 'easeInExpo',
          duration: 1000,
          complete: function() {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            animatedText.textContent = words[currentWordIndex];
            animateText(); // Starta om animationen för nästa ord
          }
        });
      }, 1000); // Vänta 1 sekund innan nästa ord
    }
  });
}

// Starta animationen för första gången
animateText();



  /*SCROLL REVEAL ANIMATION*/ 
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true

  })
/*HOME*/
 sr.reveal('.featured-text-card',{});
 sr.reveal('.featured-name',{delay: 100});
 sr.reveal('.featured-text-info',{delay: 200});
 sr.reveal('.featured-text-btn',{delay: 200});
 sr.reveal('.social_icons',{delay: 200});
 sr.reveal('.featured-image',{delay: 300});


/*PROJECT BOX*/ 
sr.reveal('.project-box',{delay: 200});

/*HEADINGS*/ 
sr.reveal('.top-header',{});


/*SCROLL REVEAL*/

sr.reveal('.about-info',{delay: 200});
sr.reveal('.contact-info',{delay: 200});




sr.reveal('.skills-box',{delay: 200});
sr.reveal('.form-control',{delay: 200});

/*CHANGE ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY= window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
     sectionTop = current.offsetTop - 50,
  sectionId = current.getAttribute('id');   


  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

    document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link');

  }else{

    document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link');

  }
    
  })


}
window.addEventListener('scroll', scrollActive)




emailjs.init("bSqp-dzFNCU3tNzb9"); 

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    emailjs.send("service_r7tnlye", "template_6qkg44b", {
        to_name: "Erik Georgievski",
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        console.log("E-post skickat:", response);
        showSuccessMessage(); 
        resetForm();
    }, function(error) {
        console.error("Ett fel uppstod:", error);
    });
}

function showSuccessMessage() {
  var successMessage = document.getElementById("success-message");
  successMessage.innerHTML = "Thank you for sending the email! I will contact you soon.";
  successMessage.style.display = "block"; // Visa meddelandet
}

function resetForm() {
  var form = document.getElementById("form");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  nameInput.value = ""; // Återställ värdena till tomma strängar
  emailInput.value = "";
  messageInput.value = "";

  
}

/* NAVBAR FUNCTION */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ADD SHADOW ON NAV */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* CHANGE ACTIVE LINK */
const parts = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  parts.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu_list a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav_menu_list a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* CLOSE NAV MENU ON LINK CLICK */
document.querySelectorAll('.nav_menu_list a').forEach((link) => {
  link.addEventListener('click', () => {
    const menuBtn = document.getElementById('myNavMenu');
    menuBtn.className = 'nav-menu'; // Stäng menyn när en länk klickas
  });
});

// Check if the user has a dark mode preference in localStorage
const userPrefersDarkMode = localStorage.getItem('dark-mode') === 'true';

// Apply dark mode if the user prefers it
if (userPrefersDarkMode) {
    document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
    const body = document.body;

    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    // Save the user's preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode.toString());
}

// Check for dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add click event listener to the dark mode toggle button
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
