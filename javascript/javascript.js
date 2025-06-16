const inputColor = document.querySelector('#inputColor');
const customizarInputColor = document.querySelector('#customizarInputColor');

inputColor.addEventListener('input', function(){
    customizarInputColor.style.backgroundColor = this.value;
});

customizarInputColor.addEventListener('click', function(){
    inputColor.click();
});

customizarInputColor.style.backgroundColor = inputColor.value;

