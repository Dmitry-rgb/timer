let deadline = '2020-02-27'; //указываем конечную дату таймера

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // Вычисляем deadline - текущая дата, время в милисекундах
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return { //Взвращаем наши результаты в объект
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) { // Получаем элементы с нашего документа
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // тут мы сказали чтобы функция updateClock выполнялась через каждую секунду

        function updateClock() {
            let t = getTimeRemaining(endtime); //записываем результаты которые вернули в объект фунции getTimeRemaining в переменную t

            function addZero(num) { //Добавляем 0, формата 01-02-03
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours); // записываем результаты в наш документ
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) { // Условие, если таймер закончился, чтобы не шел в минус, мы говорим чтобы все было по нулям
                clearInterval(timeInterval); // останавливаем setInterval
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
