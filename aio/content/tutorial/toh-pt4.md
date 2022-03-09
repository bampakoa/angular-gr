# Προσθήκη services

Το `HeroesComponent` του Tour of Heroes προς το παρόν λαμβάνει και εμφανίζει ψεύτικα δεδομένα.

Μετά την τροποποίηση σε αυτό το σεμινάριο, το `HeroesComponent` θα είναι λιτό και θα επικεντρώνεται στην υποστήριξη της προβολής.
Θα είναι επίσης ευκολότερο να κάνετε unit-test με ένα εικονικό service.

<div class="alert is-helpful">

  Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>


## Γιατί services

Τα components δεν πρέπει να ανακτούν ή να αποθηκεύουν δεδομένα απευθείας και σίγουρα δεν πρέπει να παρουσιάζουν εν γνώσει τους ψεύτικα δεδομένα.
Θα πρέπει να επικεντρωθούν στην παρουσίαση δεδομένων και να αναθέσουν την πρόσβαση δεδομένων σε ένα service.

Σε αυτό το σεμινάριο, θα δημιουργήσετε ένα `HeroService` που μπορούν να χρησιμοποιήσουν όλα τα classes της εφαρμογής για να αποκτήσουν ήρωες.
Αντί να δημιουργήσετε αυτό το service με την [λέξη-κλειδί `new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new),
θα βασιστείτε στο [*dependency injection*](guide/dependency-injection) του Angular 
για να το εισάγετε στο constructor του `HeroesComponent`.

Τα services είναι ένας πολύ καλός τρόπος για να μοιράζεστε πληροφορίες μεταξύ classes που  _δεν γνωρίζονται μεταξύ τους_.
Θα δημιουργήσετε ένα `MessageService` και θα το εισάγετε σε δύο σημεία.

1. Εισάγετέ το στο HeroService, το οποίο χρησιμοποιεί το service για να στείλει ένα μήνυμα.
2. Εισάγετέ το στο MessagesComponent, που εμφανίζει αυτό το μήνυμα και επίσης εμφανίζει το ID
όταν ο χρήστης κάνει κλικ σε έναν ήρωα.


## Δημιουργήστε το `HeroService`

Χρησιμοποιώντας το Angular CLI, δημιουργήστε ένα service με το όνομα `hero`.

<code-example language="sh">
  ng generate service hero
</code-example>

Η εντολή δημιουργεί ένα αρχικό class `HeroService` στο `src/app/hero.service.ts` ως εξής:

<code-example path="toh-pt4/src/app/hero.service.1.ts" region="new"
 header="src/app/hero.service.ts (new service)"></code-example>


### `@Injectable()` services

Παρατηρήστε ότι το νέο service κάνει import το σύμβολο `Injectable` του Angular και χαρακτηρίζει
το class με το decorator `@Injectable()`. Αυτό επισημαίνει το class ως ένα που συμμετέχει στο _σύστημα dependency injection_. Το class `HeroService` πρόκειται να παρέχει ένα injectable service, και μπορεί επίσης να έχει τις δικές του εξαρτήσεις που γίνονται εισαγωγή στο class.
Δεν έχει ακόμη εξαρτήσεις, αλλά [θα έχει σύντομα](#inject-message-service).

Το decorator `@Injectable()` δέχεται ένα αντικείμενο μεταδεδομένων για το service, με τον ίδιο τρόπο που έκανε το decorator `@Component()` για τα classes των components.

### Λήψη δεδομένων ήρωα

Το `HeroService` θα μπορούσε να λάβει δεδομένα ηρώων από οπουδήποτε&mdash;ένα web service, το local storage, ή μια εικονική πηγή δεδομένων.

Η κατάργηση της πρόσβασης δεδομένων από τα components σημαίνει ότι μπορείτε να αλλάξετε γνώμη σχετικά με την υλοποίηση ανά πάσα στιγμή, χωρίς να αγγίξετε κανένα component.
Δεν ξέρουν πώς λειτουργεί το service.

Η υλοποίηση σε _αυτό_ το σεμινάριο θα συνεχίσει να παρέχει _εικονικούς ήρωες_.

Κάντε import το `Hero` και το `HEROES`.

<code-example path="toh-pt4/src/app/hero.service.ts" header="src/app/hero.service.ts" region="import-heroes">
</code-example>

Προσθέστε μια μέθοδο `getHeroes` για να επιστρέψετε τους _εικονικούς ήρωες_.

<code-example path="toh-pt4/src/app/hero.service.1.ts" header="src/app/hero.service.ts" region="getHeroes">
</code-example>

{@a provide}
## Παρέχετε το `HeroService`

Πρέπει να διαθέσετε το `HeroService` στο σύστημα dependency injection
προτού το Angular μπορέσει να το _εισάγει_ στο `HeroesComponent` καταχωρώντας ένα _provider_. Ένα provider είναι κάτι που μπορεί να δημιουργήσει ή να παραδώσει ένα service. Σε αυτήν την περίπτωση, δημιουργεί το class `HeroService` για να παρέχει το service.

Για να βεβαιωθείτε ότι το `HeroService` μπορεί να παρέχει αυτό to service, καταχωρήστε το
με το _injector_, που είναι το αντικείμενο που είναι υπεύθυνο για την επιλογή
και την εισαγωγή του provider όπου το απαιτεί η εφαρμογή.

Από προεπιλογή, η εντολή `ng generate service` του Angular CLI καταχωρεί ένα provider με το _root injector_ για το service σας συμπεριλαμβάνοντας μεταδεδομένα του provider, τα οποία είναι `providedIn: 'root'` στο decorator `@Injectable()`.

```
@Injectable({
  providedIn: 'root',
})
```

Όταν παρέχετε το service στο επίπεδο root, το Angular δημιουργεί μια ενιαία, κοινόχρηστη οντότητα του `HeroService` και το εισάγει σε οποιοδήποτε class το ζητήσει.
Η καταχώρηση του provider στα μεταδεδομένα του `@Injectable` επιτρέπει επίσης στο Angular να βελτιστοποιήσει μια εφαρμογή καταργώντας το service εάν τελικά αποδειχθεί ότι δεν χρησιμοποιείται.

<div class="alert is-helpful">

Για να μάθετε περισσότερα σχετικά με τα providers, ανατρέξτε στην [Ενότητα providers](guide/providers).
Για να μάθετε περισσότερα σχετικά με τα injectors, ανατρέξτε στον [Οδηγό dependency injection](guide/dependency-injection).

</div>

Το `HeroService` είναι τώρα έτοιμο να συνδεθεί στο `HeroesComponent`.

<div class="alert is-important">

Αυτό είναι ένα ενδιάμεσο δείγμα κώδικα που θα σας επιτρέψει να παρέχετε και να χρησιμοποιήσετε το `HeroService`. Σε αυτό το σημείο, ο κώδικας θα διαφέρει από το `HeroService` στην ["τελική επισκόπηση του κώδικα"](#final-code-review).

</div>


## Ενημερώστε το `HeroesComponent`

Ανοίξτε το αρχείο class του `HeroesComponent`.

Διαγράψτε το import του `HEROES`, γιατί δεν θα το χρειάζεστε πια.
Αντ' αυτού, κάντε import το `HeroService`.

<code-example path="toh-pt4/src/app/heroes/heroes.component.ts" header="src/app/heroes/heroes.component.ts (import HeroService)" region="hero-service-import">
</code-example>

Αντικαταστήστε τον ορισμό της ιδιότητας `heroes` με μια δήλωση.

<code-example path="toh-pt4/src/app/heroes/heroes.component.ts" header="src/app/heroes/heroes.component.ts" region="heroes">
</code-example>

{@a inject}

### Εισαγάγετε το `HeroService`

Προσθέστε μια private παράμετρο `heroService` τύπου `HeroService` στο constructor.

<code-example path="toh-pt4/src/app/heroes/heroes.component.1.ts" header="src/app/heroes/heroes.component.ts" region="ctor">
</code-example>

Η παράμετρος ορίζει ταυτόχρονα μια private ιδιότητα `heroService` και την προσδιορίζει ως ένα μέρος εισαγωγής του `HeroService`.

Όταν το Angular δημιουργεί ένα `HeroesComponent`, το σύστημα [Dependency Injection](guide/dependency-injection)
ορίζει την παράμετρο `heroService` στην οντότητα singleton του `HeroService`.

### Προσθήκη `getHeroes()`

Δημιουργήστε μια μέθοδο για να ανακτήσετε τους ήρωες από το service.

<code-example path="toh-pt4/src/app/heroes/heroes.component.1.ts" header="src/app/heroes/heroes.component.ts" region="getHeroes">
</code-example>

{@a oninit}

### Καλέστε το στο `ngOnInit()`

Αν και θα μπορούσατε να καλέσετε το `getHeroes()` στο constructor, αυτή δεν είναι η καλύτερη πρακτική.

Κρατήστε το constructor για την ελάχιστη αρχικοποίηση όπως η σύνδεση παραμέτρων του constructor σε ιδιότητες.
Το constructor δεν πρέπει να _κάνει τίποτα_.
Σίγουρα δεν θα έπρεπε να καλεί μια συνάρτηση που κάνει αιτήματα HTTP όπως θα έκανε μια _πραγματική_ υπηρεσία δεδομένων.

Αντίθετα, καλέστε το `getHeroes()` μέσα στο [*lifecycle hook ngOnInit*](guide/lifecycle-hooks) και
αφήστε το Angular να καλέσει το `ngOnInit()` την κατάλληλη στιγμή _αφου_ δημιουργήσει μια οντότητα ενός `HeroesComponent`.

<code-example path="toh-pt4/src/app/heroes/heroes.component.ts" header="src/app/heroes/heroes.component.ts" region="ng-on-init">
</code-example>

### Δείτε το να τρέχει

Μετά την ανανέωση του προγράμματος περιήγησης, η εφαρμογή θα πρέπει να εκτελείται όπως πριν,
να εμφανίζει μια λίστα ηρώων και μια προβολή λεπτομερειών ήρωα όταν κάνετε κλικ στο όνομα ενός ήρωα.

## Δεδομένα Observable

Η μέθοδος `HeroService.getHeroes()` έχει μια _σύγχρονη μορφή_,
πράγμα που σημαίνει ότι το `HeroService` μπορεί να ανακτήσει ήρωες σύγχρονα.
To `HeroesComponent` καταναλώνει το αποτέλεσμα του `getHeroes()`
σαν να μπορούσαν να οι ήρωες να ανακτηθούν σύγχρονα.

<code-example path="toh-pt4/src/app/heroes/heroes.component.1.ts" header="src/app/heroes/heroes.component.ts" region="get-heroes">
</code-example>

Αυτό δεν θα λειτουργήσει σε μια πραγματική εφαρμογή.
Λειτουργεί τώρα επειδή το service επιστρέφει αυτήν τη στιγμή _εικονικούς ήρωες_.
Αλλά σύντομα η εφαρμογή θα φέρει ήρωες από έναν απομακρυσμένο διακομιστή,
η οποία είναι μια εγγενώς _ασύγχρονη_ λειτουργία.

Το `HeroService` πρέπει να περιμένει να απαντήσει ο διακομιστής,
το `getHeroes()` δεν μπορεί να επιστρέψει αμέσως με δεδομένα ήρωα,
και το πρόγραμμα περιήγησης δεν θα μπλοκάρει όσο περιμένει το service.

Το `HeroService.getHeroes()` πρέπει να έχει μια _ασύγχρονη μορφή_ κάποιου είδους.

Σε αυτό το σεμινάριο, το `HeroService.getHeroes()` θα επιστρέψει ένα `Observable`
γιατί τελικά θα χρησιμοποιήσει τη μέθοδο `HttpClient.get` του Angular για να φέρει τους ήρωες
και η [`HttpClient.get()` επιστρέφει ένα `Observable`](guide/http).

### Observable `HeroService`

Το `Observable` είναι ένα από τα βασικά classes στην [βιβλιοθήκη RxJS](https://rxjs.dev/).

Σε ένα [μετέπειτα σεμινάριο για το HTTP](tutorial/toh-pt6), θα μάθετε ότι οι μέθοδοι `HttpClient` του Angular επιστρέφουν `Observable` του RxJS. Σε αυτό το σεμινάριο, θα προσομοιώσετε τη λήψη δεδομένων από τον διακομιστή με τη συνάρτηση `of()` του RxJS.

Ανοίξτε το αρχείο `HeroService` και κάντε import τα σύμβολα `Observable` και `of` από το RxJS.

<code-example path="toh-pt4/src/app/hero.service.ts" header="src/app/hero.service.ts (Observable imports)" region="import-observable">
</code-example>

Αντικαταστήστε τη μέθοδο `getHeroes()` με την εξής:

<code-example path="toh-pt4/src/app/hero.service.ts" header="src/app/hero.service.ts" region="getHeroes-1"></code-example>

Το `of(HEROES)` επιστρέφει ένα `Observable<Hero[]>` που επιστρέφει  _μια ενιαία τιμή_, την λίστα με τους εικονικούς ήρωες.

<div class="alert is-helpful">

Στο [σεμινάριο HTTP](tutorial/toh-pt6), θα καλέσετε το `HttpClient.get<Hero[]>()`το οποίο επίσης επιστρέφει ένα `Observable<Hero[]>` που επιστρέφει  _μια ενιαία τιμή_, μια λίστα από ήρωες από το περιεχόμενο της απάντησης του HTTP.

</div>

### Κάντε subscribe στο `HeroesComponent`

Η μέθοδος `HeroService.getHeroes` επέστρεφε ένα `Hero[]`.
Τώρα επιστρέφει ένα `Observable<Hero[]>`.

Θα πρέπει να προσαρμοστείτε σε αυτή τη αλλαγή στο `HeroesComponent`.

Βρείτε τη μέθοδο `getHeroes` και αντικαταστήστε την με τον παρακάτω κώδικα
(εμφανίζεται δίπλα-δίπλα με την προηγούμενη έκδοση για σύγκριση)

<code-tabs>

  <code-pane header="heroes.component.ts (Observable)"
    path="toh-pt4/src/app/heroes/heroes.component.ts" region="getHeroes">
  </code-pane>

  <code-pane header="heroes.component.ts (Original)"
    path="toh-pt4/src/app/heroes/heroes.component.1.ts" region="getHeroes">
  </code-pane>

</code-tabs>

Το `Observable.subscribe()`είναι η σημαντική διαφορά.

Η προηγούμενη έκδοση αναθέτει μια λίστα ηρώων στην ιδιότητα `heroes` του component.
Η ανάθεση πραγματοποιείται _σύγχρονα_, σαν να μπορούσε ο διακομιστής να επιστρέψει ήρωες αμέσως
ή το πρόγραμμα περιήγησης να μπορούσε να παγώσει το UI όσο περίμενε την απάντηση του διακομιστή.

Αυτό _δεν θα λειτουργήσει_ όταν το `HeroService` κάνει πραγματικά αιτήματα από έναν απομακρυσμένο διακομιστή.

Η νέα έκδοση περιμένει το `Observable` να επιστρέψει την λίστα των ηρώων&mdash;που
μπορεί να συμβεί τώρα ή σε μερικά λεπτά από τώρα.
Η μέθοδος `subscribe()` περνά την λίστα που επιστρέφεται στο callback,
το οποίο θέτει την ιδιότητα `heroes` του component.

Αυτή η ασύγχρονη προσέγγιση _θα λειτουργήσει_ όταν
το `HeroService` ζητά ήρωες από τον διακομιστή.

## Εμφάνιση μηνυμάτων

Αυτή η ενότητα σας καθοδηγεί στα ακόλουθα:

* προσθήκη ενός `MessagesComponent` που εμφανίζει μηνύματα εφαρμογής στο κάτω μέρος της οθόνης
* δημιουργία ενός injectable `MessageService` σε όλη την εφαρμογή για την αποστολή μηνυμάτων προς εμφάνιση
* εισαγωγή του `MessageService` στο `HeroService`
* εμφάνιση μηνύματος όταν το `HeroService` ανακτά τους ήρωες με επιτυχία

### Δημιουργήστε το `MessagesComponent`

Χρησιμοποιήστε το CLI για να δημιουργήσετε το `MessagesComponent`.

<code-example language="sh">
  ng generate component messages
</code-example>

Το CLI δημιουργεί τα αρχεία του component στο φάκελο `src/app/messages` και δηλώνει το `MessagesComponent` στο `AppModule`.

Τροποποιήστε το template του `AppComponent` για να εμφανίσετε το `MessagesComponent` που δημιουργήθηκε.

<code-example
  header = "src/app/app.component.html"
  path="toh-pt4/src/app/app.component.html">
</code-example>

Θα πρέπει να δείτε την προεπιλεγμένη παράγραφο από το `MessagesComponent` στο κάτω μέρος της σελίδας.

### Δημιουργήστε το `MessageService`

Χρησιμοποιήστε το CLI για να δημιουργήσετε το `MessageService` στο `src/app`.

<code-example language="sh">
  ng generate service message
</code-example>

Ανοίξτε το `MessageService` και αντικαταστήστε το περιεχόμενό του με το ακόλουθο.

<code-example header = "src/app/message.service.ts" path="toh-pt4/src/app/message.service.ts">
</code-example>

Το service διαθέτει προς τα έξω την κρυφή μνήμη των `messages` και δύο μεθόδους: μια για να κάνει `add()` ένα μήνυμα στην κρυφή μνήμη και μια άλλη για να κάνει `clear()` την κρυφή μνήμη.

{@a inject-message-service}
### Εισαγάγετε το στο `HeroService`

Στο `HeroService`, κάντε import το `MessageService`.

<code-example
  header = "src/app/hero.service.ts (import MessageService)"
  path="toh-pt4/src/app/hero.service.ts" region="import-message-service">
</code-example>

Τροποποιήστε το constructor με μια παράμετρο που δηλώνει μια private ιδιότητα `messageService`.
Το Angular θα εισάγει το singleton `MessageService` σε αυτήν την ιδιότητα
όταν δημιουργεί το `HeroService`.

<code-example
  path="toh-pt4/src/app/hero.service.ts" header="src/app/hero.service.ts" region="ctor">
</code-example>

<div class="alert is-helpful">

Αυτό είναι ένα τυπικό σενάριο "*service-in-service*":
εισάγετε το `MessageService` στο `HeroService` το οποίο εισάγεται στο `HeroesComponent`.

</div>

### Στείλτε ένα μήνυμα από το `HeroService`

Τροποποιήστε τη μέθοδο `getHeroes()` για να στείλετε ένα μήνυμα κατά την ανάκτηση των ηρώων.

<code-example path="toh-pt4/src/app/hero.service.ts" header="src/app/hero.service.ts" region="getHeroes">
</code-example>

### Εμφανίστε το μήνυμα από το `HeroService`

Το `MessagesComponent` πρέπει να εμφανίζει όλα τα μηνύματα,
συμπεριλαμβανομένου του μηνύματος που αποστέλλεται από το `HeroService` όταν φέρει ήρωες.

Ανοίξτε το `MessagesComponent` και κάντε import το `MessageService`.

<code-example header="src/app/messages/messages.component.ts (import MessageService)" path="toh-pt4/src/app/messages/messages.component.ts" region="import-message-service">
</code-example>

Τροποποιήστε το constructor με μια παράμετρο που δηλώνει μια ιδιότητα **public** `messageService`.
Το Angular θα εισάγει το singleton `MessageService` σε αυτήν την ιδιότητα
όταν δημιουργεί το `MessagesComponent`.

<code-example path="toh-pt4/src/app/messages/messages.component.ts" header="src/app/messages/messages.component.ts" region="ctor">
</code-example>

Η ιδιότητα `messageService` **πρέπει να είναι public** επειδή πρόκειται να τη χρησιμοποιήσετε στο template.

<div class="alert is-important">

Το Angular χρησιμοποιεί μόνο τις _public_ ιδιότητες του component στο template.

</div>

### Συνδέστε το `MessageService`

Αντικαταστήστε το template του `MessagesComponent` που δημιουργήθηκε από το CLI με το ακόλουθο.

<code-example
  header = "src/app/messages/messages.component.html"
  path="toh-pt4/src/app/messages/messages.component.html">
</code-example>

Αυτό το template συνδέεται απευθείας με το `messageService` του component.

* Το `*ngIf` εμφανίζει μόνο την περιοχή μηνυμάτων εάν υπάρχουν μηνύματα προς εμφάνιση.


* Ένα `*ngFor` παρουσιάζει τη λίστα των μηνυμάτων σε επαναλαμβανόμενα στοιχεία `<div>`.


* Ένα [event binding](guide/event-binding) του Angular συνδέει το event click του κουμπιού
στο `MessageService.clear()`.

Τα μηνύματα θα φαίνονται καλύτερα όταν προσθέσετε τα στυλ CSS στο `messages.component.css`
όπως αναφέρεται σε μία από τις καρτέλες της ["τελικής προεπισκόπησης του κώδικα"](#final-code-review) παρακάτω.

## Προσθέστε επιπλέον μηνύματα στο service του ήρωα

Το ακόλουθο παράδειγμα δείχνει πώς να στέλνετε και να εμφανίζετε ένα μήνυμα κάθε φορά που ο χρήστης κάνει κλικ σε
έναν ήρωα, εμφανίζοντας ένα ιστορικό των επιλογών του χρήστη. Αυτό θα είναι χρήσιμο όταν φτάσετε στην
επόμενη ενότητα για την [Δρομολόγηση](tutorial/toh-pt5).

<code-example header="src/app/heroes/heroes.component.ts"
path="toh-pt4/src/app/heroes/heroes.component.ts">
</code-example>

Ανανεώστε το πρόγραμμα περιήγησης για να δείτε τη λίστα των ηρώων και κάντε κύλιση προς τα κάτω για να δείτε τα
μηνύματα από το HeroService. Κάθε φορά που κάνετε κλικ σε έναν ήρωα, εμφανίζεται ένα νέο μήνυμα που καταγράφει
την επιλογή. Χρησιμοποιήστε το κουμπί **Clear messages** για να διαγράψετε το ιστορικό μηνυμάτων.

{@a final-code-review}

## Τελική επισκόπηση του κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα.

<code-tabs>

  <code-pane header="src/app/hero.service.ts"
  path="toh-pt4/src/app/hero.service.ts">
  </code-pane>

  <code-pane header="src/app/message.service.ts"
  path="toh-pt4/src/app/message.service.ts">
  </code-pane>

  <code-pane header="src/app/heroes/heroes.component.ts"
  path="toh-pt4/src/app/heroes/heroes.component.ts">
  </code-pane>

  <code-pane header="src/app/messages/messages.component.ts"
  path="toh-pt4/src/app/messages/messages.component.ts">
  </code-pane>

  <code-pane header="src/app/messages/messages.component.html"
  path="toh-pt4/src/app/messages/messages.component.html">
  </code-pane>

  <code-pane header="src/app/messages/messages.component.css"
  path="toh-pt4/src/app/messages/messages.component.css">
  </code-pane>

  <code-pane header="src/app/app.module.ts"
  path="toh-pt4/src/app/app.module.ts">
  </code-pane>

  <code-pane header="src/app/app.component.html"
  path="toh-pt4/src/app/app.component.html">
  </code-pane>

</code-tabs>

## Περίληψη

* Τροποποιήσατε την πρόσβαση δεδομένων στο class `HeroService`.
* Καταχωρίσατε το `HeroService` ως _provider_ του service του στο επίπεδο root ώστε να μπορεί να εισαχθεί οπουδήποτε στην εφαρμογή.
* Χρησιμοποιήσατε το [Dependency Injection του Angular](guide/dependency-injection) για να το εισάγετε σε ένα component.
* Δώσατε στη μέθοδο `HeroService` _get data_ μια ασύγχρονη μορφή.
* Ανακαλύψατε το `Observable` και τη βιβλιοθήκη RxJS.
* Χρησιμοποιήσατε το `of()` του RxJS για να επιστρέψετε ένα observable από εικονικούς ήρωες (`Observable<Hero[]>`).
* Το lifecycle hook `ngOnInit` του component καλεί τη μέθοδο `HeroService`, και όχι το constructor.
* Δημιουργήσατε ένα `MessageService` για loosely-coupled επικοινωνία μεταξύ των classes.
* Το `HeroService` που εισάγεται σε ένα component δημιουργείται με ένα άλλο service που εισάγεται,
 το `MessageService`.

@reviewed 2022-03-09
