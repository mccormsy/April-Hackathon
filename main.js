// const theBody = document.getElementById('body');
// const parent = theBody.parentNode;
// theBody.parentNode.removeChild(theBody);

const buttonBreak = document.createElement('button')
buttonBreak.setAttribute('type', 'submit')
buttonBreak.innerHTML = 'Start a ergo break countdown!'
document.body.appendChild(buttonBreak);

const blackout = document.createElement('div');
blackout.setAttribute("id", "blackout")
// blackout.style.position = fix
blackout.style.backgroundColor = "rgba(255,255,255,1)"
blackout.style.position = "fixed"
blackout.style.display = "none"
blackout.style.width = "100%"
blackout.style.height = "100%"
blackout.style.top = "0"
blackout.style.left = "0"
blackout.style.right = "0"
blackout.style.bottom = "0"
blackout.style.zIndex = "2"
document.body.appendChild(blackout);

// buttonBreak.addEventListener('click', () => {
//     setTimeout(() => alert('Take an ergonomic break!'), 5000)
// });

function changeBlackout() {
    document.getElementById('blackout').style.display = "block";
    alert('Take an ergonomic break!');
    setTimeout(() => document.getElementById('blackout').style.display = "none", 3000)
}
buttonBreak.addEventListener('click', () => {
    setTimeout(changeBlackout, 3000)
});