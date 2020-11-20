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
   "endpoint": "https://fcm.googleapis.com/fcm/send/dQ5HqsNvV2M:APA91bG6Fac0WXRsriJc4z6tTR7ggHQZ0Hb2W5Tucf9kSfr5xT2an6OVByE1xRgVBpjlS_nutFQ5Hm6qF2qqfGLoBMkQRvWTcbse6e8tdT9SCI6YSMDHY6_qGHBM7o3Xq3-wrgPQu9-c",
   "keys": {
      "p256dh": "BJDLlPm57k1itg2mcHvvw5AonSo0KIUM57F8eZ8YPUTyQSnkfz9NnLqnwzzJ/3moKA2DfTyY6jgZld4Ti0NYB0c=",
      "auth": " iAhNS9kgedI0TiFAmnyaMA=="
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