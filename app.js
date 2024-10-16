﻿let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по жанрам");
        item = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию по исполнителям");
        item = "2";
        tg.MainButton.show();
    }
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});