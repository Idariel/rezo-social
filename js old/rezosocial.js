
  var header = document.createElement("div"); //header
    header.classList.add('header');
    header.style.backgroundColor = "teal";
    header.style.padding = "0% 3% 0.5% 3%";

  var divGaucheHeader = document.createElement('div'); // div titre à gauche
    divGaucheHeader.classList.add('rezosocial');
    divGaucheHeader.classList.add('floating-box');
  var titHeaderH1 = document.createElement('h1'); // titre
    titHeaderH1.textContent = "REZO SOCIAL";
    titHeaderH1.style.color = "white";
    titHeaderH1.style.padding = "15px 0px 0px 0px";
  var ssTitHeaderH4 = document.createElement('h4'); //rezo
    ssTitHeaderH4.textContent = "Mon super réseau social du 3e millénaire";
    ssTitHeaderH4.style.color = "white";

  var divDroiteHeader = document.createElement('div'); // div connexion à droite dans le header
    divDroiteHeader.classList.add('connexion');
    divDroiteHeader.classList.add('floating-box');
    // divDroiteHeader.textContent = "Connectez-vous";
    divDroiteHeader.style.float = "right";
    divDroiteHeader.style.backgroundColor = "skyblue";
    divDroiteHeader.style.color = "white";
divDroiteHeader.style.padding = "15 px 0px 0px 0px";

  var loginConnexion = document.createElement('input');
    loginConnexion.textContent = "Votre email";

  var mdpConnexion = document.createElement('input');
    mdpConnexion.textContent = "Mot de passe";

  var boutonConnexion = document.createElement('submit');
    boutonConnexion.textContent = "Valider";

  var divInscription = document.createElement('div');  // bloc d'inscription
    divInscription.classList.add('inscription');
    divInscription.style.backgroundColor = "skyblue";
    divInscription.style.padding = "0%";
    divInscription.style.width = "300px";
    divInscription.style.height = "250px";
    divInscription.style.marginTop = "100px";
    divInscription.style.marginLeft = "50%";
    divInscription.style.border = "teal solid 2px";

  var titInscription = document.createElement('h3'); // titre Inscription
    titInscription.textContent = "Inscription";
    titInscription.style.color = "white";
    titInscription.style.fontWeight = "bold";
    titInscription.style.padding = "15px 0px 0px 0px";
    titInscription.style.backgroundColor = "teal";

  var p = document.createElement('p');
    p.style.padding = "5px 0px 0px 0px";
    p.style.fontSize = "0.8em";


    document.body.appendChild(header);
    header.appendChild(divGaucheHeader);
    divGaucheHeader.appendChild(titHeaderH1);
    divGaucheHeader.appendChild(ssTitHeaderH4);
    header.appendChild(divDroiteHeader);
    divDroiteHeader.appendChild(loginConnexion);
    divDroiteHeader.appendChild(mdpConnexion);

    document.body.appendChild(divInscription);
    divInscription.appendChild(titInscription);
