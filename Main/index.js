function resultCheck() {
    checkAge()
    checkDate()
}

function button(e) {
    if (e) {
        document.getElementById('send').disabled = true
    } else {
        document.getElementById('send').disabled = false
    }
}

function checkDate() {
    const date = document.getElementById('date').value.split('/').map(e => Number(e))
    const currentDay = new Date();
    if ((date[0] >= currentDay.getMonth() + 1) &&
        (date[0] <= currentDay.getMonth() + 2) &&
        (date[2] === currentDay.getFullYear())) {
        if (date[0] === currentDay.getMonth() + 2) {
            document.getElementById('w1').innerText = ''
            button()
        } else {
            if ((date[1] < currentDay.getDate())) {
                document.getElementById('w1').innerText = 'Дата неправильна '
                button(true)
            } else {
                document.getElementById('w1').innerText = ''
                button()
            }
        }
    } else {
        document.getElementById('w1').innerText = 'Дата неправильна '
        button(true)
    }
}

function checkAge() {
    const age = Number(document.getElementById('age').value);
    if (age < 0 || age < 12 || age > 100) {
        document.getElementById('w2').innerText = 'Вік занадто малий або великий'
        button(true)
    } else {
        document.getElementById('w2').innerText = ''
        button()
    }
}
