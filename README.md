# CIGCounter
## Le projet est réaliser:
* Nodejs
* Expressjs
* mongodb avec cluster AWS

## Configuration:
* `npm install`
* `npm update`
* `npm install nodemon` pour permettre de rafraichise le server automatiquement sans redémarrer nodejs apres modification du code
* démarrer le server pour qu'il écoute le port 3000
- `nodemon server` ou  `node server.js`

## API
* Avec postman ou fiddler

## methode exposées:
* post http://localhost:3000/api/counters
   params : `{
    "name":"counter2",
    "countnumber":3
    }`
* get http://localhost:3000/api/counters
* get http://localhost:3000/api/counters/votre_parametre
* put http://localhost:3000/api/counters/votre_parametre
* detele http://localhost:3000/api/counters/votre_parametre

## Tests unitaires
* Ici nous avons choisi jasmine `npm install -g jasmine-node`
* executer à la racine du projet jamine-node ./tests
