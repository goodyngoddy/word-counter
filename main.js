let textarea = document.querySelector('textarea')
let button = document.querySelector('button')
let wordCount = document.querySelector('.word-count')
let charCount = document.querySelector('.char-count')

let alphaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

button.addEventListener('click', () => {
  countWords()
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


