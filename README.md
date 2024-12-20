# ViewF2I : Visionneuse de Livres

## Aperçu du Projet
ViewF2I est une application basée sur React conçue pour parcourir une collection de livres stockés dans un fichier local `db.json`. L'application appelle l'API hébergée dans votre dépôt [Jedanns/APIF2I](https://github.com/Jedanns/APIF2I) et offre une interface visuellement attrayante stylisée avec `three.js` et d'autres bibliothèques modernes.

## Fonctionnalités
- **Frontend React** : Une interface utilisateur simple et intuitive construite avec React.
- **Intégration API** : Récupère les données des livres à partir d'une API locale alimentée par `json-server`.
- **Style 3D** : Utilise `three.js` pour ajouter des éléments visuellement interactifs.
- **Routage** : Utilise `react-router-dom` pour la navigation entre les pages.
- **Intégration FontAwesome** : Pour une iconographie améliorée.

---

## Installation

### Prérequis
Assurez-vous d'avoir les éléments suivants installés sur votre système :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Étapes
1. Clonez ce dépôt :
    ```bash
    git clone https://github.com/Jedanns/APIF2I.git
    cd APIF2I
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Démarrez le serveur API local :
    ```bash
    npm start
    ```

4. Dans un terminal séparé, naviguez vers le dossier `viewf2i` et installez ses dépendances :
    ```bash
    cd viewf2i
    npm install
    ```

5. Démarrez l'application React :
    ```bash
    npm start
    ```

6. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

---

## Technologies Utilisées

### Frontend
- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **React Router** : Pour la navigation entre différentes vues/pages.
- **FontAwesome** : Pour des icônes modernes et réactives.
- **GSAP** : Pour les animations.
- **three.js** : Pour les graphiques et animations 3D.
- **dat.GUI** : Pour des contrôles d'interface utilisateur personnalisables.

### Backend
- **json-server** : Pour simuler une API REST avec le fichier `db.json`.

---

## Structure des Fichiers
```
viewf2i/
|-- public/
|-- src/
     |-- components/
     |-- pages/
     |-- App.js
     |-- index.js
|-- package.json
|-- README.md
```

- `components/` : Composants React réutilisables.
- `pages/` : Pages individuelles telles que Accueil, Détails du Livre, etc.
- `App.js` : Composant principal de l'application.
- `index.js` : Point d'entrée pour l'application React.

---

## Scripts

### Démarrer le Serveur de Développement
```bash
npm start
```
Lance l'application en mode développement.

### Construire pour la Production
```bash
npm run build
```
Construit l'application pour la production dans le dossier `build`.

### Exécuter les Tests
```bash
npm test
```
Lance le test runner en mode interactif.

---

## Contribuer
Si vous souhaitez contribuer à ce projet :
1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature-name`).
3. Commitez vos modifications (`git commit -m 'Ajoutez une fonctionnalité'`).
4. Poussez vers la branche (`git push origin feature-name`).
5. Ouvrez une pull request.

---

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

---
