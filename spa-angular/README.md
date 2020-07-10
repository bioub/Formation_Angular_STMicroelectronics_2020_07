## Exercice Routes

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

 ## Exercice Posts

 En vous inspirant du module UsersModule, créer un module PostsModule en lien avec le serveur : `http://jsonplaceholder.typicode.com/posts``

### Générer un module Posts

Générer un module Posts avec un module de routing

### Créer 4 composants

Les 4 mêmes que pour Users :
* PostsComponent
* PostsListComponent
* PostDetailsComponent
* PostAddComponent

### Créer les routes

Comme pour Users, créer 3 routes imbriquées

- /posts -> PostsComponent
- /posts/add -> PostAddComponent en route enfant
- /posts/:postId -> PostDetailsComponent en route enfant

### Créer du Faux Texte

Remplir les templates avec du faux texte, si possible le HTML doit être différent de Users

Ajouter les liens dans le menu top bar et le composant PostList

### Créer le service Post

Générer le service PostService

Injecter HttpClient dans le constructeur

Reprendre les 3 méthodes de UserHttpService (en remplacant /users par /posts )

### Interface Post

Créer une interface Post avec les champs: userId, id, title, body

Utiliser cette interface dans votre code

### Assembler le tout

Injecter PostService dans PostsList, PostDetails et PostAdd

Appeler les méthodes correspondantes et compléter les templates pour afficher les données.


### (optionnel)

Afficher le nom de l'utilisateur dans PostsModule plutot que son id dans getById
 