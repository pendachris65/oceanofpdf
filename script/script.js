const buttons = document.querySelectorAll('.faq-button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.parentElement.nextElementSibling;
    
    // Toggle answer visibility
    answer.classList.toggle('show');
    
    // Toggle rotation
    btn.classList.toggle('rotate');
  });
});
