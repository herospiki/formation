# 🚀 Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment déployer votre portfolio sur GitHub Pages.

---

## 📋 Prérequis

- ✅ Un compte GitHub
- ✅ Git installé sur votre ordinateur
- ✅ Votre portfolio prêt (c'est le cas !)

---

## 🔧 Étape 1 : Préparer le dépôt GitHub

### 1.1 Créer un nouveau dépôt sur GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton **"New"** (ou "+" → "New repository")
3. Remplissez les informations :
   - **Repository name** : `portfolio` (ou le nom de votre choix)
   - **Description** : "Portfolio Data Science - Projets OpenClassrooms 2021-2022"
   - **Public** : Cochez cette option (obligatoire pour GitHub Pages gratuit)
   - **Ne cochez PAS** "Add a README file" (vous en avez déjà un)
4. Cliquez sur **"Create repository"**

### 1.2 Configurer le nom du dépôt dans vite.config.js

**IMPORTANT** : Vous devez mettre à jour `vite.config.js` avec le nom de votre dépôt.

Si votre dépôt s'appelle `portfolio`, modifiez le fichier `vite.config.js` :

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // ⚠️ Remplacez 'portfolio' par le nom de VOTRE dépôt
})
```

**Note** : Si vous utilisez un dépôt avec votre nom d'utilisateur (ex: `username.github.io`), utilisez `base: '/'`

---

## 💻 Étape 2 : Initialiser Git et pousser le code

Ouvrez un terminal PowerShell dans le dossier `Portfolio` et exécutez les commandes suivantes :

### 2.1 Initialiser Git (si ce n'est pas déjà fait)

```powershell
git init
```

### 2.2 Ajouter tous les fichiers

```powershell
git add .
```

### 2.3 Créer le premier commit

```powershell
git commit -m "Initial commit - Portfolio Data Science"
```

### 2.4 Renommer la branche en 'main'

```powershell
git branch -M main
```

### 2.5 Lier votre dépôt local au dépôt GitHub

**⚠️ Remplacez `VOTRE-USERNAME` et `VOTRE-REPO` par vos vraies valeurs !**

```powershell
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
```

**Exemple** : Si votre username est `sophie-piekarec` et votre repo `portfolio` :
```powershell
git remote add origin https://github.com/sophie-piekarec/portfolio.git
```

### 2.6 Pousser le code sur GitHub

```powershell
git push -u origin main
```

**Note** : GitHub vous demandera peut-être de vous authentifier. Utilisez un **Personal Access Token** si nécessaire.

---

## ⚙️ Étape 3 : Activer GitHub Pages

### 3.1 Aller dans les paramètres du dépôt

1. Sur GitHub, allez dans votre dépôt
2. Cliquez sur **"Settings"** (Paramètres)
3. Dans le menu de gauche, cliquez sur **"Pages"**

### 3.2 Configurer la source

Dans la section **"Build and deployment"** :

1. **Source** : Sélectionnez **"GitHub Actions"**
   - (Ne sélectionnez PAS "Deploy from a branch")

### 3.3 Vérifier les permissions

1. Allez dans **Settings** → **Actions** → **General**
2. Descendez jusqu'à **"Workflow permissions"**
3. Sélectionnez **"Read and write permissions"**
4. Cochez **"Allow GitHub Actions to create and approve pull requests"**
5. Cliquez sur **"Save"**

---

## 🎯 Étape 4 : Déploiement automatique

### 4.1 Le déploiement se fait automatiquement !

Dès que vous avez poussé votre code sur la branche `main`, GitHub Actions va :

1. ✅ Installer les dépendances
2. ✅ Construire votre portfolio (`npm run build`)
3. ✅ Déployer sur GitHub Pages

### 4.2 Suivre le déploiement

1. Allez dans l'onglet **"Actions"** de votre dépôt
2. Vous verrez un workflow en cours : **"Deploy to GitHub Pages"**
3. Cliquez dessus pour voir les détails
4. Attendez que toutes les étapes soient ✅ vertes

**Durée** : Environ 1-2 minutes

### 4.3 Accéder à votre portfolio

Une fois le déploiement terminé, votre portfolio sera accessible à :

```
https://VOTRE-USERNAME.github.io/VOTRE-REPO/
```

**Exemple** : `https://sophie-piekarec.github.io/portfolio/`

---

## 🔄 Étape 5 : Mettre à jour votre portfolio

Pour mettre à jour votre portfolio après des modifications :

```powershell
# 1. Ajouter les fichiers modifiés
git add .

# 2. Créer un commit avec un message descriptif
git commit -m "Mise à jour du portfolio"

# 3. Pousser sur GitHub
git push
```

Le déploiement se fera **automatiquement** ! 🎉

---

## 🐛 Dépannage

### Problème : Le site ne s'affiche pas correctement

**Solution** : Vérifiez que `base` dans `vite.config.js` correspond au nom de votre dépôt.

```javascript
// Si votre URL est https://username.github.io/portfolio/
base: '/portfolio/'

// Si votre URL est https://username.github.io/
base: '/'
```

### Problème : Erreur 404 sur les ressources

**Solution** : Assurez-vous que tous vos chemins dans le code utilisent des chemins relatifs ou absolus corrects.

### Problème : Le workflow échoue

**Solution** : 
1. Vérifiez les permissions dans Settings → Actions → General
2. Vérifiez que vous avez bien activé GitHub Pages avec "GitHub Actions" comme source

### Problème : Les images ne s'affichent pas

**Solution** : Vérifiez que toutes vos images sont bien dans le dossier `public/` et que les chemins sont corrects.

---

## 📝 Commandes Git utiles

```powershell
# Voir l'état des fichiers
git status

# Voir l'historique des commits
git log --oneline

# Annuler les modifications non commitées
git restore .

# Voir les différences
git diff

# Créer une nouvelle branche
git checkout -b nom-de-branche

# Revenir à la branche main
git checkout main
```

---

## ✅ Checklist finale

Avant de déployer, vérifiez que :

- [ ] `vite.config.js` a le bon `base` configuré
- [ ] Tous vos fichiers sont commités
- [ ] Le dépôt GitHub est créé et configuré en Public
- [ ] GitHub Pages est activé avec "GitHub Actions" comme source
- [ ] Les permissions des workflows sont configurées
- [ ] Vous avez poussé votre code sur la branche `main`

---

## 🎉 C'est terminé !

Votre portfolio est maintenant en ligne et se mettra à jour automatiquement à chaque `git push` !

**URL de votre portfolio** : `https://VOTRE-USERNAME.github.io/VOTRE-REPO/`

---

## 📞 Besoin d'aide ?

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Documentation Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Documentation GitHub Actions](https://docs.github.com/en/actions)
