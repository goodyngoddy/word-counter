let textarea = document.querySelector('textarea')
let button = document.querySelector('button')
let wordCount = document.querySelector('.word-count')
let charCount = document.querySelector('.char-count')
let errorMsg = document.querySelector('.error-msg')
let errorTime = document.querySelector('.error-time')

let alphaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let currentTime = new Date().getTime()
let endTime = new Date().getTime() + 5;
let timeRange = endTime - currentTime



textarea.addEventListener('input', () => {
  errorMsg.style.display = 'none'
})
button.addEventListener('click', () => {
  if (textarea.value =='') {
    let time = 4
    let timer = setInterval(function() {
      time--
      errorMsg.textContent = `Please Enter Text (${time})`
      if (time < 0) {
        errorMsg.textContent = ''
      }
    }, 1000)
  } else {
    countWords()
  }
})

let wordCountNum

function countWords() {
  let inputValue = textarea.value
  let wordNum = 0
  let charNum = 0
  
  for (var i = 0; i < inputValue.length; i++) {
    charNum = i
    if (!alphaList.includes(inputValue[i])) {
      if (alphaList.includes(inputValue[i - 1])) {
        wordNum++
      }
    }
  }
  if (alphaList.includes(inputValue[inputValue.length - 1])) {
    wordCountNum = wordNum + 1
  } else {
    wordCountNum = wordNum 
  }
  wordCount.textContent = wordCountNum
  charCount.textContent = charNum + 1
}


