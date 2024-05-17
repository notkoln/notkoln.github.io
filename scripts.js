document.body.addEventListener('keyup', event => {
  if (event.code === "ArrowUp" && event.code === "KeyR") {
    var all = document.body.querySelector("a")
    all.innerText = "???"
    for (let i = 0; i < 50; i++) {
      setTimeout(function() {
        all.style = `left: ${Math.floor(Math.random() * 50) + 1}%; top: ${Math.floor(Math.random() * 50) + 1}%`
      }, 500)
    }
  }
})
