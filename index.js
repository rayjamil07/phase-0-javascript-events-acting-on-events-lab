const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

document.addEventListener('keydown',function(event){
    console.log(event);
})

document.addEventListener('keydown', function(event){
    if(event.key === "ArrowLeft"){
        const leftNUmbers = dodger.style.left.replaace('px', '');
        const left = parseInt(leftNUmbers, 10);

        dodger.style.left = `${left - 1}px`;
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })
  
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })