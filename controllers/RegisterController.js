const bcryptjs = require('bcryptjs');
const { User } = require('../database/models');

module.exports = {
  new: function(request, response) {
    return response.render('register');
  },
  create: async function(request, response) {
    try {
      const { name, email, password, picture } = request.body;
  
      const userAlreadyExists = await User.findOne({
        where: { email }
      });
  
      if(userAlreadyExists) {
        return response.redirect('/login');
      }
  
      const user = await User.create({
        name,
        email,
        password: bcryptjs.hashSync(password, 10),
        picture,
      });
      
      request.session.user = { ...user.dataValues, password: null } 
  
      return response.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }
}