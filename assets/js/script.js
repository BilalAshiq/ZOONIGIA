 document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.dark-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
      });

      const tabs = document.querySelectorAll('.register-tabs .btn');
      const forms = {
        Student: `<input type='text' placeholder='Full Name'><input type='email' placeholder='Email Address'><input type='text' placeholder='Grade'><input type='password' placeholder='Password'>`,
        School: `<input type='text' placeholder='School Name'><input type='email' placeholder='School Email'><input type='text' placeholder='Location'><input type='password' placeholder='Password'>`,
        Collaborator: `<input type='text' placeholder='Name'><input type='email' placeholder='Organization Email'><input type='text' placeholder='Affiliation'><input type='password' placeholder='Password'>`,
        Sponsor: `<input type='text' placeholder='Sponsor Name'><input type='email' placeholder='Contact Email'><input type='text' placeholder='Company'><input type='password' placeholder='Password'>`
      };

      const formContainer = document.querySelector('.register-form');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          formContainer.innerHTML = forms[tab.innerText] + "<button type='submit' class='btn btn-signup'>Sign Up</button>";
        });
      });
    });

    // READ MORE SCRIPT
    document.addEventListener('DOMContentLoaded', () => {
  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.event-card');
      const moreText = card.querySelector('.more-text');
      moreText.style.display = (moreText.style.display === 'none' || moreText.style.display === '') ? 'inline' : 'none';
      btn.innerText = (moreText.style.display === 'none') ? 'Read more' : 'Read less';
    });
  });
});


  const openModalBtns = document.querySelectorAll('.open-modal');
  const modal = document.getElementById('partner-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const type = btn.getAttribute('data-type');
      modalTitle.innerText = `${type} with Zoonigia`;
      modalDesc.innerText = `Please fill out the form to express your interest in ${type.toLowerCase()}ing with us.`;
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Cart Count
  let cartCount = 0;
  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  }

  // Modal Form Functions
  function openForm(campaign) {
    document.getElementById("formModal").style.display = "flex";
    const formTitle = document.getElementById("form-title");
    if (campaign === "nasa") formTitle.textContent = "Apply for NASA Citizen Science";
    if (campaign === "iasc") formTitle.textContent = "Apply for IASC Collaboration";
    if (campaign === "school") formTitle.textContent = "Enroll Your School";
  }

  function closeForm() {
    document.getElementById("formModal").style.display = "none";
  }

   function openForm(campaign) {
  document.getElementById("formModal").style.display = "flex";
  const formTitle = document.getElementById("form-title");
  if (campaign === "nasa") formTitle.textContent = "Apply for NASA Citizen Science";
  if (campaign === "iasc") formTitle.textContent = "Apply for IASC Collaboration";
  if (campaign === "school") formTitle.textContent = "Enroll Your School";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}


document.addEventListener('DOMContentLoaded', () => {
  const scrollItems = document.querySelectorAll('.scroll-animate');

  const checkVisibility = () => {
    scrollItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check visibility when the page loads
});

// TYPING ANIMATION SCRIPT
const texts = [
    "Empowering Collaboration",
    "Inspiring Innovation",
    "Connecting the World"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  const typingElement = document.getElementById("typing");

  function type() {
    if (count === texts.length) {
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => erase(), 2000); // pause before erasing
    } else {
      setTimeout(type, 100); // typing speed
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    typingElement.textContent = letter;

    if (letter.length === 0) {
      count++;
      setTimeout(type, 500); // pause before next type
    } else {
      setTimeout(erase, 50); // erasing speed
    }
  }

  // Start the loop
  type();

  // REGISTER FORM ANIMATION SCRIPT
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.fade-in-section, .fade-in-left, .fade-in-right, .slide-in')
    .forEach(el => observer.observe(el));

  //EVENT CARD ANIMATIONS
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.2 });

    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => observer.observe(card));
  });

  document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.3, // Trigger when 30% of the element is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add animation class
      } else {
        // Optionally remove the animation class when out of view (if needed)
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  // Sections to observe
  const sectionsToAnimate = [
    document.querySelector('.partner-section'),
    document.querySelector('.shop-section'),
    document.querySelector('.campaigns-section'),
    document.querySelector('.contact-section')
  ];

  // Start observing the sections
  sectionsToAnimate.forEach(section => {
    if (section) observer.observe(section);
  });
});

  document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.3, // Triggers when 30% of the element is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Adds the animation class
      } else {
        // Optional: Remove the animation class when the element is out of view
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  // Select the sections you want to observe
  const sectionsToAnimate = [
    document.querySelector('.hero'),
    document.querySelector('.register-section'),
    document.querySelector('.shop-section'),
    document.querySelector('.countdown-section'),
    document.querySelector('.courses-section'),
    document.querySelector('.tour-section'),
    ...document.querySelectorAll('.event-card') // Include any dynamic content like event cards
  ];

  // Start observing all the sections
  sectionsToAnimate.forEach(section => {
    if (section) observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Define options for IntersectionObserver (trigger when 30% of the section is visible)
  const observerOptions = {
    threshold: 0.3, 
  };

  // Create the IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add animation class when the section is in view
      }
    });
  }, observerOptions);

  // Select sections to observe
  const sections = [
    document.querySelector('.partner-section'),
    document.querySelector('.shop-section'),
    document.querySelector('.campaigns-section'),
    document.querySelector('.contact-section'),
  ];

  // Make sure all sections exist before observing
  sections.forEach(section => {
    if (section) {
      observer.observe(section); // Start observing each section
    }
  });
});

