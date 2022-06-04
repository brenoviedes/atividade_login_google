import { renderWelcomePanel } from './components/Welcome'
import { updateClock } from './utils/getTimeAndDate'
import '/src/css/styles.css'
import '/src/css/responsive.css'

const app = <HTMLDivElement>document.querySelector<HTMLDivElement>('#app')

const token = localStorage.getItem('token')

if (token) {
    renderWelcomePanel(app)
    updateClock()
} else {
    location.href = 'login.html'
}


