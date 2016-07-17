var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});

/**
 * GET /contact
 */
exports.contactGet = function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 */
exports.contactPost = function(req, res) {
  req.assert('name', 'Il faut mettre un nom').notEmpty();
  req.assert('email', 'L`\'email est invalide').isEmail();
  req.assert('email', 'Il faut mettre un email').notEmpty();
  req.assert('message', 'Quel est votre message ?').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    req.flash('error', errors);
    return res.redirect('/contact');
  }

  var mailOptions = {
    from: req.body.name + ' ' + '<'+ req.body.email + '>',
    to: 'votre.email@email.com',
    subject: '✔ Formulaire de contact | Mega Boilerplate',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err) {
    req.flash('success', { msg: 'Merci ! Votre feedback a été envoyé.' });
    res.redirect('/contact');
  });
};
