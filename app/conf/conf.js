/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {
  dev: {},
  prod: {},
  test: {},
}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://10.41.6.41';
conf['dev']['port'] = '3500';
// conf['dev']['apiServer'] = 'https://8556ae99.ngrok.io/';
conf['dev']['apiServer'] = 'http://10.41.6.42:5000/';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
conf['dev']['mediaApi'] = 'http://10.41.6.41:3500/dist/';
conf['dev']['keyCrypto'] = 'K30s2018G4@';

/* auth api */
conf['dev']['authApi'] = {
  'user': 'rootpengibot',
  'pass': 'pengibot'
};

/* Enviroment on production */
conf['prod']['base_url'] = 'https://pengibot-204215.appspot.com';
conf['prod']['port'] = '';
conf['prod']['apiServer'] = 'https://313cba57.ngrok.io/';
conf['prod']['fileName'] = 'all_dist';
conf['prod']['minify'] = false;
conf['prod']['mediaApi'] = 'https://pengibot-204215.appspot.com/dist/';
conf['prod']['keyCrypto'] = 'K30s2018G4@';

/* auth api */
conf['prod']['authApi'] = {
  'user': 'rootpengibot',
  'pass': 'pengibot'
};


/* ------------- Enviroment on test ngrok  ------------------------------- */
conf['test']['base_url'] = 'http://4d480d06.ngrok.io';
conf['test']['port'] = '';
conf['test']['apiServer'] = 'http://104.155.176.190:5000';
conf['test']['fileName'] = 'all_dist';
conf['test']['minify'] = true;
conf['test']['mediaApi'] = 'http://4d480d06.ngrok.io/dist/';
conf['test']['keyCrypto'] = 'K30s2018G4@';

/* auth api */
conf['test']['authApi'] = {
  'user': 'rootpengibot',
  'pass': 'pengibot'
};


/* Export constants */
module.exports = conf[global.enviroment];
