const statusMessage = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...'
}

export default function forms() {
    const formsList = document.querySelectorAll('form')

    async function postData(url, data) {
        document.querySelector('.status').textContent = statusMessage.loading
        const response = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await response.text()
    }

    formsList.forEach(form => {
        form.querySelectorAll('input[name="user_phone"]').forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/gm, '')
            })
        })

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const status = document.createElement('div')
            status.classList.add('status')
            
            form.appendChild(status)

            postData('./assets/server.php')
                .then((response) => {
                    console.log(response)
                    status.textContent = statusMessage.success
                })
                .catch(() => status.textContent = statusMessage.failure)
                .finally(() => {
                    clearInputs(form)
                    setTimeout(() => {
                        status.remove()
                    }, 5000)
                })
        })
    })

    function clearInputs(form) {
        const inputs = form.querySelectorAll('input')
        inputs.forEach(input => input.value = '')
    }
}