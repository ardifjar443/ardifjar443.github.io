class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

clear() {
    this.currentOperand = ''
    this.previosOperand = ''
    this.operation = undefined
}

delete() {
   
}

appendNumber(number) {

}

chooseOperation(operation) {

}

compute() {

}

getDisplayNumber() {

}

updateDisplay() {

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equelsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('{data-all-clear]')
const previousOperandTextElement = documentl.querySelector('[data-previos-operand]')
const currentOperandTextElement = documentl.querySelector('[data-current-operand]')