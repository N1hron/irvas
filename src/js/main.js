import './slider'
import createModal from './modules/createModal'
import bindTabs from './modules/bindTabs'
import forms from './modules/forms'
import calculator from './modules/calculator'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // Modals:
    createModal('.popup_engineer_btn', '.popup_engineer', '.popup_close')
    createModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false)
    createModal('.phone_link', '.popup', '.popup_close').showModalAfterTime(60000)
    createModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
    createModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)

    // Tabs:
    bindTabs('.glazing', '.glazing_block', '.glazing_content', false, null, 'active')
    bindTabs('.decoration', '.decoration_item > div', '.decoration_content > .row > div', false, 'after_click')
    bindTabs('.popup_calc_content', '.balcon_icons_img', '.big_img > img', true, 'do_image_more')

    // Multi step calculator:
    const {state: calculatorState, resetCalculator} = calculator()
    
    // Forms:
    forms(calculatorState, resetCalculator)
})