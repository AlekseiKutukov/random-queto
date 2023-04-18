function generate(){
    let quotes = {
        "- Майкл Фелпс" : '"Цели никогда не должны быть простыми. Они должны быть неудобными, чтобы заставить вас работать"',
        "- Леброн Джеймс" : '"Не бойтесь неудач, потому что это ваш путь к успеху"',
        "- Арнольд Шварценеггер" : '"Причина создаёт ограничения. Но вы можете сделать многое, если верите в это всем своим сердцем"',
        "- Генри Форд" : '"Неудача — это просто возможность начать снова, но уже более мудро"',
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;

}

