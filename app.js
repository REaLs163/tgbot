let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

available_packs = {"Подарочная": "Цена: 150Р",
    "Бокс с наполнением": "Цена: 80Р",
        "Обычная": "Цена: 0P"}


function pack(packname) {
    tg.sendData(packname)
    }    
    