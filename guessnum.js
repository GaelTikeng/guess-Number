

let numlife = 5
document.querySelector('.life').innerHTML = `You have ${numlife} trials`


function processData() {
  let num = document.querySelector('.guessnum').value
  const output = document.querySelector('.display')
  if (num === '') {
    output.innerHTML = 'You must enter a number'
  } else {
    const output2 = document.querySelector('.disp')
    let x = Math.floor((Math.random() * 100) + 1)
    if (+num === x) {
      output.innerHTML = 'great! correct number'
    } else if (+num > 100) {
      output.innerHTML = 'Number not in range'
    } else {
      output.innerHTML = 'wrong number'
      output2.innerHTML = `the number is ${x}`
    }
    numlife -= 1
    document.querySelector('.life').innerHTML = `Ramaining ${numlife} trial(s)`
    if (numlife === 0) {
      output.innerHTML = 'GAME OVER'
    }

  }
}




// function displayNum () {
//   return new Promise(function (resolve, reject){
//     resolve()
//     reject()
//   })
// }

// resolve.then(

// )

// function processData() {
  
// }

/*async function displayNumber() {
  let mypromise = new Promise (function(resolve, resolve) {
    let numlife = 5
    let x = Math.floor((Math.random() * 100) + 1)
    let num = document.querySelector('.guessnum')

    while (numlife >= 0) {
      if(+num.value === x) {
        resolve('correct number, you win')
      } else {
        reject('incorret number, try again')
      }
      numlife -= 1
    }
  })
  output.innerHTML = await mypromise
}*/























function guessNum() {
  while (numlife >= 0) {
    if (+num.value !== x) {
      output.innerHTML = 'wrong number'
      document.querySelector('.disp').innerHTML = `the num is ${x}`
    } else {
      output.innerHTML = 'wrong number'
    } 
  }
  numlife--
}

// function guessNum() {
//   do {
    // let x = Math.floor((Math.random() * 100) + 1)
//     if (+num.value !== x) {
//       output.innerHTML = 'wrong number'
//       document.querySelector('.disp').innerHTML = `the num is ${x}`
//     } else {
//       output.innerHTML = 'you win'
//     }
//     numlife--
//   }
//   while (numlife = 0)
  
// }

// if (numlife === 0 && +num.value !== x) {
//   output.innerHTML = 'GAME OVER'
// }