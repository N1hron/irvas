import { tns } from 'tiny-slider'

const commonSettings = {
    rewind: true,
    autoplay: false,
    nav: false,
}

const glazingSlider = tns({
    ...commonSettings,
    container: '.glazing_slider .slides',
    items: 5,
    prevButton: '.glazing_slider .prev',
    nextButton: '.glazing_slider .next',
    responsive: {
        '350': {
            items: 2
        },
        '530': {
            items: 3
        },
        '991': {
            items: 5
        }
    }
})

const decorationSlider = tns({
    ...commonSettings,
    container: '.decoration_slider .slides',
    items: 4,
    prevButton: '.decoration_slider .prev',
    nextButton: '.decoration_slider .next',
    responsive: {
        '530': {
            items: 2
        },
        '991': {
            items: 3
        },
        '1199': {
            items: 4
        }
    }
})