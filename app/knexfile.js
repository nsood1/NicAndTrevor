// Update With Your Config Settings

module.exports = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'password',
      insecureAuth: true,
      database : 'rodeo_stadium'
    }
  }
};
