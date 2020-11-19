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
   "endpoint": "https://fcm.googleapis.com/fcm/send/fxlUOrItykI:APA91bGHzl85MqbA97q-1Y2tLQg4P18-Ba2npL8aZ8eWAa4ju0yDIEZNmNtyZue2jj8mODIQAFvM4VYRC7lrd4vPYQg6S-0sLqOAI8FINN3LA9vmKFBVo2tbQ6bOON9XC0ZgVf9TU4je",
   "keys": {
      "p256dh": "BG0HMHlx30DC1ECpljFsYahS+oEmxdIOTUyteGMwwW+bE2vhStz06W0GIHAvspLloTBnH+Lo4sHJkXchfiqTHGo=",
      "auth": " Olowot8jXR+NrwgtJ3AYww=="
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