// SELECT ELEMENTS

const balanceEl = document.querySelector(".balance .value")
const incomeTotalEl = document.querySelector(".income-total")
const outcomeTotalEl = document.querySelector(".outcome-total")
const incomeEl = document.querySelector("#income")
const outcomeEl = document.querySelector("#expense")
const allEl = document.querySelector("#all")
const incomeList = document.querySelector("#income .list")
const expenseList = document.querySelector("#outcome .list")
const allList = document.querySelector("#all .list")

// SELECT TABS

const incomeBtn = document.querySelector(".tab1")
const expenseBtn = document.querySelector(".tab2")
const allBtn = document.querySelector(".tab3")

// SELECT INPUT BTS

const addExpense = document.querySelector(".add-expense")
const expenseTitle = document.querySelector("expense-title-input")
const expenseAmount = document.querySelector("expense-amount-input")

const addIncome = document.querySelector(".add-income")
const incomeTitle = document.querySelector("expense-title-input")
const incomeAmount = document.querySelector("expense-amount-input")

// VARIABLES

let ENTRY_LIST = []
let balance = 0, income = 0, outcome = 0

const DELETE = 'delete', EDIT = 'edit'

// EVENT LISTENERS

incomeBtn.addEventListener("click", () => {
    show( incomeEl )
    hide( [outcomeEl, allEl] )
    active( incomeBtn )
    inactive( [expenseBtn, allBtn] )
})

expenseBtn.addEventListener("click", () => {
    show( outcomeEl )
    hide( [incomeEl, allEl] )
    active( expenseBtn )
    inactive( [incomeBtn, allBtn] )
})

allBtn.addEventListener("click", () => {
    show( allEl )
    hide( [incomeEl, outcomeEl] )
    active( allBtn )
    inactive( [incomeBtn, expenseBtn] )
})

// HELPERS

function show(elToBeShown){
    elToBeShown.classList.remove("hide")
}

function hide(elsToBeHidden){
    elsToBeHidden.forEach(el => {
        el.classList.add("hide")
    })
}

function active(elToBeActivated){
    elToBeActivated.classList.add("active")
}

function inactive(elsToBeInactivated){
    elsToBeInactivated.forEach(el => {
        el.classList.remove("active")
    })
}

