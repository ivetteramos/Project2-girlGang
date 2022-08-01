// const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

//Results 
// When there is a Get request
// verify they logged in with Auth
// Then render results page

// router.get('/results', withAuth, async (req, res) => {
//     try {
//     const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         model: {[]},
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('results', {
//         users,
//         // Pass the logged in flag to the template
//         logged_in: req.session.logged_in,
//     });
//     } catch (err) {
//     res.status(500).json(err);
//     }
// });

//}
//});