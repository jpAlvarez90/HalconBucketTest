const { Router } = require('express')
const router = Router()

const webpush = require('../webpush')
let pushSubscription;

router.post('/subscription', async (req, res) => {
    pushSubscription = req.body
    res.status(200).json()
})

router.post('/new-message', async (req, res) => {
    const { message } = req.body

    const payload = JSON.stringify({
        title: 'HalconBucket Notification',
        message: message
    })
    await webpush.sendNotification(pushSubscription, payload)
})

module.exports = router