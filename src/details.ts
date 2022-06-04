import { renderDetails } from "./components/Details"
import '/src/css/responsive.css'

export const app = <HTMLDivElement>document.querySelector<HTMLDivElement>('#app')

const token = localStorage.getItem('token')

if (token) {
    console.log('has token')
} else {
    location.href = 'login.html'
}

renderDetails(app)