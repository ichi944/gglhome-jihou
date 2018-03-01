require('date-utils');
const googlehome = require('google-home-notifier');
const { ip } = require('../config');
const LANGUAGE = 'ja';

const dt = new Date();
const formatted = dt.toFormat('M月D日');
const message = `おはようございます、${formatted}の8時です。`;

googlehome.ip(ip);
googlehome.device('Google-Home', LANGUAGE);
googlehome.notify(message, (res) => {
  console.log(res);
});
