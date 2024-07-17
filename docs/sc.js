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

// redirects
const linksElements = document.querySelectorAll('.links i')
const links = {
    github: "https://github.com/sankar-raul",
    facebook: "https://www.facebook.com/sankarraul.me",
    instagram: "https://www.instagram.com/sankar_raul_",
    linkedin: "https://www.linkedin.com/in/sankar-raul"
}
linksElements.forEach(item => {
    item.onclick = () => {
        location.href = links[item.id]
    }
})