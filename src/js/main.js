import './slider'
import modals from './modules/modals'
import tabs from './modules/tabs'
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals()
    tabs('.glazing', '.glazing_block', '.glazing_content', null, 'active')
    tabs('.decoration', '.decoration_item > div', '.decoration_content > .row > div', 'after_click')
    forms()
})