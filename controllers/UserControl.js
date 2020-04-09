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
  },
  // update --check if exist first
  update: (req, res) => {
    UserModel.update({_id: req.body_id}, req.body)
    .then(user => {
      if (!user) res.json({success: false, result: "User does not exist"});
  
      res.json(user);
    })
    .catch(err => {
      res.json({ success: false, result: err})
   });
  },
  // retrieve data
  retrieve: (req, res) => {
    UserModel.find()
    .then(result => {
      if (!result) res.json({success: false, result: "No results found"});

      res.json({ success: true, result: result});
    })
    .catch(err => res.json({success: false, result: err}));
  }  
}

