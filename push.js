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
   "endpoint": "https://fcm.googleapis.com/fcm/send/ccx5oNrdNoo:APA91bHwC5ytQzR-NN9ptICFC3hm8ggXlU-mJ_nYvVc0K3F4Y93ElKDyN3RnWdFAMMr_mLnzcytvxUiLIFVKSSMhg8Bk17II6nCmYIJ7gBYKQLt4f5qlvzs2YryULWsad5E85urLlWcn",
   "keys": {
      "p256dh": "BEEsymUZOMhNUNRbi14mHfrXFTrb4Ahkebty3GIO7DA6lrxfkQjcdkOO95oSdGIeP+S8HDyavR0JQHM3bw63h2E=",
      "auth": "TpdUQzo7zFimUgTmkG08NQ=="
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