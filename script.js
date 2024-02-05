/* ------------------steps dom --------------------*/
const step1 = document.querySelector('.step1')
const step2 = document.querySelector('.step2')
const step3 = document.querySelector('.step3')
const step4 = document.querySelector('.step4')
const step5 = document.querySelector('.step5')

/* aside dom */
const asideStepNum = document.querySelectorAll('.aside-step-num')

/* step1 dom */
const form = document.getElementById('form')

/* step2 dom */
const selectPlans = document.querySelectorAll('.select-plan')

const monthly = document.getElementById('monthly')
const yearly = document.getElementById('yearly')
const timeBtnCircle = document.querySelector('.time-btn-circle')

const plan = document.querySelector('.step2 .plan')

const arcadeMoney = document.querySelector('#arcade span')
const advancedMoney = document.querySelector('#advanced span')
const proMoney = document.querySelector('#pro span')

const goBack1 = document.querySelector('.step2 .go-back')
const step2NextBtn = document.querySelector('.step2 .next-btn')

/* step3 dom */
const checkboxes = document.querySelectorAll('.step3 input')

const onlineService = document.getElementById('online-service')
const largeStorage = document.getElementById('large-storage')
const customizable = document.getElementById('customizable')

const goBack2 = document.querySelector('.step3 .go-back')
const step3NextBtn = document.querySelector('.step3 .next-btn')


/* step4 dom */

const finishPlan = document.querySelector('.step4 .finishPlan')
const goBack3 = document.querySelector('.step4 .go-back')
const confirm = document.querySelector('.step4 .confirm')

const total = document.querySelector('.total')
const finishAdd = document.querySelector('.finishaAdd')


/* ---------------setp1---------------------- */

function nextStep() {
    step2.style.transform = 'translateX(0)'
    step1.style.transform = 'translateX(300%)'

    asideStepNum[0].classList.remove('active')
    asideStepNum[1].classList.add('active')
}

/* step1 form validation */
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')

const nextBtn1 = document.querySelector('.next-btn1')

/* input name validation */
inputName.addEventListener('input', () => {

    if (inputName.value.length < 3 || inputName.value.length > 15) {
        inputName.classList.add('invalid')
    } else {
        inputName.classList.remove('invalid')
        inputName.classList.add('valid')
    }
})

/* input email validation */
inputEmail.addEventListener('input', () => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(inputEmail.value)) {
        inputEmail.classList.remove('invalid')
        inputEmail.classList.add('valid')
    } else {
        inputEmail.classList.add('invalid')
    }
})

/* input phone validation  */
inputPhone.addEventListener('input', () => {
    function telephoneCheck(str) {
        var isphone = /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(str);

        if (isphone == true) {
            inputPhone.classList.remove('invalid')
            inputPhone.classList.add('valid')
        } else {
            inputPhone.classList.add('invalid')
        }
    }
    telephoneCheck(inputPhone.value);
})

/* step1 if valid next step */
nextBtn1.addEventListener('click', () => {

    if (inputName.classList.contains('invalid') || inputName.value == '') {

        inputName.previousElementSibling.children[1].style.display = 'inline-block'
        setTimeout(function () {
            inputName.previousElementSibling.children[1].style.display = 'none'
        }, 2500)
    }

    if (inputEmail.classList.contains('invalid') || inputEmail.value == '') {

        inputEmail.previousElementSibling.children[1].style.display = 'inline-block'
        setTimeout(function () {
            inputEmail.previousElementSibling.children[1].style.display = 'none'
        }, 2500)
    }

    if (inputPhone.classList.contains('invalid') || inputPhone.value == '') {

        inputPhone.previousElementSibling.children[1].style.display = 'inline-block'
        setTimeout(function () {
            inputPhone.previousElementSibling.children[1].style.display = 'none'
        }, 2500)
    }

    if (!inputName.classList.contains('invalid') && !inputName.value == '' &&
        !inputEmail.classList.contains('invalid') && !inputEmail.value == '' &&
        !inputPhone.classList.contains('invalid') && !inputPhone.value =='') {
        nextStep()
    }
})


/* ----------------------step2-------------------- */
selectPlans.forEach(function (selectPlan) {
    selectPlan.addEventListener('click', () => {
        removeOtherSlect()
        selectPlan.classList.add('select')
    })
})

/* if select other remove select */
function removeOtherSlect() {
    selectPlans.forEach((selectPlan) => {
        selectPlan.classList.remove('select')
    })
}

/* step2 time button */
monthly.addEventListener('click', () => {
    monthly.classList.add('active-time')
    yearly.classList.remove('active-time')
    if (!monthly.classList.contains('active')) {
        timeBtnCircle.style.transform = 'translateX(0px)'
    }

    arcadeMoney.innerHTML = "<span class ='money'>9</span>$/yr"
    advancedMoney.innerHTML = "<span class ='money'>12</span>$/yr"
    proMoney.innerHTML = "<span class ='money'>15</span>$/yr"

    selectPlans.forEach((selectPlan) => {
        selectPlan.classList.remove('yearlySelect')
    })
})

yearly.addEventListener('click', () => {
    yearly.classList.add('active-time')
    monthly.classList.remove('active-time')

    if (yearly.classList.contains('active-time')) {
        timeBtnCircle.style.transform = 'translateX(14px)'
    }

    arcadeMoney.innerHTML = "<span class ='money'>90</span>$/yr"
    advancedMoney.innerHTML = "<span class ='money'>120</span>$/yr"
    proMoney.innerHTML = "<span class ='money'>150</span>$/yr"

    selectPlans.forEach((selectPlan) => {
        selectPlan.classList.add('yearlySelect')
    })
})

/* step2 go back */
goBack1.addEventListener('click', () => {
    step2.style.transform = 'translateX(300%)'
    step1.style.transform = 'translateX(0)'

    asideStepNum[1].classList.remove('active')
    asideStepNum[0].classList.add('active')
})

/* setp2 next button */
step2NextBtn.addEventListener('click', () => {
    selectPlans.forEach(function (selectPlan) {
        if (selectPlan.classList.contains('select')) {
            step3.style.transform = 'translateX(0)'
            step2.style.transform = 'translateX(300%)'

            asideStepNum[1].classList.remove('active')
            asideStepNum[2].classList.add('active')
        }
    })

    /* picks ads monthly-yearly */
    if (yearly.classList.contains('active-time')) {
        onlineService.parentNode.lastElementChild.innerHTML =
            '<span>+$<span class="money">10</span>/yr</span>'

        largeStorage.parentNode.lastElementChild.innerHTML =
            '<span>+$<span class="money">20</span>/yr</span>'

        customizable.parentNode.lastElementChild.innerHTML =
            '<span>+$<span class="money">20</span>/yr</span>'
    } else {
        onlineService.parentNode.lastElementChild.innerHTML =
            '<span>+$<span class="money">1</span>/mo</span>'

        largeStorage.parentNode.lastElementChild.innerHTML =
            '<span>+$<span class="money">2</span>/mo</span>'

        customizable.parentNode.lastElementChild.innerHTML =
            '<span>+$<span class="money">2</span>/mo</span>'
    }
})

/* ----------------step3---------------------- */
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('input', function () {
        if (checkbox.checked == true) {
            checkbox.parentElement.classList.add('pick')
        } else {
            checkbox.parentElement.classList.remove('pick')
        }
    })
})

/* step3 go back */
goBack2.addEventListener('click', () => {
    step3.style.transform = 'translateX(300%)'
    step2.style.transform = 'translateX(0)'

    asideStepNum[2].classList.remove('active')
    asideStepNum[1].classList.add('active')
})

/* setp3 next button */
step3NextBtn.addEventListener('click', () => {
    selectPlans.forEach(function (selectPlan) {
        if (selectPlan.classList.contains('select')) {
            step4.style.transform = 'translateX(0)'
            step3.style.transform = 'translateX(300%)'
            step4.classList.add('live')

            asideStepNum[2].classList.remove('active')
            asideStepNum[3].classList.add('active')
        }
    })


    /*-------- step4 -----------*/
    let totalMoney2 = 0

    if (yearly.classList.contains('active-time')) {
        selectPlans.forEach((selectPlan) => {
            if (selectPlan.classList.contains('select')) {
                const selectPlanH2 = document.querySelector('.select h2')
                const selectPlanMoney = document.querySelector('.select .money')

                finishPlan.innerHTML = `
                    <div class="finish-plan-content">
                        <span class="finish-plan-name">${selectPlanH2.textContent}</span>
                        <span class="finish-plan-time">Yearly</span>
                    </div>
                    <span>$${selectPlanMoney.textContent}/yr</span>
                    <hr>
                `

                let count = -1
                let totalMoney1 = Number(selectPlanMoney.textContent)

                checkboxes.forEach((checkbox) => {
                    if (checkbox.parentElement.classList.contains('pick')) {

                        const finishAddNum = document.createElement('div')
                        finishAddNum.classList.add('finishAddNum')

                        const picks = document.querySelectorAll('.pick')
                        const picksH3 = document.querySelectorAll('.pick h3')
                        const pickMoney = document.querySelectorAll('.pick .money')

                        count++

                        finishAddNum.innerHTML = `
                            <span class="finish-add-name">${picksH3[count].textContent}</span>
                            <span class="finish-add-money">+$<span class="money">${pickMoney[count].textContent}</span>/yr</span>
                            `

                        finishAdd.appendChild(finishAddNum)
                    }
                })


                if (finishAdd.children.length > 0) {

                    const finishAddMoney = document.querySelectorAll('.finish-add-money .money')

                    finishAddMoney.forEach(function (money) {
                        let moneyContent = Number(money.textContent)

                        totalMoney2 += moneyContent

                        total.innerHTML = `
                        <span class="total-name">Total (Per Year)</span>
                        <span class="total-money">+${totalMoney1 + totalMoney2}/yr</span>
                        `
                    })

                } else {
                    total.innerHTML = `
                    <span class="total-name">Total (Per Year)</span>
                    <span class="total-money">+${totalMoney1}/yr</span>
                    `
                }

            }
        })

    } else if (monthly.classList.contains('active-time')) {
        selectPlans.forEach((selectPlan) => {
            if (selectPlan.classList.contains('select')) {
                const selectPlanH2 = document.querySelector('.select h2')
                const selectPlanMoney = document.querySelector('.select .money')

                finishPlan.innerHTML = `
                    <div class="finish-plan-content">
                        <span class="finish-plan-name">${selectPlanH2.textContent}</span>
                        <span class="finish-plan-time">Monthly</span>
                    </div>
                    <span>$${selectPlanMoney.textContent}/mo</span>
                    <hr>
                `

                let count = -1
                let totalMoney1 = Number(selectPlanMoney.textContent)

                checkboxes.forEach((checkbox) => {
                    if (checkbox.parentElement.classList.contains('pick')) {

                        const finishAddNum = document.createElement('div')
                        finishAddNum.classList.add('finishAddNum')

                        const picksH3 = document.querySelectorAll('.pick h3')
                        const pickMoney = document.querySelectorAll('.pick .money')

                        count++

                        finishAddNum.innerHTML = `
                            <span class="finish-add-name">${picksH3[count].textContent}</span>
                            <span class="finish-add-money">+$<span class="money">${pickMoney[count].textContent}</span>/mo</span>
                            `

                        finishAdd.appendChild(finishAddNum)
                    }
                })

                let totalMoney2 = 0
                if (finishAdd.children.length > 0) {

                    const finishAddMoney = document.querySelectorAll('.finish-add-money .money')

                    finishAddMoney.forEach(function (money) {
                        let moneyContent = Number(money.textContent)

                        totalMoney2 += moneyContent

                        total.innerHTML = `
                        <span class="total-name">Total (Per Month)</span>
                        <span class="total-money">+${totalMoney1 + totalMoney2}/mo</span>
                        `
                    })

                } else {
                    total.innerHTML = `
                    <span class="total-name">Total (Per Month)</span>
                    <span class="total-money">+${totalMoney1}/mo</span>
                    `
                }

            }
        })

    }

})

/* step4 go back */
goBack3.addEventListener('click', () => {
    step4.style.transform = 'translateX(300%)'
    step3.style.transform = 'translateX(0)'

    asideStepNum[3].classList.remove('active')
    asideStepNum[2].classList.add('active')

    if (finishAdd.children.length > 0) {
        finishAdd.innerHTML = ''
    }

})

/* setp4 confirm button */
confirm.addEventListener('click', () => {

    step5.style.transform = 'translateX(0)'
    step4.style.transform = 'translateX(300%)'

})












