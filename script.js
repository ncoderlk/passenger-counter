let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
function increment(){
  document.getElementById('increment-btn').style.background="red"
  count +=1
  countEl.textContent = count
  document.getElementById('increment-btn').style.background="darkred"
}
function save(){
  document.getElementById('save-btn').style.background="green"
  saveEl.innerText = saveEl.innerText + count  + ' - '
  count = 0
  countEl.innerText = 0
  document.getElementById('save-btn').style.background="darkgreen"
}
