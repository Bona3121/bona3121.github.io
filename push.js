var webPush = require('web-push');

const vapidKeys = {
   "publicKey": "BAOG4ngIawupkQF6JmsCayy79Q926CH4SWG8-_Lb-UkFpUIE5BtuVn8HO4_28jm20bHPwnGqC5ehQ2cYJLLGtbM",
   "privateKey": "OkA21xlEyVjCfl6NOqVxXcjcI6Z5my1lT1Tdc4Edye4"
};


webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fohe0jvN1IM:APA91bEnMZn3CLrq7E2PVHgJ0xIGR9qUT_pEs14QoKp9Ib5Pzn0zj5H5H1x-SXnIhAZ8gIUN-R-zY2NK0JBSkVGHK2gV8Jy62ompurD6lSg_PTB9OWVVRRv2OBypaMXso5mAqwGdJWHK",
   "keys": {
      "p256dh": "BI2Gf6Za1hAqumqGdRZHvKitP4TZnB9iz4y0sCn3xRBechcJYcfddPnYmr7tCIQhC2+9veiQzdpV2jQH5OuNYGc=",
      "auth": "+1qUHaasLYhWJx2CcXyTvg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
   gcmAPIKey: '262566948937',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
).then((success) => {
   console.log(success)
}).catch((error) => {
   console.log(error)
})