# 🌌 React TypeScript learning - Space Data Explorer  

Ce projet a été réalisé dans le cadre de ma formation **autodidacte** afin de renforcer mes compétences en **React**, **TypeScript** et **Tailwind CSS**.  
L’objectif était de développer une **application web moderne** permettant de consulter différentes données spatiales en provenance de plusieurs **API publiques**.

---

## ✨ Fonctionnalités

- 🔭 **Articles d’actualité spatiale** via [Spaceflight News API](https://api.spaceflightnewsapi.net/v4/articles/)  
- 🌠 **Images du télescope Hubble** via [Datastro NASA Hubble dataset](https://www.datastro.eu/)  
- 📸 **Astronomy Picture of the Day (APOD)** via [NASA API](https://api.nasa.gov/)  
- 🌌 **Images du télescope spatial James Webb** via [JWST API](https://api.jwstapi.com/)  
- 🚀 **Données sur SpaceX** via [SpaceX API v3](https://github.com/r-spacex/SpaceX-API)

---

## 🛠️ Stack technique

- ⚛️ **React 18**  
- 🟦 **TypeScript**  
- 🎨 **Tailwind CSS** pour le style réactif et moderne  
- 🌐 **Axios** pour les appels API  

---

## 📂 Structure du projet

```bash
REACT_TYPESCRIPT_LEARNING
|   .env
|   .gitignore
|   components.json
|   eslint.config.js
|   index.html
|   LisezMoi.txt
|   package.json
|   pnpm-lock.yaml
|   README.md
|   tree.md
|   tsconfig.app.json
|   tsconfig.json
|   tsconfig.node.json
|   vite.config.ts
|   _redirects

|   App.css
|   App.tsx
|   index.css
|   main.tsx
|   vite-env.d.ts
|   
+---assets
|   |   react.svg
|   |   
|   +---fonts
|   |   +---mars
|   |   |   |   Mars Bold.otf
|   |   |   |   Mars Bold.ttf
|   |   |   |   Mars Thin.otf
|   |   |   |   Mars Thin.ttf
|   |   |   |   Mars.otf
|   |   |   |   Mars.ttf
|   |   |   |   
|   |   |   \---_zip
|   |   |           Mars.zip
|   |   |           
|   |   \---sf
|   |       |   SFMonoBold.otf
|   |       |   SFMonoBoldItalic.otf
|   |       |   SFMonoHeavy.otf
|   |       |   SFMonoHeavyItalic.otf
|   |       |   SFMonoLight.otf
|   |       |   SFMonoLightItalic.otf
|   |       |   SFMonoMedium.otf
|   |       |   SFMonoMediumItalic.otf
|   |       |   SFMonoRegular.otf
|   |       |   SFMonoRegularItalic.otf
|   |       |   SFMonoSemibold.otf
|   |       |   SFMonoSemiboldItalic.otf
|   |       |   
|   |       \---zip
|   |               sf-mono-cufonfonts.zip
|   |               
|   \---imgs
|           pexels_pixabay.jpg
|           pexels_spacex.jpg
|           rocket.svg
|           
+---components
|   |   ApodLauncher.tsx
|   |   ApodPlayer.tsx
|   |   CardsGrid.tsx
|   |   ErrorElement.tsx
|   |   Filters.tsx
|   |   Footer.tsx
|   |   FormInput.tsx
|   |   Header.tsx
|   |   HubbleLauncher.tsx
|   |   HubblePageCard.tsx
|   |   ImageCard.tsx
|   |   index.tsx
|   |   LinksDesktop.tsx
|   |   LinksMobile.tsx
|   |   Navbar.tsx
|   |   NewsBubble.tsx
|   |   NewsCard.tsx
|   |   NewsLauncher.tsx
|   |   NewsLauncherBubbledCards.tsx
|   |   NewsLauncherHeader.tsx
|   |   NewsLauncherSquaredCards.tsx
|   |   NewsPageCard.tsx
|   |   Overview.tsx
|   |   PaginationContainer.tsx
|   |   RelatedNews.tsx
|   |   RocketCard.tsx
|   |   SpaceXLauncher.tsx
|   |   Title.tsx
|   |   WebbLauncher.tsx
|   |   WebbTelescopeSummary.tsx
|   |   
|   \---ui
|           button.tsx
|           card.tsx
|           dropdown-menu.tsx
|           input.tsx
|           label.tsx
|           pagination.tsx
|           
+---lib
|       utils.ts
|       
+---pages
|       Apod.tsx
|       ErrorMain.tsx
|       HomeLayout.tsx
|       Hubble.tsx
|       index.tsx
|       Landing.tsx
|       News.tsx
|       SingleHubble.tsx
|       Spacex.tsx
|       Webb.tsx
|       
+---rappel
|       Rappel.js
|       
\---utils
        constants.ts
        customFetch.ts
        functions.ts
        links.ts
        pagination.ts
        types.ts
        
```
# 🚀 Installation & Lancement
## Cloner le repo
git clone https://github.com/zedauna/react_typeScript_Learning.git

cd react_typeScript_Learning

## Installer les dépendances
pnpm install   # ou npm install / yarn install

## Lancer l’application
pnpm dev

L’application sera disponible sur http://localhost:5173

### ☁️ Déploiement sur Netlify
Le projet est déployé en continu sur Netlify.
Chaque push sur la branche main déclenche automatiquement un build et déploiement.
La configuration Netlify utilise :

```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = "dist"

```
🌍 Démo en ligne : https://alpha-spacex-news.netlify.app

## 🌍 Aperçu du projet

Quelques exemples de fonctionnalités :
  ✅ Affichage des derniers articles sur l’espace
  ✅ Récupération et affichage des images APOD de la NASA
  ✅ Exploration des photos JWST et Hubble
  ✅ Détails sur les lancements SpaceX

## 📚 Objectifs pédagogiques atteints

Compréhension et mise en œuvre des Hooks React (useState, useEffect, custom hooks).
Manipulation des Signatures TypeScript pour sécuriser les données.
Styling rapide et responsive avec Tailwind CSS.
Gestion d’appels multiples vers des API REST.
Mise en pratique de bonnes pratiques : découpage en composants, typages stricts, services API dédiés.
Déploiement continu sur Netlify.

## 📜 Licence
Projet open-source disponible sous licence MIT.