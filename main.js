// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal')
function hideModal() {
  modal.setAttribute('class', 'hidden')
}
hideModal()

let hearts = document.querySelectorAll('.like-glyph')
function fillHeart() {
   hearts.forEach(addEventListener('click', function(e) {
    // debugger
    e.innerHTML = FULL_HEART  
    e.style.color = 'activated-heart'
  })    
  )
}
fillHeart()

function recognizingEvents() {
  mimicServerCall()
  .then(fillHeart)
  .catch(flashError)
}

function flashError() {
  let showModal = modal.classList.remove('hidden')
  setTimeout(hideModal, 5000)
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
