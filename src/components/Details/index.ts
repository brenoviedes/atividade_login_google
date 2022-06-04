import './styles.css'
import '/src/css/styles.css'
import '/src/css/responsive.css'
import '/src/css/fonts.css'

export const renderDetails = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')
    const photo = localStorage.getItem('photo')
    const imageNotFound = '/img/no_photo.jpg'
    const email = localStorage.getItem('email')
    const phone = localStorage.getItem('phone')

    const htmlContent = `
        <div id="header">
            <div id="logo">
                <a href="index.html">Momentum</a>
            </div>
            <div id="nav">
                <img src="${photo || imageNotFound}" alt="foto do usuário">
                <a href="index.html" id="home_button">Home</a>
                <a href="logout.html" id="logout_button">Sair</a>
            </div>
        </div>
        <div id="details_user">
            <div id="details">
                <h2>Confira seus detalhes abaixo:</h2>
                <p>Nome: ${userName}</p>
                <p>Email: ${email}</p>
                <p>Telefone: ${phone}</p>
            </div>
        </div>
    `

    container.innerHTML = htmlContent
}