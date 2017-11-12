module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key  : './hector.pem',
      user : 'ubuntu',
      host : '54.202.204.43',
      ref  : 'origin/master',
      repo : 'https://github.com/jhersonos/inmobiliaria.git',
      path : '/home/ubuntu/webs/inmobiliaria'
    }
  }
};
