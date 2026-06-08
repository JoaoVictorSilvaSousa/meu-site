// ===================================================
// SNEAKERSTORE — script.js
// ===================================================

// Navbar: muda opacidade ao rolar
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar-principal');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(255, 102, 0, 0.15)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});

// Marca link ativo da navbar conforme seção visível
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link-custom');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('ativo');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('ativo');
    }
  });
});

// Formulário: feedback de envio
const form = document.querySelector('.formulario-custom');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Mensagem enviada!';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-laranja');
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = 'ENVIAR MENSAGEM <i class="fas fa-paper-plane ms-2"></i>';
      btn.classList.remove('btn-success');
      btn.classList.add('btn-laranja');
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}