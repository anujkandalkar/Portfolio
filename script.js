    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });
