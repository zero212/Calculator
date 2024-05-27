let buttonList = document.getElementsByClassName("button");
let input = document.getElementsByClassName('result')[0];

for(i = 0; i < buttonList.length; i++) {
    let button = buttonList[i];
    button.addEventListener("click", function(){
        input.value += button.textContent;
    });
}

