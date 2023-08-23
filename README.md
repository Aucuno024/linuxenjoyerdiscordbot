# Linux enjoyer Discord Bot

Il vous faudra creer un webhook dans le salon puis effectuer les commandes suivantes
``` bash
git clone https://github.com/Aucuno024/linuxenjoyerdiscordbot.git
```
Puis déplacez vous dans le dossier
``` bash
cd linuxenjoyerdiscordbot
```
Créez un fichier webhook.txt et collez y l'id du salon de votre webhook precedement créé
``` bash
nano webhook.txt
```
Créez un fichier .env où vous stockerez le token sous la forme TOKEN="your token"
``` bash
nano .env
```
Installez les dépendances 
```bash
npm install
```
Lancez l'application grâce à node.js
``` bash
node index.js
```
