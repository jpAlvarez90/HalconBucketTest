const PUBLIC_VAPID_KEY = 'BMgNS1VEvJg6Dm61uthvZ-CltO1RSBIkp3pht8AXN3_v6L-kaFRPvJ1rWfayVyamgkQUIFGnLF7FYgdVRkZ74p0'

const subscription = async () => {

    // Service worker
    const register = await navigator.serviceWorker.register('sw.js', {
        scope: '/'
    })

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY
    })

    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const formulario = document.querySelector('#formulario')
const mensaje = document.querySelector('#mensaje')

formulario.addEventListener('submit', async e => {
    e.preventDefault()
    await fetch('/new-message', {
        method: 'POST',
        body: JSON.stringify({
            message: mensaje.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    formulario.reset()
})

subscription()