export default function bindTabs(containerSelector, triggerSelector, contentSelector, isInline = false, triggerActiveClass, linkActiveClass) {
    const container = document.querySelector(containerSelector),
          triggers = container.querySelectorAll(triggerSelector),
          contents = container.querySelectorAll(contentSelector)

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            hideTabs()
            showTab(i)
        })
    })

    function hideTabs() {
        triggers.forEach((trigger, i) => {
            triggerActiveClass && trigger.classList.remove(triggerActiveClass)
            linkActiveClass && trigger.querySelector('a').classList.remove(linkActiveClass)
            contents[i].style.display = 'none'
            contents[i].classList.remove('zoomIn')
        })
    }

    function showTab(tabIndex = 0) {
        triggerActiveClass && triggers[tabIndex].classList.add(triggerActiveClass)
        linkActiveClass && triggers[tabIndex].querySelector('a').classList.add(linkActiveClass)
        contents[tabIndex].style.display = (isInline ? 'inline' : 'block')
        contents[tabIndex].classList.add('zoomIn')
    }
    
    hideTabs()
    showTab()
}