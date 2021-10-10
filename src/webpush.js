const webpush = require('web-push')

webpush.setVapidDetails(
    'mailto:20183ti004@utez.edu.mx', 
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEY)

module.exports = webpush