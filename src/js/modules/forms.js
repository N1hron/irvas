import validateNumInputs from './validateNumInputs'

const statusMessage = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...'
}

export default function forms(calculatorState, resetCalculator) {
    const formsList = document.querySelectorAll('form'),
          status = document.createElement('div')

    status.classList.add('status')
    
    async function postData(url, data) {
        document.querySelector('.status').textContent = statusMessage.loading
        const response = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await response.text()
    }

    formsList.forEach(form => {
        form.querySelectorAll('input[name="user_phone"]').forEach(input => validateNumInputs(input))

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const formData = new FormData(form)
            if (form.hasAttribute('data-calc')) addToFormData(formData, calculatorState)
            console.log(calculatorState)
            console.log(formData)
            form.appendChild(status)

            postData('./assets/server.php', formData)
                .then((response) => {
                    console.log(response)
                    status.textContent = statusMessage.success
                })
                .catch(() => status.textContent = statusMessage.failure)
                .finally(() => {
                    if (form.hasAttribute('data-calc')) resetCalculator()
                    clearInputs(form)
                    setTimeout(() => {
                        status.remove()
                    }, 5000)
                })
        })
    })

    function addToFormData(formData, data) {
        for (let key in data) {
            formData.append(key, data[key])
        }
    }

    function clearInputs(form) {
        const inputs = form.querySelectorAll('input')
        inputs.forEach(input => input.value = '')
    }
}