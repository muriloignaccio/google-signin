const { OAuth2Client } = require('google-auth-library');
const { User } = require('../database/models');

module.exports = {
  new: function(request, response) {
    return response.render('login')
  },
  authenticate: function(request, response) {

  },
  authGoogle: async function(request, response) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: request.body.credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { name, email, picture, sub: google_id } = ticket.getPayload();

    const userAlreadyExists = await User.findOne({
      where: { google_id }
    });

    if (userAlreadyExists) {
      request.session.user = userAlreadyExists;
      return response.redirect('/');
    }

    const user = await User.create({
      name,
      email,
      picture,
      google_id
    });

    request.session.user = user;
    return response.redirect('/');
  }
}