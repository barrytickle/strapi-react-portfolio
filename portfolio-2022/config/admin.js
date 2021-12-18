module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'daaf251b996712beca540ea4106286af'),
  },
});
