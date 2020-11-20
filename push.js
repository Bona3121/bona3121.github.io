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
   "endpoint": "https://fcm.googleapis.com/fcm/send/eCQ7kjQ_LF0:APA91bGp1L_tkkYbNvREYd2XrzclxHdR4Cv9quvlHAO7-IlLyoO_769wfvCsMYrKG6_zR74slkquOVAUI-szDF0ZICvAcpCQYoQueW-NWh6l0DTo3wr3l13W_fqYRpeEvzaiXTqdbxHJ",
   "keys": {
      "p256dh": "BNXBLVe0B1nAIxYtuDWozPWtM40A3Rz0XvIaAtYy6YWJI1VLbLcxgog4rDqbYvt45XtjnA0Bapc4aFPJXrBHBHM=",
      "auth": "7woEhGlGNEKwtTrMfglnGg=="
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