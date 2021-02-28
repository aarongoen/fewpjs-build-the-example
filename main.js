// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal')
modal.setAttribute('class', 'hidden')

function recognizingEvents() {
  let heart = document.querySelector('.like-glyph')
  
  function fillHeart() {
    heart = FULL_HEART
    heart.setAttribute('class', 'activated-heart') 
  }

  heart.addEventListener('click', mimicServerCall())
  .then(fillHeart)
  .catch(() =&gt; {
  modal.classList.remove('hidden')
  modal.
  })
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
