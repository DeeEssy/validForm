'use strict'
const mainBtn = document.querySelectorAll('.main__btn');
const uomo = document.getElementById('uomo');
const donna = document.getElementById('donna');
mainBtn.forEach(el => {
    el.addEventListener('click', (event) => {
        const target = event.currentTarget;
        if(target.id=="uomo") {
            donna.classList.remove('active');
            uomo.classList.add('active');
        } else {
            donna.classList.add('active');
            uomo.classList.remove('active');
        }
    });
});

const validateForms = (selector, rules, messages) => {
    const formSelect = document.querySelectorAll('.form-select');
    const formBtn = document.querySelector('.form__btn');
    const formSelectError = document.querySelector('.form-select__error');
    const mainError = document.querySelector('.main__error');
    formSelect.forEach(el => {
        formBtn.addEventListener('click', () => {
            if(el.value === 'Giorno' || el.value === 'Mese' || el.value === 'Anno') {
                el.classList.add('error');
                formSelectError.classList.add('active');
            }
        })
    })
    new window.JustValidate(selector, {
        rules: rules,
        messages: messages,
        }
    );
}
validateForms('.form', {
        name: {
            required: true
        }, 
        secondname: {
            required: true
        }, 
        email: {
            required: true
        },
    },
    {
        name: {
            required: 'completa correttamente il campo: nome'
        },
        secondname: {
            required: 'completa correttamente il campo: cognome'
        },
        email: 'completa correttamente il campo: email'
    }
);
const popupRego = document.querySelector('.popup-rego'),
    body = document.querySelector('body')


let closestItemByClass = function (item, className) {
    let node = item
    while (node) {
        if (node.classList.contains(className)) {
            return node
        }
        node = node.parentElement
    }
    return null
}

let closestAttr = function (item, attr) {
    let node = item
    while (node) {
        let attrValue = node.getAttribute(attr)
        if (attrValue) {
            return attrValue
        }
        node = node.parentElement
    }
    return null
}

const showPopup = target => {
    target.classList.add('popup-active')
}

const closePopup = target => {
    target.classList.remove('popup-active')
}

let toggleScroll = () => {
    body.classList.toggle('no-scroll')
}

body.addEventListener('click', event => {
    const target = event.target
    const popupClass = closestAttr(target, 'data-popup')
    if (popupClass === null) {
        return
    }
    event.preventDefault()
    let popup = document.querySelector('.' + popupClass)
    if (popup) {
        showPopup(popup)
        toggleScroll()
    }
})

body.addEventListener('click', event => {
    let target = event.target
    if (target.classList.contains('popup-close') ||
        target.classList.contains('popup-inner')) {
        let popup = closestItemByClass(target, 'popup')
        closePopup(popup)
        toggleScroll()
    }
})

body.addEventListener('keydown', event => {
    if (event.keyCode !== 27) {
        return
    }

    let popup = document.querySelector('.popup-active')
    if (popup) {
        closePopup(popup)
        toggleScroll()
    }
})
document.addEventListener('load', () => {
    const mainImg = document.querySelector('.main__img');
    mainImg.classList.add('active');
})