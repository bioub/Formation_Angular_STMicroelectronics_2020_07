## Exerice Routes

### Génération des composants

Générer 3 composants dans le dossier `users` :

* UsersList
* UserDetails
* UserAdd

Commencer à simuler la génération avec la commande de génération
en utilisant l'option `-d`, si vous voyez que le composant se créé bien
dans users et update `users/users.module` relancer la commande sans l'option `-d`

### Créer les routes

Dans `users/users-routing.module` créer 3 routes

* URL : /users -> UsersListComponent
* URL : /users/123 -> UserDetailsComponent
* URL : /users/add -> UserAddComponent

### Importer UsersModule

 Importer UsersModule dans AppModule, sinon UsersModule ne sera jamais inclus
 dans le build et donc l'application.

 ATTENTION l'ordre des modules détermine l'ordre des routes

 Dans Angular, la première route qui match l'emporte

 ### Ajouter des liens

 Dans `app.component.html` mettre un lien vers la liste

 Dans `users/users-list/users-list.component.html` ajouter des liens vers la
 page details et la page add

 