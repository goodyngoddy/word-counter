let input = document.querySelector('input')
let button = document.querySelector('button')
let wordCount = document.querySelector('.word-count')

let alphaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

button.addEventListener('click', () => {
  console.log(input.value)
  countWords()
})
function countWords() {
  let inputValue = input.value
  let count = 0
  for (var i = 0; i < inputValue.length; i++) {
    if (!alphaList.includes(inputValue[i])) {
      if (alphaList.includes(inputValue[i - 1])) {
        count++
      }
      wordCount.textContent = count
      console.log(inputValue[i])
    }
  }
}



// '-', '"', '.', ',', '`', ';', ':'

// London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.