let text1 = ['I am Dexter Sigue', 'A Front-End Developer', 'Aspiring Programmer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === text1.length){
        count = 0;
    }
    currentText = text1[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    (setTimeout(type, 300));
}());





