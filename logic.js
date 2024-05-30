let buttonList = document.getElementsByClassName("button");
let resultField = document.querySelector(".result");
let reset = false;

for(i = 0; i < buttonList.length; i++) {
    let button = buttonList[i];
    button.addEventListener("click", function(){
        if (reset) {
            resultField.value = button.textContent;
            reset = false;
            return;
        }
        resultField.value += button.textContent;
    });
}

let equalButton = document.getElementById("button-equal");
equalButton.addEventListener("click", function(){
    let currentValue = resultField.value;
    if (currentValue.length == 0 ){
        return;
    }
    // replace × with *
    currentValue = currentValue.replace("×", "*");
    // replace ÷ with /
    currentValue = currentValue.replace("÷", "/");
    let result = eval(currentValue);
    resultField.value = result;
    reset = true;
})

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    resultField.value = '';
});

let backButton = document.getElementById("back-button");
backButton.addEventListener("click", function(){
    let currentValue = resultField.value;
    if (currentValue.length <= 0) {
        return;
    } 
    resultField.value = currentValue.substring(0, currentValue.length - 1);
});

let operatorButtonList = document.getElementsByClassName("button-oprt");
for (i = 0; i < operatorButtonList.length; i++) {
    let button = operatorButtonList[i];
    button.addEventListener("click", function() {
        let currentValue = resultField.value;
        if (currentValue.length == 0 && button.textContent != "-") {
            return;
        }
        let lastCharacter = currentValue.charAt(currentValue.length - 1);
        if (lastCharacter == '+' ||
        lastCharacter == '-' ||
        lastCharacter == '×' ||
        lastCharacter == '÷') {
           // Do nothing
        } else {
            resultField.value += button.textContent;
            reset = false;
        }
    });
}



