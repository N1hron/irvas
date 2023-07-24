import { addMargin, removeMargin } from './fixOverflow'

export default function images(containerSelector) {
    const container = document.querySelector(containerSelector)

    const popup = document.createElement('div'),
          bigImg = document.createElement('img')

    popup.classList.add('popup')
    popup.appendChild(bigImg)
    popup.style.cssText = 'display: flex; justify-content: center; align-items: center;'
    bigImg.classList.add('zoomIn')

    container.addEventListener('click', event => {
        event.preventDefault()
        
        const target = event.target

        if (target.classList.contains('preview')) showPopup(target)
    })

    popup.addEventListener('click', event => {
        if (event.target === popup) hidePopup()
    })

    function showPopup(img) {
        bigImg.src = img.parentElement.href
        document.body.appendChild(popup)
        document.body.style.overflow = 'hidden'
        addMargin()
    }

    function hidePopup() {
        popup.remove()
        document.body.style.overflow = 'auto'
        removeMargin()
    }
}