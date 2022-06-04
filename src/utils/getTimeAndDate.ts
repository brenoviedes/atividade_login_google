import moment from "moment";

const fixZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
}

export const updateClock = () => {

    let time = <HTMLDivElement>document.querySelector('#hours')

    let now = new Date();
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    
    time.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
}

export const greeting = () => {

    let now = new Date()
    let hour = now.getHours()

    if(hour >= 5 && hour < 12) {
        return 'Bom dia'
    } else if (hour >=12 && hour < 19) {
        return 'Boa tarde'
    } else {
        return 'Boa noite'
    }
}

export const getDay = () => {
    let date = moment().format('DD/MM/YYYY')

    let slicedDate = date.split('/')

    const year = parseInt(slicedDate[2])
    const month = parseInt(slicedDate[1]) - 1
    const day = parseInt(slicedDate[0])
    let monthName = ''

    switch (month) {
        case 0:
            monthName = 'Janeiro'
            break
        case 1:
            monthName = 'Fevereiro'
            break
        case 2:
            monthName = 'Março'
            break
        case 3:
            monthName = 'Abril'
            break
        case 4:
            monthName = 'Maio'
            break
        case 5:
            monthName = 'Junho'
            break
        case 6:
            monthName = 'Julho'
            break
        case 7:
            monthName = 'Agosto'
            break
        case 8:
            monthName = 'Setembro'
            break
        case 9:
            monthName = 'Outubro'
            break
        case 10:
            monthName = 'Novembero'
            break
        case 11:
            monthName = 'Dezembro'
    }

    const toDay = `Hoje é ${day} de ${monthName} de ${year}`

    return toDay
}


