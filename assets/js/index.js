window.onload = () => {
  // script for the selection
  document
  .querySelectorAll("input[name='theme']")
  .forEach((input) => {
    input.onclick = () => {
      document.documentElement.classList.value = ''
      document.documentElement.classList.add(input.id)
    } 
  })

  // script for toggle menu on mobile
  const btnMenuMobile = document.getElementById('btn-menu-mobile')
  
  
  const toggleMenu = (event) => {
    
    if (event.type === "touchstart") event.preventDefault();
    
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

    const active = nav.classList.contains('active')

    event.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Close menu')
    } else {
      event.currentTarget.setAttribute('aria-label', 'Open menu')
    }
  }
  
  btnMenuMobile.addEventListener('click', toggleMenu)
  btnMenuMobile.addEventListener('touchstart', toggleMenu)
}

