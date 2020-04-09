const UserModel  = require('../models/UserModel');

module.exports = {
  create: (req, res) => {
      let user = new UserModel({
        firstname: req.body.forname,
        lastname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        team: req.body.team
      });

      user.save()
      .then(result => {
          res.json({success: true, result: result });
      })
      .catch(err => {
          res.json({ success: false, result: err})
      });
  }  
}

