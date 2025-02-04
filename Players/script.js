window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.pn');
  const currentSection = Math.round(window.scrollY / window.innerHeight); 

  sections.forEach((section, index) => {
    if (index === currentSection) {
      section.style.display = 'flex'; 
    } else {
      section.style.display = 'none'; 
    }
  });
});