window.onload = () => {
  document
  .querySelectorAll("input[name='theme']")
  .forEach((input) => {
    input.onclick = () => {
      document.documentElement.classList.value = ''
      document.documentElement.classList.add(input.id)
    } 
  })
}