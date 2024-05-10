var rare = Math.floor(Math.random() * 100) + 1
var really_rare = Math.floor(Math.random() * 1000) + 1

if (rare === 1 && really_rare !== 1) {
  document.body.style.backgroundColor = "green"
} else if (rare !== 1 && really_rare === 1) {
  document.body.style.backgroundColor = "red"
} else if (rare === 1 && really_rare === 1) {
  document.body.style.backgroundColor = "purple"
}
