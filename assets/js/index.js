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

  btnMenuMobile.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  })
}

