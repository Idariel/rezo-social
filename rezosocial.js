var http = require('http'); // Fait appel à la bibliothèque/module http qui permet de créer le serveur
var url = require('url'); // Charge le module url
var querystring = require('querystring'); // récupère les paramètre de l'url en les présentant sous forme d'array

var server = http.createServer(function(req, res) { // création du serveur
    var page = url.parse(req.url).pathname; // chercher la page
    console.log(page);
    var params = querystring.parse(url.parse(req.url).query); //création de l'array qui récupère les paramètres de l'url
    res.writeHead(404, 'Page introuvable');
    res.writeHead(200, {"Content-Type": "text/html"});

    if (page == '/') {
      res.write('<h1>Bienvenu sur mon super réseau social du 3e millénaire !</h1>');
    }
    else if (page == '/formulaire') {
      res.write('<h1>Inscription</h1>');
      res.write('<p>Formulaire à créer</p>')
    }

    // if ('prenom' in params && 'nom' in params) { // utilisation des paramètes récupérés de l'url
    //     res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    // }
    // else {
    //     res.write('Vous devez bien avoir un prénom et un nom, non ?');
    // }

    var header = document.createElement("div"); //header
      header.classList.add('header');
      header.style.backgroundColor = "teal";
      header.style.padding = "0% 3% 0.5% 3%";

    res.write('<!DOCTYPE html>'+ // voir si on peut utiliser un template
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8" />'+
    '        <title>Rézo Social</title>'+
    '    </head>'+
    '    <body>'+
    '    </body>'+
    '</html>');

    res.end();
});

server.listen(8080); // ne pas oublier de changer pour le port 80 quand on met l'application en production


//   var divGaucheHeader = document.createElement('div'); // div titre à gauche
//     divGaucheHeader.classList.add('rezosocial');
//     divGaucheHeader.classList.add('floating-box');
//   var titHeaderH1 = document.createElement('h1'); // titre
//     titHeaderH1.textContent = "REZO SOCIAL";
//     titHeaderH1.style.color = "white";
//     titHeaderH1.style.padding = "15px 0px 0px 0px";
//   var ssTitHeaderH4 = document.createElement('h4'); //rezo
//     ssTitHeaderH4.textContent = "Mon super réseau social du 3e millénaire";
//     ssTitHeaderH4.style.color = "white";
//
//   var divDroiteHeader = document.createElement('div'); // div connexion à droite dans le header
//     divDroiteHeader.classList.add('connexion');
//     divDroiteHeader.classList.add('floating-box');
//     // divDroiteHeader.textContent = "Connectez-vous";
//     divDroiteHeader.style.float = "right";
//     divDroiteHeader.style.backgroundColor = "skyblue";
//     divDroiteHeader.style.color = "white";
// divDroiteHeader.style.padding = "15 px 0px 0px 0px";
//
//   var loginConnexion = document.createElement('input');
//     loginConnexion.textContent = "Votre email";
//
//   var mdpConnexion = document.createElement('input');
//     mdpConnexion.textContent = "Mot de passe";
//
//   var boutonConnexion = document.createElement('submit');
//     boutonConnexion.textContent = "Valider";
//
//   var divInscription = document.createElement('div');  // bloc d'inscription
//     divInscription.classList.add('inscription');
//     divInscription.style.backgroundColor = "skyblue";
//     divInscription.style.padding = "0%";
//     divInscription.style.width = "300px";
//     divInscription.style.height = "250px";
//     divInscription.style.marginTop = "100px";
//     divInscription.style.marginLeft = "50%";
//     divInscription.style.border = "teal solid 2px";
//
//   var titInscription = document.createElement('h3'); // titre Inscription
//     titInscription.textContent = "Inscription";
//     titInscription.style.color = "white";
//     titInscription.style.fontWeight = "bold";
//     titInscription.style.padding = "15px 0px 0px 0px";
//     titInscription.style.backgroundColor = "teal";
//
//   var p = document.createElement('p');
//     p.style.padding = "5px 0px 0px 0px";
//     p.style.fontSize = "0.8em";
//
//
//     document.body.appendChild(header);
//     header.appendChild(divGaucheHeader);
//     divGaucheHeader.appendChild(titHeaderH1);
//     divGaucheHeader.appendChild(ssTitHeaderH4);
//     header.appendChild(divDroiteHeader);
//     divDroiteHeader.appendChild(loginConnexion);
//     divDroiteHeader.appendChild(mdpConnexion);
//
//     document.body.appendChild(divInscription);
//     divInscription.appendChild(titInscription);
