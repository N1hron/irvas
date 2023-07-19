export default function modals() {
    function bindModals(triggerSelector, modalSelector, closeSelector) {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector)

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault()
                showModal(modal)
            })
        })

        modal.addEventListener('click', (event) => {
            if (event.target === modal) hideModal(modal)
        })

        close.addEventListener('click', () => hideModal(modal))
    }

    function showModal(modal) {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    function hideModal(modal) {
        modal.style.display = 'none'
        document.body.style.overflow = 'auto'
    }

    function showModalAfterTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector)
        setTimeout(() => showModal(modal), time)
    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_close')
    bindModals('.phone_link', '.popup', '.popup_close')
    showModalAfterTime('.popup', 60000)
}