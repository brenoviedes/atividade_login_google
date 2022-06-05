import { renderDetails } from "./components/Details"
import '/src/css/responsive.css'

export const app = <HTMLDivElement>document.querySelector<HTMLDivElement>('#app')

const token = localStorage.getItem('token')

if (token) {
    renderDetails(app)
} else {
    location.href = 'login.html'
}