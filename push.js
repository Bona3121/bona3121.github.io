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
   "endpoint": "https://fcm.googleapis.com/fcm/send/eiW1QJMDKZg:APA91bGdrAHd4w-DB3mv-7qsFtOCfd504rLaG9y_agYEAjf6ejt_mv1A--fqvdOh5hGyLOHT8fz6ZOVITgZZjNU6UottLNh3dXca3yZcb1q4s0YjGijUvDwNHdGSjMInK27op5LpcoO9",
   "keys": {
      "p256dh": "BPJTrZ3RwMrE0fl+8xr5sloeloh/s2fiY3ctNRTq0jd8m8GVqmVVSxvJf1MO3UlB5mtzSPlQlotgV/vwnidyMcI=",
      "auth": "gH9bziUZ0bH8fGn41TKGcA=="
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