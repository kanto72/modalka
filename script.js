//модалка
let modal = document.getElementById('myModal');
//кнопка
let btn = document.getElementById("Mybtn");
//делаем для классов
let but = document.querySelector('.modal-btn');
//крестик
let span = document.getElementsByClassName("close")[0];
//тело
let body = document.body;
//функция открытия модалки при нажатии на кнопку

btn.onclick = function() {
    //делаем видимый контент модалки
    modal.style.display = "block";
    //тут делаем так что бы при открытой модалке небыло скролла
    body.style.overflowY = 'hidden';
}
//функция закрытия при клике на крестик
span.onclick = function() {
    //скрываем контент модалки
    modal.style.display = "none";
    body.style.overflowY = 'auto';
}
//функция закрытия при клике на любую часть кроме модалки
window.onclick = function(event){
    if (event.target == modal){
        //скрываем контент модалки
        modal.style.display = "none";
        body.style.overflowY = 'auto';
    }
}
//можно так по классам
but.onclick = function() {
        //делаем видимый контент модалки
        modal.style.display = "block";
        //тут делаем так что бы при открытой модалке небыло скролла
        body.style.overflowY = 'hidden';
}