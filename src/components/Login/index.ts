import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import firebaseApp from '../../config/firebase'
import './styles.css'
import '/src/css/responsive.css'
import '/src/css/styles.css'

const onClick = () => {
    const auth = getAuth(firebaseApp)
    auth.languageCode = 'pt-br'
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)

            const token = credential?.accessToken

            const {user} = result

            const {displayName} = user

            localStorage.setItem('token', token || '')

            localStorage.setItem('userName', displayName || '')

            const phone = user.phoneNumber
            localStorage.setItem('phone', phone || 'Telefone não encontrado')

            const photoURL = user.photoURL
            localStorage.setItem('photo', photoURL || '')

            const email = user.email
            localStorage.setItem('email', email || '')

            if(token) {
                location.href = 'index.html'
            }
        })
        .catch(error => {
            const {errorCode, errorMessage} = error
            console.log(errorCode, errorMessage)
        })
}

export const renderLogin = (container: HTMLElement) => {
    const htmlContent = `

    <div id="login_box">
        <h1>Login</h1>
        <h2>Use sua conta Google</h2>
        <button id="login-button">
            <img src="/img/google.png" alt="Google">
            <span>Entrar com Google</span>
        </button>
    </div>
    `
    container.innerHTML = htmlContent

    const loginButton = <HTMLButtonElement>document.getElementById('login-button')

    loginButton.onclick = onClick
}