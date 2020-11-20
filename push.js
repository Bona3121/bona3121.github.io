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
   "endpoint": "https://fcm.googleapis.com/fcm/send/eFzAv-eQkgA:APA91bFTK0abBKgRllsNE4hQRM4hj4Whzwhe5Fg-zRem05R7wfsIM5mpqg8_dWyDrjD2kHSu0k-9xeY3BkjHiaAkINa4cg5GKkcgCFlfuvbya5Sahhu57pEP2r-xHB2PbLp12dtGpPm7",
   "keys": {
      "p256dh": "BOTXfiMGVZZ2sJQvPG1wJnAn7OG2k6X7SKztAYVISPK7VgHCyxAb8IVxPpH2aT16CpOX7cS6UwhflWynscbpRSw=",
      "auth": "aIz4TivHqd1Hzop87DAaaA=="
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