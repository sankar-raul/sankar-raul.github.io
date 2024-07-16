// mouse pointer style
var preloadCursorClicked
window.addEventListener('load', () => {
    preloadCursorClicked = new Image()
    preloadCursorClicked.src = 'res/cursor-clicked.svg'
})
function clickFunc(element) {
    element.target.style.cursor = `url(${preloadCursorClicked.src}) 9 9, auto`
    setTimeout(() => {
        element.target.style.cursor = "url('res/cursor.svg') 9 9, auto"
    }, 100)
}
document.onclick = (element) => clickFunc(element)
// mobike nav animation
const mobileNavDetails = document.querySelector('.nav-mobile details')
mobileNavDetails.addEventListener('toggle', () => {
    const list = document.querySelector('.list-mobile')
    const openState = () => {
        list.style.animation = "fade 1s ease"
        list.style.opacity = "1"
    }
    const notOpenState = () => {
        list.style.animation = "none"
        list.style.opacity = "0"
    }
    mobileNavDetails.open ? openState`` : notOpenState``
})