# Λήψη δεδομένων από διακομιστή

Σε αυτό το σεμινάριο, θα προσθέσετε τις ακόλουθες λειτουργίες διατήρησης δεδομένων με τη βοήθεια του
`HttpClient` της Angular.

*   Το `HeroService` λαμβάνει δεδομένα ηρώων με αιτήματα HTTP
*   Οι χρήστες μπορούν να προσθέσουν, να επεξεργαστούν και να διαγράψουν ήρωες και να αποθηκεύσουν αυτές τις αλλαγές μέσω HTTP
*   Οι χρήστες μπορούν να αναζητήσουν ήρωες με όνομα

<div class="alert is-helpful">

Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>

## Ενεργοποίηση υπηρεσιών HTTP

Το `HttpClient` είναι ο μηχανισμός της Angular για την επικοινωνία με έναν απομακρυσμένο διακομιστή μέσω HTTP.

Κάντε το `HttpClient` διαθέσιμο παντού στην εφαρμογή σε δύο βήματα. Πρώτα, προσθέστε το στο κεντρικό `AppModule` κάνοντάς το import:

<code-example header="src/app/app.module.ts (HttpClientModule import)" path="toh-pt6/src/app/app.module.ts" region="import-http-client"></code-example>

Στη συνέχεια, ακόμα στο `AppModule`, προσθέστε το `HttpClientModule` στην λίστα `imports`:

<code-example header="src/app/app.module.ts (απόσπασμα πίνακα imports)" path="toh-pt6/src/app/app.module.ts" region="import-httpclientmodule"></code-example>

## Προσομοίωση διακομιστή δεδομένων

Αυτό το δείγμα εκμάθησης μιμείται την επικοινωνία με έναν απομακρυσμένο διακομιστή δεδομένων χρησιμοποιώντας το
module [In-memory Web API](https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api "In-memory Web API").

Μετά την εγκατάσταση του module, η εφαρμογή θα κάνει αιτήματα και θα λαμβάνει απαντήσεις από το `HttpClient`
χωρίς να γνωρίζει ότι το *In-memory Web API* παρακάμπτεται σε αυτά τα αιτήματα,
τα εφαρμόζει σε ένα αποθηκευτικό χώρο δεδομένων στην μνήμη, και επιστρέφει προσομοιωμένες απαντήσεις.

Χρησιμοποιώντας το In-memory Web API, δεν θα χρειαστεί να ρυθμίσετε έναν διακομιστή για να μάθετε για το `HttpClient`.

<div class="alert is-important">

**ΣΗΜΑΝΤΙΚΟ**: <br />
Το module In-memory Web API δεν έχει καμία σχέση με το HTTP στην Angular.

Εάν διαβάζετε αυτόν τον οδηγό για να μάθετε για το `HttpClient`, μπορείτε να [παρακάμψετε](#import-heroes) αυτό το βήμα.
Εάν γράφετε κώδικα μαζί με αυτό το σεμινάριο, μείνετε εδώ και προσθέστε το In-memory Web API τώρα.

</div>

Εγκαταστήστε το πακέτο In-memory Web API από το npm με την ακόλουθη εντολή:

<code-example format="shell" language="shell">

npm install angular-in-memory-web-api --save

</code-example>

Στο `AppModule`, κάντε import το `HttpClientInMemoryWebApiModule` και το class `InMemoryDataService`,
που θα δημιουργήσετε σε μια στιγμή.

<code-example header="src/app/app.module.ts (In-memory Web API imports)" path="toh-pt6/src/app/app.module.ts" region="import-in-mem-stuff"></code-example>

Μετά το `HttpClientModule`, προσθέστε το `HttpClientInMemoryWebApiModule`
στην λίστα `imports` του `AppModule` και ρυθμίστε το με το `InMemoryDataService`.

<code-example header="src/app/app.module.ts (απόσπασμα πίνακα imports)" path="toh-pt6/src/app/app.module.ts" region="in-mem-web-api-imports"></code-example>

Η μέθοδος διαμόρφωσης `forRoot()` παίρνει ένα class `InMemoryDataService`
που εκκινεί τη βάση δεδομένων στη μνήμη.

Δημιουργήστε το class `src/app/in-memory-data.service.ts` με την ακόλουθη εντολή:

<code-example format="shell" language="shell">

ng generate service InMemoryData

</code-example>

Αντικαταστήστε τα προεπιλεγμένα περιεχόμενα του `in-memory-data.service.ts` με τα εξής:

<code-example header="src/app/in-memory-data.service.ts" path="toh-pt6/src/app/in-memory-data.service.ts" region="init"></code-example>

Το αρχείο `in-memory-data.service.ts` θα αναλάβει τη λειτουργία του `mock-heroes.ts`.
Ωστόσο, μην διαγράψετε ακόμα το `mock-heroes.ts`, καθώς το χρειάζεστε για μερικά ακόμη βήματα αυτού του σεμιναρίου.

Όταν ο διακομιστής είναι έτοιμος, θα αποσυνδέσετε το In-memory Web API, και τα αιτήματα της εφαρμογής θα περάσουν από τον διακομιστή.

<a id="import-heroes"></a>

## Ήρωες και HTTP

Στο `HeroService`, κάντε import το `HttpClient` και το `HttpHeaders`:

<code-example header="src/app/hero.service.ts (Σύμβολα import HTTP)" path="toh-pt6/src/app/hero.service.ts" region="import-httpclient"></code-example>

Ακόμα στο `HeroService`, εισάγετε το `HttpClient` στο constructor σε μια private ιδιότητα που ονομάζεται `http`.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="ctor" ></code-example>

Παρατηρήστε ότι συνεχίζετε να εισάγετε το `MessageService` αλλά επειδή θα το καλείτε τόσο συχνά, βάλτε το σε μια private μέθοδο `log()`:

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="log" ></code-example>

Καθορίστε το `heroesUrl` στην μορφή `:base/:collectionName` με τη διεύθυνση του πόρου των ηρώων στον διακομιστή.
 Εδώ το `base` είναι ο πόρος στον οποίο υποβάλλονται τα αιτήματα,
 και το `collectionName` είναι το αντικείμενο δεδομένων των ηρώων στο `in-memory-data-service.ts`.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="heroesUrl" ></code-example>

### Λήψη ηρώων με το `HttpClient`

Το τρέχον `HeroService.getHeroes()`
χρησιμοποιεί τη συνάρτηση `of()` του RxJS για να επιστρέψει μια σειρά από εικονικούς ήρωες
ως ένα `Observable<Hero[]>`.

<code-example header="src/app/hero.service.ts (getHeroes με RxJs 'of()')" path="toh-pt4/src/app/hero.service.ts" region="getHeroes-1"></code-example>

Μετατρέψτε αυτήν τη μέθοδο για να χρησιμοποιεί το `HttpClient` ως εξής:

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="getHeroes-1"></code-example>

Ανανεώστε το πρόγραμμα περιήγησης. Τα δεδομένα του ήρωα θα πρέπει να φορτωθούν με επιτυχία από τον
εικονικό διακομιστή.

Αντικαταστήσατε το `of()` με το `http.get()` και η εφαρμογή συνεχίζει να λειτουργεί χωρίς άλλες αλλαγές
επειδή και οι δύο συναρτήσεις επιστρέφουν ένα `Observable<Hero[]>`.

### Οι μέθοδοι `HttpClient` επιστρέφουν μία τιμή

Όλες οι μέθοδοι του `HttpClient` επιστρέφουν ένα `Observable` του RxJS από κάτι.

Το HTTP είναι ένα πρωτόκολλο αίτησης/απάντησης.
Κάνετε ένα αίτημα, επιστρέφει μία μόνο απάντηση.

Γενικά, ένα observable *μπορεί* να επιστρέψει πολλαπλές τιμές με την πάροδο του χρόνου.
Ένα observable από το `HttpClient` επιστρέφει πάντα μια μεμονωμένη τιμή και στη συνέχεια ολοκληρώνεται, για να μην επιστρέψει άλλη.

Αυτή η συγκεκριμένη κλήση `HttpClient.get()` επιστρέφει ένα `Observable<Hero[]>`. Δηλαδή, "*ένα observable από λίστες ηρώων*". Στην πράξη, θα επιστρέψει μόνο μία λίστα ηρώων.

### Το `HttpClient.get()` επιστρέφει τα δεδομένα της απάντησης

Το `HttpClient.get()` επιστρέφει το περιεχόμενο της απάντησης ως ένα αντικείμενο JSON χωρίς τύπο απο προεπιλογή.
Η εφαρμογή του προαιρετικού τύπου, `<Hero[]>` , προσθέτει δυνατότητες TypeScript, οι οποίες μειώνουν τα σφάλματα κατά τη διάρκεια της μεταγλώττισης.

Το API δεδομένων του διακομιστή καθορίζει το σχήμα των δεδομένων JSON.
Το API δεδομένων του *Tour of Heroes* επιστρέφει τα δεδομένα του ήρωα ως λίστα.

<div class="alert is-helpful">

Άλλα API ενδέχεται να περιέχουν τα δεδομένα που θέλετε μέσα σε ένα αντικείμενο.
Ίσως χρειαστεί να ανακαλύψετε αυτά τα δεδομένα επεξεργαζόμενοι το αποτέλεσμα του `Observable`
με τον τελεστή `map()` του RxJS.

Αν και δεν συζητείται εδώ, υπάρχει ένα παράδειγμα του `map()` στην μέθοδο `getHeroNo404()`
που περιλαμβάνεται στο δείγμα του πηγαίου κώδικα.

</div>

### Διαχείριση σφαλμάτων

Τα πράγματα μπορεί να πάνε στραβά, ειδικά όταν λαμβάνετε δεδομένα από έναν απομακρυσμένο διακομιστή.
Η μέθοδος `HeroService.getHeroes()` θα πρέπει να εντοπίσει σφάλματα και να κάνει κάτι κατάλληλο.

Για να εντοπίσετε σφάλματα, **"περάστε" το αποτέλεσμα του observable** από το `http.get()` μέσω ενός τελεστή `catchError()` του RxJS.

Κάντε import το σύμβολο `catchError` από το `rxjs/operators`, μαζί με κάποιους άλλους τελεστές που θα χρειαστείτε αργότερα.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="import-rxjs-operators"></code-example>

Τώρα επεκτείνετε το αποτέλεσμα του observable με τη μέθοδο `pipe()` και
δώστε του έναν τελεστή `catchError()`.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="getHeroes-2"></code-example>

Ο τελεστής `catchError()` παρεμβάλλεται σε ένα **`Observable` που απέτυχε**.
Στη συνέχεια, ο τελεστής μεταβιβάζει το σφάλμα στη συνάρτηση χειρισμού σφαλμάτων.

Η ακόλουθη μέθοδος `handleError()` αναφέρει το σφάλμα και στη συνέχεια επιστρέφει ένα
αβλαβές αποτέλεσμα, ώστε η εφαρμογή να συνεχίσει να λειτουργεί.

#### `handleError`

Το ακόλουθο `handleError()` θα είναι κοινόχρηστο από πολλές μεθόδους του `HeroService`
οπότε γενικεύεται για να καλύψει τις διαφορετικές ανάγκες τους.

Αντί να χειριστεί το σφάλμα απευθείας, επιστρέφει μια συνάρτηση για να χειριστεί το σφάλμα στο `catchError` που
έχει ρυθμιστεί τόσο με το όνομα της λειτουργίας που απέτυχε όσο και με μια ασφαλή επιστρεφόμενη τιμή.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="handleError"></code-example>

Αφού αναφέρει το σφάλμα στο console, η συνάρτηση κατασκευάζει
ένα φιλικό προς το χρήστη μήνυμα και επιστρέφει μια ασφαλή τιμή στην εφαρμογή, ώστε η εφαρμογή να μπορεί να συνεχίσει να λειτουργεί.

Επειδή κάθε μέθοδος του service επιστρέφει ένα διαφορετικό είδος αποτελέσματος `Observable`,
το `handleError()` λαμβάνει μια παράμετρο τύπου ώστε να μπορεί να επιστρέψει την ασφαλή τιμή ως τον τύπο που αναμένει η εφαρμογή.

### Πατήστε στο Observable

Οι μεθόδοι του `HeroService` θα **πατήσουν** στη ροή των τιμών του observable
και θα στείλουν ένα μήνυμα, χρησιμοποιώντας τη μέθοδο `log()`, στην περιοχή μηνυμάτων στο κάτω μέρος της σελίδας.

Θα το κάνουν με τον τελεστή `tap()` του RxJS,
που κοιτάζει τις τιμές του observable, κάνει κάτι με αυτές τις τιμές,
και τις μεταδίδει.
Η κλήση του `tap()` δεν αγγίζει τις ίδιες τις τιμές.

Εδώ είναι η τελική έκδοση του `getHeroes()` με το `tap()` που καταγράφει τη λειτουργία.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="getHeroes" ></code-example>

### Λήψη ήρωα βάσει id

Τα περισσότερα web APIs υποστηρίζουν ένα αίτημα *λήψη βάσει id* της μορφής `:baseURL/:id`.

Εδώ, το *base URL* είναι το `heroesURL` που ορίστηκε στην ενότητα [Ήρωες και HTTP](tutorial/toh-pt6#ήρωες-και-http) \(`api/heroes`\) και το *id* είναι ο αριθμός του ήρωα που θέλετε να ανακτήσετε. Για παράδειγμα, `api/heroes/11`.

Ενημερώστε τη μέθοδο `getHero()` του `HeroService` με τα εξής για να κάνετε αυτό το αίτημα:

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="getHero"></code-example>

Υπάρχουν τρεις σημαντικές διαφορές από το `getHeroes()`:

*   Το `getHero()` κατασκευάζει μια διεύθυνση URL για το αίτημα με το επιθυμητό id του ήρωα
*   Ο διακομιστής θα πρέπει να ανταποκριθεί με έναν μόνο ήρωα αντί για μια σειρά ηρώων
*   Το `getHero()` επιστρέφει ένα `Observable<Hero>` \("*ένα observable από αντικείμενα Hero*"\)
 παρά ένα observable από *λίστες* hero

## Ενημέρωση ηρώων

Επεξεργαστείτε το όνομα ενός ήρωα στην προβολή λεπτομερειών ήρωα.
Καθώς πληκτρολογείτε, το όνομα του ήρωα ενημερώνει την επικεφαλίδα στο επάνω μέρος της σελίδας.
Όταν όμως κάνετε κλικ στο "κουμπί επιστροφής", οι αλλαγές χάνονται.

Εάν θέλετε να διατηρηθούν οι αλλαγές, πρέπει να τις ξαναγράψετε
στον διακομιστή.

Στο τέλος του template των λεπτομερειών ήρωα, προσθέστε ένα κουμπί αποθήκευσης με ένα event binding `click`
που καλεί μια νέα μέθοδο του component με το όνομα `save()`.

<code-example header="src/app/hero-detail/hero-detail.component.html (save)" path="toh-pt6/src/app/hero-detail/hero-detail.component.html" region="save"></code-example>

Στο class του component `HeroDetail`, προσθέστε την ακόλουθη μέθοδο `save()`, η οποία αποθηκεύει τις αλλαγές στο όνομα του ήρωα χρησιμοποιώντας την μέθοδο
`updateHero()` του service και, στη συνέχεια, πλοηγείται πίσω στην προηγούμενη προβολή.

<code-example header="src/app/hero-detail/hero-detail.component.ts (save)" path="toh-pt6/src/app/hero-detail/hero-detail.component.ts" region="save"></code-example>

#### Προσθήκη `HeroService.updateHero()`

Η συνολική δομή της μεθόδου `updateHero()` είναι παρόμοια με αυτή της
`getHeroes()`, αλλά χρησιμοποιεί το `http.put()` για να διατηρήσει τον αλλαγμένο ήρωα
στον διακομιστή. Προσθέστε τα ακόλουθα στο `HeroService`.

<code-example header="src/app/hero.service.ts (update)" path="toh-pt6/src/app/hero.service.ts" region="updateHero"></code-example>

Η μέθοδος `HttpClient.put()` παίρνει τρεις παραμέτρους:

*   Το URL
*   Τα δεδομένα προς ενημέρωση (ο τροποποιημένος ήρωας σε αυτήν την περίπτωση)
*   Πρόσθετες επιλογές

Η διεύθυνση URL παραμένει αμετάβλητη. Το web API των ηρώων γνωρίζει ποιον ήρωα να ενημερώσει κοιτάζοντας το `id` του ήρωα.

Το web API των ηρώων περιμένει μια ειδική κεφαλίδα στα αιτήματα αποθήκευσης HTTP.
Αυτή η κεφαλίδα βρίσκεται στη σταθερά `httpOptions` που ορίζεται στο `HeroService`. Προσθέστε τα ακόλουθα στο class `HeroService`.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="http-options"></code-example>

Ανανεώστε το πρόγραμμα περιήγησης, αλλάξτε ένα όνομα ήρωα και αποθηκεύστε την αλλαγή σας. Η μέθοδος `save()`
στο `HeroDetailComponent` μεταβαίνει στην προηγούμενη προβολή.
Ο ήρωας εμφανίζεται τώρα στη λίστα με το αλλαγμένο όνομα.

## Προσθέστε έναν νέο ήρωα

Για να προσθέσετε έναν ήρωα, αυτή η εφαρμογή χρειάζεται μόνο το όνομα του ήρωα. Μπορείτε να χρησιμοποιήσετε ένα στοιχείο `<input>`
μαζί με ένα κουμπί προσθήκης.

Εισαγάγετε τα ακόλουθα στο template του `HeroesComponent`, μετά την επικεφαλίδα:

<code-example header="src/app/heroes/heroes.component.html (add)" path="toh-pt6/src/app/heroes/heroes.component.html" region="add"></code-example>

Ως απάντηση σε ένα event click, καλέστε την μέθοδο του component, `add()`, και μετά
καθαρίστε το πεδίο εισαγωγής ώστε να είναι έτοιμο για άλλο όνομα. Προσθέστε τα παρακάτω στο
class `HeroesComponent`:

<code-example header="src/app/heroes/heroes.component.ts (add)" path="toh-pt6/src/app/heroes/heroes.component.ts" region="add"></code-example>

Όταν το όνομα δεν είναι κενό, η μέθοδος δημιουργεί ένα αντικείμενο που μοιάζει με `Hero`
από το όνομα \(λείπει μόνο το `id`\) και το μεταβιβάζει στη μέθοδο `addHero()` του service.

Όταν το `addHero()` αποθηκεύει με επιτυχία,, η επιστροφή της κλήσης του `subscribe()`
λαμβάνει τον νέο ήρωα και τον προσθέτει στη λίστα `heroes` για εμφάνιση.

Προσθέστε την ακόλουθη μέθοδο `addHero()` στο class `HeroService`.

<code-example header="src/app/hero.service.ts (addHero)" path="toh-pt6/src/app/hero.service.ts" region="addHero"></code-example>

Το `addHero()` διαφέρει από το `updateHero()` με δύο τρόπους:

*   Καλεί το `HttpClient.post()` αντί για το `put()`
*   Αναμένει από τον διακομιστή να δημιουργήσει ένα id για τον νέο ήρωα,
το οποίο επιστρέφει στο `Observable<Hero>` σε αυτόν που το κάλεσε

Ανανεώστε το πρόγραμμα περιήγησης και προσθέστε μερικούς ήρωες.

## Διαγράψτε έναν ήρωα

Κάθε ήρωας στη λίστα ηρώων θα πρέπει να έχει ένα κουμπί διαγραφής.

Προσθέστε το ακόλουθο στοιχείο πλήκτρου στο template του `HeroesComponent`, μετά το όνομα του ήρωα
στο επαναλαμβανόμενο στοιχείο `<li>`.

<code-example header="src/app/heroes/heroes.component.html" path="toh-pt6/src/app/heroes/heroes.component.html" region="delete"></code-example>

Το HTML για τη λίστα των ηρώων θα πρέπει να μοιάζει με αυτό:

<code-example header="src/app/heroes/heroes.component.html (λίστα ηρώων)" path="toh-pt6/src/app/heroes/heroes.component.html" region="list"></code-example>

Για να τοποθετήσετε το κουμπί διαγραφής στη δεξιά πλευρά της καταχώρισης του ήρωα,
προσθέστε λίγο CSS στο `heroes.component.css`. Θα βρείτε αυτό το CSS
στην [τελική επισκόπηση του κώδικα](#heroescomponent) παρακάτω.

Προσθέστε την μέθοδο `delete()` στο class του component.

<code-example header="src/app/heroes/heroes.component.ts (delete)" path="toh-pt6/src/app/heroes/heroes.component.ts" region="delete"></code-example>

Παρόλο που το component έχει ορίσει το `HeroService` να διαγράφει έναν ήρωα,
παραμένει υπεύθυνο για την ενημέρωση της δικής του λίστας ηρώων.
Η μέθοδος`delete()` του component αφαιρεί αμέσως τον *ήρωα-προς-διαγραφή* από αυτήν τη λίστα,
προβλέποντας ότι το `HeroService` θα πετύχει στον διακομιστή.

Πραγματικά δεν υπάρχει τίποτα που να κάνει το component με το `Observable` που επιστράφηκε από
το `heroService.delete()` **αλλά πρέπει να κάνει subscribe ούτως ή άλλως**.

<div class="alert is-important">

  Εάν αμελήσετε να κάνετε `subscribe()`, το service δεν θα στείλει το αίτημα διαγραφής στον διακομιστή.
  Κατά κανόνα, ένα `Observable` *δεν κάνει τίποτα* μέχρι κάτι να κάνει subscribe.

  Επιβεβαιώστε το μόνοι σας αφαιρώντας προσωρινά το `subscribe()`,
  κάνοντας κλικ στο "Dashboard" και μετά κάνοντας κλικ στο "Heroes".
  Θα δείτε ξανά την πλήρη λίστα των ηρώων.

</div>

Στη συνέχεια, προσθέστε μια μέθοδο `deleteHero()` στο `HeroService` όπως αυτή.

<code-example header="src/app/hero.service.ts (delete)" path="toh-pt6/src/app/hero.service.ts" region="deleteHero"></code-example>

Παρατηρήστε τα ακόλουθα βασικά σημεία:

*   Το `deleteHero()` καλεί το `HttpClient.delete()`
*   Η διεύθυνση URL είναι η διεύθυνση URL του πόρου των ηρώων συν το `id` του ήρωα προς διαγραφή
*   Δεν στέλνετε δεδομένα όπως κάνατε με το `put()` και το `post()`
*   Εξακολουθείτε να στέλνετε το `httpOptions`

Ανανεώστε το πρόγραμμα περιήγησης και δοκιμάστε τη νέα λειτουργία διαγραφής.

## Αναζήτηση με το όνομα

Σε αυτήν την τελευταία άσκηση, μαθαίνετε να συνδέετε τους τελεστές `Observable` μεταξύ τους
ώστε να μπορείτε να ελαχιστοποιήσετε τον αριθμό παρόμοιων αιτημάτων HTTP
και να καταναλώνετε οικονομικά το εύρος ζώνης του δικτύου.

Θα προσθέσετε μια δυνατότητα αναζήτησης ηρώων στο Dashboard.
Καθώς ο χρήστης πληκτρολογεί ένα όνομα σε ένα πλαίσιο αναζήτησης,
θα κάνετε επαναλαμβανόμενα αιτήματα HTTP για ήρωες που φιλτράρονται με αυτό το όνομα.
Ο στόχος σας είναι να στείλετε μόνο όσα αιτήματα χρειάζεται.

#### `HeroService.searchHeroes()`

Ξεκινήστε προσθέτοντας μια μέθοδο `searchHeroes()` στο `HeroService`.

<code-example header="src/app/hero.service.ts" path="toh-pt6/src/app/hero.service.ts" region="searchHeroes"></code-example>

Η μέθοδος επιστρέφει αμέσως με μια κενή λίστα εάν δεν υπάρχει όρος αναζήτησης.
Το υπόλοιπο μοιάζει πολύ με το `getHeroes()`, με τη μόνη σημαντική διαφορά
να είναι η διεύθυνση URL, η οποία περιλαμβάνει ένα query string με τον όρο αναζήτησης.

### Προσθήκη αναζήτησης στο Dashboard

Ανοίξτε το template του `DashboardComponent` και
προσθέστε το στοιχείο αναζήτησης ήρωα, `<app-hero-search>`, στο κάτω μέρος.

<code-example header="src/app/dashboard/dashboard.component.html" path="toh-pt6/src/app/dashboard/dashboard.component.html"></code-example>

Αυτό το template μοιάζει πολύ με το `*ngFor` στο template του `HeroesComponent`.

Για να λειτουργήσει αυτό, το επόμενο βήμα είναι να προσθέσετε ένα component με ένα selector που ταιριάζει με το `<app-hero-search>`.

### Δημιουργήστε το `HeroSearchComponent`

Δημιουργήστε ένα `HeroSearchComponent` με το CLI.

<code-example format="shell" language="shell">

ng generate component hero-search

</code-example>

Το CLI δημιουργεί τα τρία αρχεία του `HeroSearchComponent` και προσθέτει το component στα declarations του `AppModule`.

Αντικαταστήστε το template του `HeroSearchComponent` που δημιουργήθηκε με ένα `<input>` και μια λίστα με τα αντίστοιχα αποτελέσματα αναζήτησης, ως εξής.

<code-example header="src/app/hero-search/hero-search.component.html" path="toh-pt6/src/app/hero-search/hero-search.component.html"></code-example>

Προσθέστε στυλ CSS στο `hero-search.component.css`
όπως αναφέρεται στην [τελική επισκόπηση κώδικα](#herosearchcomponent) παρακάτω.

Καθώς ο χρήστης πληκτρολογεί στο πεδίο αναζήτησης, ένα event binding στο input καλεί την
μέθοδο `search()` του component με τη νέα τιμή του πεδίου αναζήτησης.

<a id="asyncpipe"></a>

### `AsyncPipe`

Το `*ngFor` επαναλαμβάνει αντικείμενα ήρωα. Παρατηρήστε ότι το `*ngFor` επαναλαμβάνεται πάνω από μια λίστα που ονομάζεται `heroes$` και όχι `heroes`. Το `$` είναι μια σύμβαση που υποδεικνύει ότι το `heroes$` είναι ένα `Observable` και όχι μια λίστα.

<code-example header="src/app/hero-search/hero-search.component.html" path="toh-pt6/src/app/hero-search/hero-search.component.html" region="async"></code-example>

Εφόσον το `*ngFor` δεν μπορεί να κάνει τίποτα με ένα `Observable`, χρησιμοποιήστε τον χαρακτήρα
pipe \(`|`\) ακολουθούμενο από το `async`. Αυτό προσδιορίζει το `AsyncPipe` της Angular και κάνει subscribe σε ένα `Observable` οπότε δεν θα χρειαστεί να το κάνετε στο class του component.

### Επεξεργαστείτε το class `HeroSearchComponent`

Αντικαταστήστε το class `HeroSearchComponent` που δημιουργήθηκε και τα μεταδεδομένα ως εξής.

<code-example header="src/app/hero-search/hero-search.component.ts" path="toh-pt6/src/app/hero-search/hero-search.component.ts"></code-example>

Παρατηρήστε τη δήλωση του `heroes$` ως `Observable`:

<code-example header="src/app/hero-search/hero-search.component.ts" path="toh-pt6/src/app/hero-search/hero-search.component.ts" region="heroes-stream"></code-example>

Θα το ορίσετε στο [`ngOnInit()`](#search-pipe).
Προτού το κάνετε, εστιάστε στον ορισμό του `searchTerms`.

### Το `searchTerms` είναι ένα subject του RxJS

Η ιδιότητα `searchTerms` είναι ένα `Subject` του RxJS.

<code-example header="src/app/hero-search/hero-search.component.ts" path="toh-pt6/src/app/hero-search/hero-search.component.ts" region="searchTerms"></code-example>

Ένα `Subject` είναι ταυτόχρονα πηγή τιμών observable και το ίδιο το `Observable`.
Μπορείτε να κάνετε subscribe σε ένα `Subject` όπως θα κάνατε σε οποιοδήποτε `Observable`.

Μπορείτε επίσης να προσθέσετε τιμές σε αυτό το `Observable` καλώντας τη μέθοδό του `next(value)`
όπως κάνει η μέθοδος `search()`.

Το event binding στο event `input` του πεδίου κειμένου καλεί τη μέθοδο `search()`.

<code-example header="src/app/hero-search/hero-search.component.html" path="toh-pt6/src/app/hero-search/hero-search.component.html" region="input"></code-example>

Κάθε φορά που ο χρήστης πληκτρολογεί στο πεδίο κειμένου, το binding καλεί το `search()` με την τιμή του πεδίου κειμένου, έναν "όρο αναζήτησης".
Το `searchTerms` γίνεται ένα `Observable` που επιστρέφει μια σταθερή ροή όρων αναζήτησης.

<a id="search-pipe"></a>

### Συνδυάζοντας τελεστές του RxJS

Η μεταβίβαση ενός νέου όρου αναζήτησης απευθείας στο `searchHeroes()` μετά από κάθε πάτημα πλήκτρων χρήστη θα δημιουργούσε υπερβολικό αριθμό αιτημάτων HTTP,
φορτώνοντας τους πόρους του διακομιστή και εξαντλώντας τα πακέτα δεδομένων.

Αντίθετα, η μέθοδος `ngOnInit()` διοχετεύει το observable `searchTerms` μέσω μιας ακολουθίας τελεστών RxJS που μειώνουν τον αριθμό των κλήσεων στο `searchHeroes()`,
επιστρέφοντας τελικά ένα observable  από έγκαιρα αποτελέσματα αναζήτησης ηρώων \(το κάθε ένα `Hero[]`\).

Εδώ είναι μια πιο προσεκτική ματιά στον κώδικα.

<code-example header="src/app/hero-search/hero-search.component.ts" path="toh-pt6/src/app/hero-search/hero-search.component.ts" region="search"></code-example>

Κάθε τελεστής λειτουργεί ως εξής:

*   `debounceTime(300)` περιμένει έως ότου η ροή των νέων events τιμών σταματήσει για 300 χιλιοστά του δευτερολέπτου
πριν περάσει η τελευταία τιμή. Δεν θα κάνετε ποτέ αιτήματα συχνότερα από 300 ms.

*   `distinctUntilChanged()` διασφαλίζει ότι ένα αίτημα αποστέλλεται μόνο εάν η τιμή του φίλτρου έχει αλλάξει.

*   `switchMap()` καλεί το service αναζήτησης για κάθε όρο αναζήτησης που έρχεται από το `debounce()` και το `distinctUntilChanged()`.
Ακυρώνει και απορρίπτει προηγούμενα observables αναζήτησης, επιστρέφοντας μόνο το πιο πρόσφατο observable αναζήτησης του service.

<div class="alert is-helpful">

Με τον [τελεστή switchMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap),
κάθε event που πληροί τις προϋποθέσεις μπορεί να ενεργοποιήσει μια κλήση της μεθόδου `HttpClient.get()`.
Ακόμη και με μια παύση 300 ms μεταξύ των αιτημάτων, θα μπορούσατε να έχετε πολλαπλά ενεργά αιτήματα HTTP
και μπορεί να μην επιστρέψουν με την σειρά που τα στείλατε.

Το `switchMap()` διατηρεί την αρχική σειρά αιτήματος ενώ επιστρέφει μόνο το observable από την πιο πρόσφατη κλήση μεθόδου του HTTP.
Τα αποτελέσματα από προηγούμενες κλήσεις ακυρώνονται και απορρίπτονται.

<div class="alert is-helpful">

**ΣΗΜΕΙΩΣΗ**: <br />
Η ακύρωση ενός προηγούμενου Observable `searchHeroes()` δεν ακυρώνει στην πραγματικότητα ένα εκκρεμές αίτημα του HTTP.
Τα ανεπιθύμητα αποτελέσματα απορρίπτονται πριν φτάσουν στον κώδικα της εφαρμογής σας.

</div>

</div>

Να θυμάστε ότι το *class* του component δεν κάνει subscribe στο *observable* `heroes$`.
Αυτή είναι η δουλειά του [`AsyncPipe`](#asyncpipe) στο template.

#### Δοκιμάστε το

Εκτελέστε ξανά την εφαρμογή. Στο *Dashboard*, πληκτρολογήστε κάποιο κείμενο στο πεδίο αναζήτησης.
Εάν εισαγάγετε χαρακτήρες που ταιριάζουν με τυχόν υπάρχοντα ονόματα ηρώων, θα δείτε κάτι σαν αυτό.

<div class="lightbox">

<img alt="Πεδίο αναζήτησης ήρωα με τα γράμματα 'm' και 'a' μαζί με τέσσερα αποτελέσματα αναζήτησης που ταιριάζουν με το ερώτημα που εμφανίζεται σε μια λίστα κάτω από την είσοδο αναζήτησης" src="generated/images/guide/toh/toh-hero-search.gif">

</div>

## Τελική επισκόπηση κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα \(όλα στον φάκελο `src/app/`\).

<a id="heroservice"></a>
<a id="inmemorydataservice"></a>

<a id="appmodule"></a>

### `HeroService`, `InMemoryDataService`, `AppModule`

<code-tabs>
    <code-pane header="hero.service.ts" path="toh-pt6/src/app/hero.service.ts"></code-pane>
    <code-pane header="in-memory-data.service.ts" path="toh-pt6/src/app/in-memory-data.service.ts"></code-pane>
    <code-pane header="app.module.ts" path="toh-pt6/src/app/app.module.ts"></code-pane>
</code-tabs>

<a id="heroescomponent"></a>

### `HeroesComponent`

<code-tabs>
    <code-pane header="heroes/heroes.component.html" path="toh-pt6/src/app/heroes/heroes.component.html"></code-pane>
    <code-pane header="heroes/heroes.component.ts" path="toh-pt6/src/app/heroes/heroes.component.ts"></code-pane>
    <code-pane header="heroes/heroes.component.css" path="toh-pt6/src/app/heroes/heroes.component.css"></code-pane>
</code-tabs>

<a id="herodetailcomponent"></a>

### `HeroDetailComponent`

<code-tabs>
    <code-pane header="hero-detail/hero-detail.component.html" path="toh-pt6/src/app/hero-detail/hero-detail.component.html"></code-pane>
    <code-pane header="hero-detail/hero-detail.component.ts" path="toh-pt6/src/app/hero-detail/hero-detail.component.ts"></code-pane>
    <code-pane header="hero-detail/hero-detail.component.css" path="toh-pt6/src/app/hero-detail/hero-detail.component.css"></code-pane>
</code-tabs>

<a id="dashboardcomponent"></a>

### `DashboardComponent`

<code-tabs>
    <code-pane header="dashboard/dashboard.component.html" path="toh-pt6/src/app/dashboard/dashboard.component.html"></code-pane>
    <code-pane header="dashboard/dashboard.component.ts" path="toh-pt6/src/app/dashboard/dashboard.component.ts"></code-pane>
    <code-pane header="dashboard/dashboard.component.css" path="toh-pt6/src/app/dashboard/dashboard.component.css"></code-pane>
</code-tabs>

<a id="herosearchcomponent"></a>

### `HeroSearchComponent`

<code-tabs>
    <code-pane header="hero-search/hero-search.component.html" path="toh-pt6/src/app/hero-search/hero-search.component.html"></code-pane>
    <code-pane header="hero-search/hero-search.component.ts" path="toh-pt6/src/app/hero-search/hero-search.component.ts"></code-pane>
    <code-pane header="hero-search/hero-search.component.css" path="toh-pt6/src/app/hero-search/hero-search.component.css"></code-pane>
</code-tabs>

## Περίληψη

Βρίσκεστε στο τέλος του ταξιδιού σας και έχετε καταφέρει πολλά.
*   Προσθέσατε τις απαραίτητες εξαρτήσεις για να χρησιμοποιήσετε το HTTP στην εφαρμογή
*   Τροποποιήσατε το `HeroService` για να φορτώσετε ήρωες από ένα web API
*   Επεκτείνατε το `HeroService` για να υποστηρίζει τις μεθόδους `post()`, `put()` και `delete()`
*   Ενημερώσατε τα components για να επιτρέπεται η προσθήκη, η επεξεργασία και η διαγραφή ηρώων
*   Διαμορφώσατε ένα web API στην΄μνήμη
*   Μάθατε πώς να χρησιμοποιείτε observables

Αυτό ολοκληρώνει το σεμινάριο "Tour of Heroes".
Είστε έτοιμοι να μάθετε περισσότερα σχετικά με την ανάπτυξη Angular στην ενότητα βασικών στοιχείων,
ξεκινώντας με τον οδηγό [Αρχιτεκτονική](guide/architecture "Architecture").

@reviewed 2022-05-21
