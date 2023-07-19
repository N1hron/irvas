export default function createModal(triggerSelector, modalSelector, closeSelector, closeOnOverlayClick = true) {
    function bindModal() {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector)

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault()
                showModal(modal)
            })
        })

        close.addEventListener('click', () => hideModal(modal))

        if (closeOnOverlayClick) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) hideModal(modal)
            })
        }

        function showModalAfterTime(time) {
            setTimeout(() => showModal(modal), time)
        }

        return { showModalAfterTime }
    }

    function showModal(modal) {
        hideAllModals()
        modal.classList.add('fadeIn')
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    function hideModal(modal) {
        modal.classList.remove('fadeIn')
        modal.style.display = 'none'
        document.body.style.overflow = 'auto'
    }

    function hideAllModals() {
        document.querySelectorAll('[data-modal]').forEach(modal => hideModal(modal))
    }

    return bindModal()
}