
const options = document.querySelectorAll("li button")
const resultEl = document.getElementById("result")
const additionEl = document.getElementById("addition")
const randomEmyBtn = document.querySelector(".emy-btn button")
const randomSalihBtn = document.querySelector(".salih-btn button")
const randomEmyEl = document.getElementById("randomEmy")
const randomSalihEl = document.getElementById("randomSalih")


let globalArray = []
let array = []
let timeInterval
let option1 = 0
let option2 = 0
let additionOption


function render() {

  for(let i = 0; i<options.length; i++) {
    globalArray.push(options[i].innerText) 
  }

  let randomNumber = Math.floor(Math.random() * options.length)
  resultEl.innerText = globalArray[randomNumber]

  if(randomNumber === 0) {
    option1++
  }
  if(randomNumber === 1) {
    option2++
  }
  if(option1 === 10 || option2 === 10){
    clearInterval(timeInterval)

    if(option1 === 10) {
      resultEl.innerHTML = array[0]
    }
    if(option2 === 10) {
      resultEl.innerHTML = array[1]
    }
    option1 = 0
    option2 = 0
    array = []
    globalArray = []
    additionEl.disabled = false
    randomEmyBtn.disabled = false
    randomSalihBtn.disabled = false
    randomEmyEl.disabled = false
    randomSalihEl.disabled = false
    options.forEach(option=>  option.disabled = false)
    additionEl.value = ""
  }
}


function addClasses(){
    additionEl.disabled = true
    randomEmyBtn.disabled = true
    randomSalihBtn.disabled = true
    randomEmyEl.disabled = true
    randomSalihEl.disabled = true
    options.forEach(option=>  option.disabled = true)
    resultEl.classList.add("render")
}


    additionEl.addEventListener("keydown",function(e){
      if(e.key === "Enter") {
        additionOption = this.value
        array.push(additionOption)
        globalArray.push(additionOption)
        additionEl.value = additionOption
        additionEl.disabled = true
      }
      
      if(array.length === 2) {
        addClasses()

        timeInterval = setInterval(render,100)
      }
    })


    randomEmyBtn.addEventListener("click",function(){
      for(let i = 0; i<options.length; i++) {
        globalArray.push(options[i].innerText) 
      }

      let randomNumber2 = Math.floor(Math.random() * options.length)
      randomEmyEl.value = globalArray[randomNumber2]
      array.push(randomEmyEl.value)

      if(array.length === 2) {
        addClasses()

        timeInterval = setInterval(render,100)
      }
    })


    randomSalihBtn.addEventListener("click",function(){
      for(let i = 0; i<options.length; i++) {
        globalArray.push(options[i].innerText) 
      }

      let randomNumber2 = Math.floor(Math.random() * options.length)
      randomSalihEl.value = globalArray[randomNumber2]
      array.push(randomSalihEl.value)

      if(array.length === 2) {
        addClasses()

        timeInterval = setInterval(render,100)
      }
    })


    options.forEach(option=>option.addEventListener("click",(e)=>{

      array.push(e.target.innerText)

      if(array.length === 2) {
        addClasses()

        timeInterval = setInterval(render,100)
      }
    }))








