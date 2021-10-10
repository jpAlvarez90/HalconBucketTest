self.addEventListener('push', e => {
    const data = e.data.json()
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst2.depositphotos.com%2F5592054%2F8985%2Fv%2F950%2Fdepositphotos_89858294-stock-illustration-black-hawk-cartoon.jpg&f=1&nofb=1'
    })
})
