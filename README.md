# Linux enjoyer Discord Bot

Il s'ajit d'un bot discord réécrivant vos messages contenants, par défaut, microsoft, windows, bethesda et elon musk.

Il vous faudra creer un webhook dans le salon discord quelconque puis effectuer les commandes suivantes :
``` bash
git clone https://github.com/Aucuno024/linuxenjoyerdiscordbot.git
```
Puis déplacez vous dans le dossier
``` bash
cd linuxenjoyerdiscordbot
```
Créez un fichier .env où vous stockerez le token sous la forme TOKEN="your token"
``` bash
nano .env
```
Installez les dépendances 
```bash
npm install
```
Ouvrez la configuration de la pipeline et changez webhookChannel par l'id du salon actuel de votre webhook
```bash
nano pipelines/linuxenjoyer/pipeline.json 
```
Lancez l'application grâce à node.js
``` bash
node index.js
```
