import { getDay, greeting, updateClock } from '../../utils/getTimeAndDate'
import './styles.css'
import '/src/css/styles.css'
import '/src/css/responsive.css'
import '/src/css/fonts.css'

export const renderWelcomePanel = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')

    const photo = localStorage.getItem('photo')

    const imageNotFound = '/img/no_photo.jpg'


    const htmlContent = `
    <div id="header">
        <div id="logo">
            <a href="index.html">Momentum</a>
        </div>
        <div id="nav">
            <img src="${photo || imageNotFound}" alt="foto do usuário">
            <a href="details.html" id="details_button">Detalhes</a>
            <a href="logout.html" id="logout_button">Sair</a>
        </div>
    </div>
    <div id="container_welcome">
        <div id="welcome">
            <div id="mid">
                <div id="hours">
                    ${setInterval(updateClock, 1000)}
                </div>
                <div id="getDay">${getDay()}</div>
            </div>
            <h1>${greeting()}, ${userName}!</h1>
        </div>
    </div>
    `

    container.innerHTML = htmlContent
    getDay()
}


