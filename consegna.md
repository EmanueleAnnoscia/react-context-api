Creiamo il frontend del nostro Blog e le sue pagine!
- Partiamo installando React Router DOM: `npm install react-router-dom`
- Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post. 


(Potete fare una chiamata API a https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts per avere una lista dei post)
- Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro

**Bonus
- Centralizzare la Navbar grazie a un Layout
- Gestire la classe *active*


Esercizio di oggi: React Blog Pages (2)
repo: react-router  (stessa di ieri)
Consegna
Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio e della creazione del post! x
- Aggiungiamo i link alla lista dei post X
- Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post x
- Al submit del form reindirizziamo l'utente verso la pagina di dettaglio del post creato 


Bonus
1. Aggiungiamo la possibilità di ritornare dalla pagina di dettagli alla pagina precedente X
2. Gestire la pagina Not found  X

consegna del 16/06/2025

Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
- Partiamo col definire la lista dei post all’interno di App.jsx oppure fate la chiamata alle API per prelevarle X
- Se non lo abbiamo già fatto in precedenza, creiamo un componente `PostsPage.jsx`  che conterrà al suo interno un titolo e un componente `PostsList.jsx`  che mostra la lista di tutti i nostri post. X
- Creiamo un file per definire il nostro Context ed esportiamolo 
- Importiamo il Provider in `App.jsx` e wrappiamoci la nostra applicazione
- Facciamo in modo che il componente `PostsList.jsx` recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.

**Bonus**
- Implementare un componente `Alert` gestito tramite Context, prevedete il passaggio dinamico di testo e di tipologia dell'Alert
- Implementate il dismiss automatico dell'alert dopo 10 secondi
