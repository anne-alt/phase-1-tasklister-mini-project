document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit",(a) => {
    a.preventDefault()
    toDo(a.target.stuff.value)
    form.reset()
  })
});

function toDo(todo) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", out)
  btn.innerHTML = " done! "
  p.innerHTML = `${todo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#tasks").appendChild(p)
}

function out(b) {
  b.target.parentNode.remove()
}



