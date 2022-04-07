module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4031ece8a078d6c405d05fdcf846b962'),
  },
});
