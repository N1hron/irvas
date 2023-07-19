import validateNumInputs from './validateNumInputs'

export default function calculator() {
    let state = {shape: 1, glazing: 'tree'}

    const balconOptions = document.querySelectorAll('.balcon_icons_img'),
          widthInput = document.querySelectorAll('#width'),
          heightInput = document.querySelectorAll('#height'),
          glazingTypeSelect = document.querySelectorAll('#view_type'),
          glazingProfileCheckboxes = document.querySelectorAll('.popup_calc_profile_content .checkbox')

    restoreProgress()

    validateNumInputs(widthInput[0], heightInput[0])

    bindActions(balconOptions, 'shape', 'click')
    bindActions(widthInput, 'width')
    bindActions(heightInput, 'height')
    bindActions(glazingTypeSelect, 'glazing', 'change')
    bindActions(glazingProfileCheckboxes, 'profile', 'change')

    function bindActions(elements, key, action = 'input') {
        elements.forEach((element, i) => {
            element.addEventListener(action, () => {
                if (element.getAttribute('type') === 'checkbox') {
                    handleCheckboxClick(elements, element)
                }
                state[key] = action === 'click' ? i + 1 : element.value
                saveProgress()
            })
        })
    }

    function handleCheckboxClick(checkboxes, target) {
        checkboxes.forEach(checkbox => {
            if (target !== checkbox) {checkbox.checked = false}
        })
    }
    
    function saveProgress() {
        sessionStorage.calculatorState = JSON.stringify(state)
    }

    function restoreProgress() {
        const saved = sessionStorage.calculatorState
        if (saved) {
            state = JSON.parse(saved)
            balconOptions.forEach((option, i) => {
                option.classList.remove('do_image_more')
                if (i === state.shape - 1) option.classList.add('do_image_more')
            })

            glazingProfileCheckboxes.forEach(checkbox => {
                checkbox.checked = false
                if (checkbox.value === state.profile) checkbox.checked = true
            })

            glazingTypeSelect[0].value = state.glazing || ''
            widthInput[0].value = state.width || ''
            heightInput[0].value = state.height || ''
        } else saveProgress()
    }

    function resetCalculator() {
        balconOptions.forEach(option => option.classList.remove('do_image_more'))
        balconOptions[0].classList.add('do_image_more')

        glazingProfileCheckboxes.forEach(checkbox => checkbox.checked = false)

        glazingTypeSelect[0].value = ''
        widthInput[0].value = ''
        heightInput[0].value = ''

        delete sessionStorage.calculatorState
    }

    return {state, resetCalculator}
}