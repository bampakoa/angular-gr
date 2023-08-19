# Προσθήκη services

Το `HeroesComponent` του Tour of Heroes λαμβάνει και εμφανίζει ψεύτικα δεδομένα.

Η τροποποίηση του `HeroesComponent` επικεντρώνεται στην υποστήριξη της προβολής και διευκολύνει τα unit test με ένα εικονικό service.

<div class="alert is-helpful">

Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>

## Γιατί services

Τα components δεν πρέπει να ανακτούν ή να αποθηκεύουν δεδομένα απευθείας και σίγουρα δεν πρέπει να παρουσιάζουν εν γνώσει τους ψεύτικα δεδομένα.
Θα πρέπει να επικεντρωθούν στην παρουσίαση δεδομένων και να αναθέσουν την πρόσβαση δεδομένων σε ένα service.

Αυτό το σεμινάριο δημιουργεί ένα `HeroService` που μπορούν να χρησιμοποιήσουν όλα τα classes της εφαρμογής για να αποκτήσουν ήρωες.
Αντί να δημιουργήσετε αυτό το service με την [λέξη-κλειδί `new`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/new),
χρησιμοποιήστε το [*dependency injection*](guide/dependency-injection) που υποστηρίζει η Angular
για να το εισάγετε στον constructor του `HeroesComponent`.

Τα services είναι ένας πολύ καλός τρόπος για να μοιράζεστε πληροφορίες μεταξύ classes που *δεν γνωρίζονται μεταξύ τους*.
Έπειτα δημιουργήστε ένα `MessageService` και εισάγετέ το σε αυτά τα δύο σημεία.

*   Εισάγετέ το στο `HeroService`, το οποίο χρησιμοποιεί το service για να στείλει ένα μήνυμα
*   Εισάγετέ το στο `MessagesComponent`, που εμφανίζει αυτό το μήνυμα και επίσης εμφανίζει το ID
όταν ο χρήστης κάνει κλικ σε έναν ήρωα

## Δημιουργήστε το `HeroService`

Εκτελέστε το `ng generate` για να δημιουργήσετε ένα service με το όνομα `hero`.

<code-example format="shell" language="shell">

ng generate service hero

</code-example>

Η εντολή δημιουργεί ένα αρχικό class `HeroService` στο `src/app/hero.service.ts` ως εξής:

<code-example header="src/app/hero.service.ts (νέο service)" path="toh-pt4/src/app/hero.service.1.ts" region="new"></code-example>

### `@Injectable()` services

Παρατηρήστε ότι το νέο service κάνει import το σύμβολο `Injectable` της Angular και χαρακτηρίζει
το class με το decorator `@Injectable()`. Αυτό επισημαίνει το class ως ένα που συμμετέχει στο *σύστημα dependency injection*. Το class `HeroService` πρόκειται να παρέχει ένα injectable service, και μπορεί επίσης να έχει τις δικές του εξαρτήσεις που γίνονται εισαγωγή στο class.
Δεν έχει ακόμη εξαρτήσεις.

Το decorator `@Injectable()` δέχεται ένα αντικείμενο μεταδεδομένων για το service, με τον ίδιο τρόπο που έκανε το decorator `@Component()` για τα classes των components.

### Λήψη δεδομένων ήρωα

Το `HeroService` θα μπορούσε να λάβει δεδομένα ηρώων από οπουδήποτε όπως ένα web service, το local storage, ή μια εικονική πηγή δεδομένων.

Η κατάργηση της πρόσβασης δεδομένων από τα components σημαίνει ότι μπορείτε να αλλάξετε γνώμη σχετικά με την υλοποίηση ανά πάσα στιγμή, χωρίς να αγγίξετε κανένα component.
Δεν ξέρουν πώς λειτουργεί το service.

Η υλοποίηση σε *αυτό* το σεμινάριο συνεχίζει να παρέχει *εικονικούς ήρωες*.

Κάντε import το `Hero` και το `HEROES`.

<code-example header="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.ts" region="import-heroes"></code-example>

Προσθέστε μια μέθοδο `getHeroes` για να επιστρέψετε τους *εικονικούς ήρωες*.

<code-example header="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.1.ts" region="getHeroes"></code-example>

<a id="provide"></a>

## Παρέχετε το `HeroService`

Πρέπει να διαθέσετε το `HeroService` στο σύστημα dependency injection
προτού η Angular μπορέσει να το *εισάγει* στο `HeroesComponent` καταχωρώντας έναν *provider*. Ένας provider είναι κάτι που μπορεί να δημιουργήσει ή να παραδώσει ένα service. Σε αυτήν την περίπτωση, δημιουργεί το class `HeroService` για να παρέχει το service.

Για να βεβαιωθείτε ότι το `HeroService` μπορεί να παρέχει αυτό to service, καταχωρήστε το
με τον *injector*. Ο *injector* είναι το αντικείμενο που επιλέγει και εισάγει τον provider όπου το απαιτεί η εφαρμογή.

Από προεπιλογή, το `ng generate service` καταχωρεί ένα provider με τον *root injector* για το service σας συμπεριλαμβάνοντας μεταδεδομένα του provider, τα οποία είναι `providedIn: 'root'` στο decorator `@Injectable()`.

<code-example format="typescript" language="typescript">

@Injectable({
  providedIn: 'root',
})

</code-example>

Όταν παρέχετε το service στο επίπεδο root, η Angular δημιουργεί μια ενιαία, κοινόχρηστη οντότητα του `HeroService` και το εισάγει σε οποιοδήποτε class το ζητήσει.
Η καταχώρηση του provider στα μεταδεδομένα του `@Injectable` επιτρέπει επίσης στην Angular να βελτιστοποιήσει μια εφαρμογή καταργώντας το service εάν δεν χρησιμοποιείται.

<div class="alert is-helpful">

Για να μάθετε περισσότερα σχετικά με τα providers, ανατρέξτε στην [Ενότητα providers](guide/providers).
Για να μάθετε περισσότερα σχετικά με τα injectors, ανατρέξτε στον [Οδηγό dependency injection](guide/dependency-injection).

</div>

Το `HeroService` είναι τώρα έτοιμο να συνδεθεί στο `HeroesComponent`.

<div class="alert is-important">

Αυτό είναι ένα ενδιάμεσο δείγμα κώδικα που σας επιτρέπει να παρέχετε και να χρησιμοποιήσετε το `HeroService`. Σε αυτό το σημείο, ο κώδικας διαφέρει από το `HeroService` στην ["τελική επισκόπηση του κώδικα"](#final-code-review).

</div>

## Ενημερώστε το `HeroesComponent`

Ανοίξτε το αρχείο class του `HeroesComponent`.

Διαγράψτε το import του `HEROES`, γιατί δεν θα το χρειάζεστε πια.
Αντ' αυτού, κάντε import το `HeroService`.

<code-example header="src/app/heroes/heroes.component.ts (import HeroService)" path="toh-pt4/src/app/heroes/heroes.component.ts" region="hero-service-import"></code-example>

Αντικαταστήστε τον ορισμό της ιδιότητας `heroes` με μια δήλωση.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.ts" region="heroes"></code-example>

<a id="inject"></a>

### Εισαγάγετε το `HeroService`

Προσθέστε μια private παράμετρο `heroService` τύπου `HeroService` στο constructor.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.1.ts" region="ctor"></code-example>

Η παράμετρος ορίζει ταυτόχρονα μια private ιδιότητα `heroService` και την προσδιορίζει ως ένα μέρος εισαγωγής του `HeroService`.

Όταν η Angular δημιουργεί ένα `HeroesComponent`, το σύστημα [Dependency Injection](guide/dependency-injection)
ορίζει την παράμετρο `heroService` στην οντότητα singleton του `HeroService`.

### Προσθήκη `getHeroes()`

Δημιουργήστε μια μέθοδο για να ανακτήσετε τους ήρωες από το service.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.1.ts" region="getHeroes"></code-example>

<a id="oninit"></a>

### Καλέστε το στο `ngOnInit()`

Αν και θα μπορούσατε να καλέσετε το `getHeroes()` στο constructor, αυτή δεν είναι η καλύτερη πρακτική.

Κρατήστε το constructor για την ελάχιστη αρχικοποίηση όπως η σύνδεση παραμέτρων του constructor σε ιδιότητες.
Το constructor δεν πρέπει να *κάνει τίποτα*.
Σίγουρα δεν θα έπρεπε να καλεί μια συνάρτηση που κάνει αιτήματα HTTP όπως θα έκανε μια *πραγματική* υπηρεσία δεδομένων.

Αντίθετα, καλέστε το `getHeroes()` μέσα στο [*lifecycle hook ngOnInit*](guide/lifecycle-hooks) και
αφήστε την Angular να καλέσει το `ngOnInit()` την κατάλληλη στιγμή *αφού* δημιουργήσει μια οντότητα ενός `HeroesComponent`.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.ts" region="ng-on-init"></code-example>

### Δείτε το να τρέχει

Μετά την ανανέωση του προγράμματος περιήγησης, η εφαρμογή θα πρέπει να εκτελείται όπως πριν,
να εμφανίζει μια λίστα ηρώων και μια προβολή λεπτομερειών ήρωα όταν κάνετε κλικ στο όνομα ενός ήρωα.

## Δεδομένα Observable

Η μέθοδος `HeroService.getHeroes()` έχει μια *σύγχρονη μορφή*,
πράγμα που σημαίνει ότι το `HeroService` μπορεί να ανακτήσει ήρωες σύγχρονα.
To `HeroesComponent` καταναλώνει το αποτέλεσμα του `getHeroes()`
σαν να μπορούσαν να οι ήρωες να ανακτηθούν σύγχρονα.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.1.ts" region="get-heroes"></code-example>

Αυτή η προσέγγιση δεν θα λειτουργήσει σε μια πραγματική εφαρμογή που χρησιμοποιεί ασύγχρονες κλήσεις.
Λειτουργεί τώρα επειδή το service επιστρέφει αυτήν τη στιγμή *εικονικούς ήρωες*.

Εάν η `getHeroes()` δεν μπορεί να επιστρέψει αμέσως με δεδομένα ήρωα,
δεν θα έπρεπε να ήταν σύγχρονη, γιατί αυτό θα μπλοκάρει το πρόγραμμα περιήγησης καθώς περιμένει να επιστρέψει δεδομένα.

Το `HeroService.getHeroes()` πρέπει να έχει μια *ασύγχρονη μορφή* κάποιου είδους.

Σε αυτό το σεμινάριο, το `HeroService.getHeroes()` επιστρέφει ένα `Observable`
έτσι ώστε να μπορέσει να χρησιμοποιήσει τη μέθοδο `HttpClient.get` της Angular για να φέρει τους ήρωες
και η [`HttpClient.get()` επιστρέφει ένα `Observable`](guide/understanding-communicating-with-http).

### Observable `HeroService`

Το `Observable` είναι ένα από τα βασικά classes στην [βιβλιοθήκη RxJS](https://rxjs.dev).

Στο [σεμινάριο για το HTTP](tutorial/tour-of-heroes/toh-pt6), μπορείτε να μάθετε πως οι μέθοδοι `HttpClient` της Angular επιστρέφουν `Observable` αντικείμενα του RxJS. Αυτό το σεμινάριο προσομοιώνει τη λήψη δεδομένων από τον διακομιστή με τη συνάρτηση `of()` του RxJS.

Ανοίξτε το αρχείο `HeroService` και κάντε import τα σύμβολα `Observable` και `of` από το RxJS.

<code-example header="src/app/hero.service.ts (Observable imports)" path="toh-pt4/src/app/hero.service.ts" region="import-observable"></code-example>

Αντικαταστήστε τη μέθοδο `getHeroes()` με την εξής:

<code-example header="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.ts" region="getHeroes-1"></code-example>

Το `of(HEROES)` επιστρέφει ένα `Observable<Hero[]>` που επιστρέφει *μια ενιαία τιμή*, την λίστα με τους εικονικούς ήρωες.

<div class="alert is-helpful">

Το [σεμινάριο HTTP](tutorial/tour-of-heroes/toh-pt6) σας δείχνει πως να καλέσετε το `HttpClient.get<Hero[]>()`το οποίο επίσης επιστρέφει ένα `Observable<Hero[]>` που επιστρέφει  *μια ενιαία τιμή*, μια λίστα από ήρωες από το περιεχόμενο της απάντησης του HTTP.

</div>

### Κάντε subscribe στο `HeroesComponent`

Η μέθοδος `HeroService.getHeroes` επέστρεφε ένα `Hero[]`.
Τώρα επιστρέφει ένα `Observable<Hero[]>`.

Πρέπει να προσαρμόσετε την εφαρμογή σας ώστε να λειτουργεί με αυτή τη αλλαγή στο `HeroesComponent`.

Βρείτε τη μέθοδο `getHeroes` και αντικαταστήστε την με τον παρακάτω κώδικα.
Ο νέος κώδικας εμφανίζεται δίπλα-δίπλα με την προηγούμενη έκδοση για σύγκριση.

<code-tabs>
    <code-pane header="heroes.component.ts (Observable)" path="toh-pt4/src/app/heroes/heroes.component.ts" region="getHeroes"></code-pane>
    <code-pane header="heroes.component.ts (Αρχικό)" path="toh-pt4/src/app/heroes/heroes.component.1.ts" region="getHeroes"></code-pane>
</code-tabs>

Το `Observable.subscribe()`είναι η σημαντική διαφορά.

Η προηγούμενη έκδοση αναθέτει μια λίστα ηρώων στην ιδιότητα `heroes` του component.
Η ανάθεση πραγματοποιείται *σύγχρονα*, σαν να μπορούσε ο διακομιστής να επιστρέψει ήρωες αμέσως
ή το πρόγραμμα περιήγησης να μπορούσε να παγώσει το UI όσο περίμενε την απάντηση του διακομιστή.

Αυτό *δεν θα λειτουργήσει* όταν το `HeroService` κάνει πραγματικά αιτήματα από έναν απομακρυσμένο διακομιστή.

Η νέα έκδοση περιμένει το `Observable` να επιστρέψει την λίστα των ηρώων, που
μπορεί να συμβεί τώρα ή σε μερικά λεπτά από τώρα.
Η μέθοδος `subscribe()` περνά την λίστα που επιστρέφεται στο callback,
το οποίο θέτει την ιδιότητα `heroes` του component.

Αυτή η ασύγχρονη προσέγγιση *λειτουργεί* όταν
το `HeroService` ζητά ήρωες από τον διακομιστή.

## Εμφάνιση μηνυμάτων

Αυτή η ενότητα σας καθοδηγεί στα ακόλουθα:

*   Προσθήκη ενός `MessagesComponent` που εμφανίζει μηνύματα εφαρμογής στο κάτω μέρος της οθόνης
*   Δημιουργία ενός injectable `MessageService` σε όλη την εφαρμογή για την αποστολή μηνυμάτων προς εμφάνιση
*   Εισαγωγή του `MessageService` στο `HeroService`
*   Εμφάνιση μηνύματος όταν το `HeroService` ανακτά τους ήρωες με επιτυχία

### Δημιουργήστε το `MessagesComponent`

Χρησιμοποιήστε το `ng generate` για να δημιουργήσετε το `MessagesComponent`.

<code-example format="shell" language="shell">

ng generate component messages

</code-example>

Το `ng generate` δημιουργεί τα αρχεία του component στο φάκελο `src/app/messages` και δηλώνει το `MessagesComponent` στο `AppModule`.

Τροποποιήστε το template του `AppComponent` για να εμφανίσετε το `MessagesComponent`.

<code-example header="src/app/app.component.html" path="toh-pt4/src/app/app.component.html"></code-example>

Θα πρέπει να δείτε την προεπιλεγμένη παράγραφο από το `MessagesComponent` στο κάτω μέρος της σελίδας.

### Δημιουργήστε το `MessageService`

Χρησιμοποιήστε το `ng generate` για να δημιουργήσετε το `MessageService` στο `src/app`.

<code-example format="shell" language="shell">

ng generate service message

</code-example>

Ανοίξτε το `MessageService` και αντικαταστήστε το περιεχόμενό του με το ακόλουθο.

<code-example header="src/app/message.service.ts" path="toh-pt4/src/app/message.service.ts"></code-example>

Το service διαθέτει προς τα έξω την κρυφή μνήμη των `messages` και δύο μεθόδους:

* Μία για να κάνει `add()` ένα μήνυμα στην κρυφή μνήμη
* Μία άλλη για να κάνει `clear()` την κρυφή μνήμη.

<a id="inject-message-service"></a>

### Εισαγάγετε το στο `HeroService`

Στο `HeroService`, κάντε import το `MessageService`.

<code-example header="src/app/hero.service.ts (import MessageService)" path="toh-pt4/src/app/hero.service.ts" region="import-message-service"></code-example>

Τροποποιήστε τον constructor με μια παράμετρο που δηλώνει μια private ιδιότητα `messageService`.
Η Angular εισάγει το singleton `MessageService` σε αυτήν την ιδιότητα
όταν δημιουργεί το `HeroService`.

<code-example header="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.ts" region="ctor"></code-example>

<div class="alert is-helpful">

Αυτό είναι ένα παράδειγμα ενός τυπικού σεναρίου "*service-in-service*" στο οποίο εισάγετε το `MessageService` στο `HeroService` το οποίο εισάγεται στο `HeroesComponent`.

</div>

### Στείλτε ένα μήνυμα από το `HeroService`

Τροποποιήστε τη μέθοδο `getHeroes()` για να στείλετε ένα μήνυμα κατά την ανάκτηση των ηρώων.

<code-example header="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.ts" region="getHeroes"></code-example>

### Εμφανίστε το μήνυμα από το `HeroService`

Το `MessagesComponent` πρέπει να εμφανίζει όλα τα μηνύματα,
συμπεριλαμβανομένου του μηνύματος που αποστέλλεται από το `HeroService` όταν φέρει ήρωες.

Ανοίξτε το `MessagesComponent` και κάντε import το `MessageService`.

<code-example header="src/app/messages/messages.component.ts (import MessageService)" path="toh-pt4/src/app/messages/messages.component.ts" region="import-message-service"></code-example>

Τροποποιήστε το constructor με μια παράμετρο που δηλώνει μια ιδιότητα **public** `messageService`.
Η Angular εισάγει το singleton `MessageService` σε αυτήν την ιδιότητα
όταν δημιουργεί το `MessagesComponent`.

<code-example header="src/app/messages/messages.component.ts" path="toh-pt4/src/app/messages/messages.component.ts" region="ctor"></code-example>

Η ιδιότητα `messageService` **πρέπει να είναι public** επειδή πρόκειται να τη χρησιμοποιήσετε στο template.

<div class="alert is-important">

Η Angular χρησιμοποιεί μόνο τις *public* ιδιότητες του component στο template.

</div>

### Συνδέστε το `MessageService`

Αντικαταστήστε το template του `MessagesComponent` που δημιουργήθηκε από το `ng generate` με το ακόλουθο.

<code-example header="src/app/messages/messages.component.html" path="toh-pt4/src/app/messages/messages.component.html"></code-example>

Αυτό το template συνδέεται απευθείας με το `messageService` του component.

|                                              | Λεπτομερειες |
|:---                                          |:---     |
| `*ngIf`                                      | Εμφανίζει μόνο την περιοχή μηνυμάτων εάν υπάρχουν μηνύματα προς εμφάνιση. |
| `*ngFor`                                     | Παρουσιάζει τη λίστα των μηνυμάτων σε επαναλαμβανόμενα στοιχεία `<div>`    |
| Angular [event binding](guide/event-binding) | Συνδέει το event click του κουμπιού στο `MessageService.clear()`.    |

Τα μηνύματα φαίνονται καλύτερα αφού προσθέσετε τα στυλ CSS στο `messages.component.css`
όπως αναφέρεται σε μία από τις καρτέλες της ["τελικής προεπισκόπησης του κώδικα"](#final-code-review) παρακάτω.

## Προσθέστε το MessageService στο HeroesComponent

Το ακόλουθο παράδειγμα δείχνει πώς να εμφανίσετε το ιστορικό κάθε φορά που ο χρήστης κάνει κλικ σε
έναν ήρωα. Αυτό είναι χρήσιμο όταν φτάσετε στην
επόμενη ενότητα για την [Δρομολόγηση](tutorial/tour-of-heroes/toh-pt5).

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.ts"></code-example>

Ανανεώστε το πρόγραμμα περιήγησης για να δείτε τη λίστα των ηρώων και κάντε κύλιση προς τα κάτω για να δείτε τα
μηνύματα από το HeroService. Κάθε φορά που κάνετε κλικ σε έναν ήρωα, εμφανίζεται ένα νέο μήνυμα που καταγράφει
την επιλογή. Χρησιμοποιήστε το κουμπί **Clear messages** για να διαγράψετε το ιστορικό μηνυμάτων.

<a id="final-code-review"></a>

## Τελική επισκόπηση του κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα.

<code-tabs>
    <code-pane header="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.ts"></code-pane>
    <code-pane header="src/app/message.service.ts" path="toh-pt4/src/app/message.service.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.ts"></code-pane>
    <code-pane header="src/app/messages/messages.component.ts" path="toh-pt4/src/app/messages/messages.component.ts"></code-pane>
    <code-pane header="src/app/messages/messages.component.html" path="toh-pt4/src/app/messages/messages.component.html"></code-pane>
    <code-pane header="src/app/messages/messages.component.css" path="toh-pt4/src/app/messages/messages.component.css"></code-pane>
    <code-pane header="src/app/app.module.ts" path="toh-pt4/src/app/app.module.ts"></code-pane>
    <code-pane header="src/app/app.component.html" path="toh-pt4/src/app/app.component.html"></code-pane>
</code-tabs>


## Περίληψη

*   Τροποποιήσατε την πρόσβαση δεδομένων στο class `HeroService`.
*   Καταχωρίσατε το `HeroService` ως *provider* του service του στο επίπεδο root ώστε να μπορεί να εισαχθεί οπουδήποτε στην εφαρμογή.
*   Χρησιμοποιήσατε το [Dependency Injection της Angular](guide/dependency-injection) για να το εισάγετε σε ένα component.
*   Δώσατε στη μέθοδο `HeroService` `get data` μια ασύγχρονη μορφή.
*   Ανακαλύψατε το `Observable` και τη βιβλιοθήκη `RxJS`.
*   Χρησιμοποιήσατε το `of()` του RxJS για να επιστρέψετε ένα observable από εικονικούς ήρωες `Observable<Hero[]>`.
*   Το lifecycle hook `ngOnInit` του component καλεί τη μέθοδο `HeroService`, και όχι το constructor.
*   Δημιουργήσατε ένα `MessageService` για loosely-coupled επικοινωνία μεταξύ των classes.
*   Το `HeroService` που εισάγεται σε ένα component δημιουργείται με ένα άλλο service που εισάγεται,
 το `MessageService`.

@reviewed 2022-07-24
