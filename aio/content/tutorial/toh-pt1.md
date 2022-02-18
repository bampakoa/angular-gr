# Επεξεργασία ήρωα

Η εφαρμογή έχει πλέον βασικό τίτλο.
Στη συνέχεια θα δημιουργήσετε ένα νέο component για να εμφανίσετε πληροφορίες του ήρωα
και θα τοποθετήσετε αυτό το στοιχείο στο κέλυφος της εφαρμογής.

<div class="alert is-helpful">

  Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>

## Δημιουργήστε το component των ηρώων 

Χρησιμοποιώντας το Angular CLI, δημιουργήστε ένα νέο component με το όνομα `heroes`.

<code-example language="sh">
  ng generate component heroes
</code-example>

Το CLI δημιουργεί έναν νέο φάκελο, `src/app/heroes/`, και δημιουργεί
τα τρία αρχεία του  `HeroesComponent` μαζί με ένα test αρχείο.

Το class αρχείο του `HeroesComponent` είναι το εξής:

<code-example path="toh-pt1/src/app/heroes/heroes.component.ts" region="v1" header="app/heroes/heroes.component.ts (initial version)"></code-example>

Κάντε πάντα import το σύμβολο `Component` από την κεντρική βιβλιοθήκη του Angular
και προσθέστε το `@Component` στο component class.

Το `@Component` είναι μια συνάρτηση decorator που καθορίζει τα μεταδεδομένα Angular για το component.

Το CLI δημιούργησε τρεις ιδιότητες για τα μεταδεδομένα:

1. `selector`&mdash; τον CSS selector του στοιχείου του component
1. `templateUrl`&mdash; την θέση του αρχείου template του component.
1. `styleUrls`&mdash; την θέση των CSS styles του component.

{@a selector}

Ο [selector του στοιχείου CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors),
`'app-heroes'`, αντιστοιχεί με το όνομα του στοιχείου HTML που προσδιορίζει αυτό το component μέσα στο template ενός άλλου component.

Το `ngOnInit()` είναι ένα [lifecycle hook](guide/lifecycle-hooks#oninit).
Το Angular καλεί το `ngOnInit()` λίγο μετά τη δημιουργία ενός component.
Είναι ένα καλό μέρος για να βάλετε τη λογική αρχικοποίησης.

Πάντα να κάνετε `export` το component class για να μπορείτε να το κάνετε `import` αλλού ... όπως στο `AppModule`.

### Προσθέστε μια ιδιότητα `hero`

Προσθέστε μια ιδιότητα `hero` στο `HeroesComponent` για έναν ήρωα που ονομάζεται "Windstorm."

<code-example path="toh-pt1/src/app/heroes/heroes.component.ts" region="add-hero" header="heroes.component.ts (hero property)"></code-example>

### Εμφανίστε τον ήρωα

Ανοίξτε το αρχείο template `heroes.component.html`.
Διαγράψτε το προεπιλεγμένο κείμενο που δημιουργήθηκε από το Angular CLI και
αντικαταστήστε το με ένα data binding για τη νέα ιδιότητα `hero`.

<code-example path="toh-pt1/src/app/heroes/heroes.component.1.html" header="heroes.component.html" region="show-hero-1"></code-example>

## Εμφανίστε την προβολή `HeroesComponent`

Για να εμφανίσετε το `HeroesComponent`, πρέπει να το προσθέσετε στο template του κελύφους `AppComponent`.

Να θυμάστε ότι το `app-heroes` είναι ο [selector στοιχείου](#selector) για το `HeroesComponent`.
Προσθέστε λοιπόν ένα στοιχείο `<app-heroes>` στο αρχείο template του `AppComponent`, ακριβώς κάτω από τον τίτλο.

<code-example path="toh-pt1/src/app/app.component.html" header="src/app/app.component.html"></code-example>

Υποθέτοντας ότι η εντολή CLI `ng serve` εξακολουθεί να εκτελείται,
το πρόγραμμα περιήγησης πρέπει να ανανεώσει και να εμφανίσει τόσο τον τίτλο της εφαρμογής όσο και το όνομα του ήρωα.

## Δημιουργήστε ένα interface Hero

Ένας πραγματικός ήρωας είναι κάτι περισσότερο από ένα όνομα.

Δημιουργήστε ένα interface `Hero` σε ξεχωριστό αρχείο στον φάκελο `src/app`.
Δώστε του ιδιότητες `id` και `name`.

<code-example path="toh-pt1/src/app/hero.ts"  header="src/app/hero.ts"></code-example>


Επιστρέψτε στο class `HeroesComponent` και κάντε import το interface `Hero`.

Αναδιαμορφώστε  την ιδιότητα `hero` του component ώστε να είναι τύπου `Hero`.
Αρχικοποιήστε το με ένα `id` του `1` και το όνομα `Windstorm`.

Το αναθεωρημένο αρχείο class του `HeroesComponent` θα πρέπει να μοιάζει με αυτό:

<code-example path="toh-pt1/src/app/heroes/heroes.component.ts" header="src/app/heroes/heroes.component.ts"></code-example>

Η σελίδα δεν εμφανίζεται πλέον σωστά επειδή αλλάξατε τον ήρωα από κείμενο σε αντικείμενο.

## Εμφανίστε το αντικείμενο hero

Ενημερώστε το binding στο template για να ανακοινώσετε το όνομα του ήρωα
και εμφανίστε τόσο το `id` και το `name` σε μια διάταξη λεπτομερειών όπως αυτή:

<code-example path="toh-pt1/src/app/heroes/heroes.component.1.html" region="show-hero-2" header="heroes.component.html (HeroesComponent's template)"></code-example>

Το πρόγραμμα περιήγησης ανανεώνει και εμφανίζει τις πληροφορίες του ήρωα.

## Μορφοποίηση με το _UppercasePipe_

Τροποποιήστε το binding `hero.name` ως εξής.
<code-example path="toh-pt1/src/app/heroes/heroes.component.html" header="src/app/heroes/heroes.component.html" region="pipe">
</code-example>

Το πρόγραμμα περιήγησης ανανεώνεται και τώρα το όνομα του ήρωα εμφανίζεται με κεφαλαία γράμματα.

Η λέξη `uppercase` στο interpolation binding,
αμέσως μετά το σύμβολο του pipe ( | ),
ενεργοποιεί το ενσωματωμένο `UppercasePipe`.

Τα [pipes](guide/pipes) είναι ένας καλός τρόπος για να μορφοποιήσετε κείμενο, ποσά νομισμάτων, ημερομηνίες και άλλα δεδομένα εμφάνισης.
Το Angular περιέχει διάφορα ενσωματωμένα pipes και μπορείτε να δημιουργήσετε τα δικούς σας.

## Επεξεργαστείτε τον ήρωα

Οι χρήστες θα πρέπει να μπορούν να επεξεργάζονται το όνομα του ήρωα σε ένα πλαίσιο κειμένου `<input>`.

Το πλαίσιο κειμένου θα πρέπει να _εμφανίζει_ την ιδιότητα `name` του ήρωα
και να _ενημερώνει_ αυτή την ιδιότητα καθώς πληκτρολογεί ο χρήστης.
Αυτό σημαίνει ότι τα δεδομένα ρέουν από το component class _στην οθόνη_ και
από την οθόνη _πίσω στο class_.

Για να αυτοματοποιήσετε αυτή τη ροή δεδομένων, ρυθμίστε ένα two-way data binding μεταξύ του στοιχείου φόρμας `<input>` και της ιδιότητας `hero.name`.

### Two-way binding

Τροποποιήστε την περιοχή λεπτομερειών στο template `HeroesComponent` ώστε να μοιάζει με αυτό:

<code-example path="toh-pt1/src/app/heroes/heroes.component.1.html" region="name-input" header="src/app/heroes/heroes.component.html (HeroesComponent's template)"></code-example>

**To [(ngModel)]** είναι η σύνταξη two-way data binding του Angular.

Εδώ συνδέει την ιδιότητα `hero.name` στο πλαίσιο κειμένου HTML έτσι ώστε τα δεδομένα να μπορούν να ρέουν _και προς τις δύο κατευθύνσεις:_ από την ιδιότητα `hero.name` στο πλαίσιο κειμένου και από το πλαίσιο κειμένου πίσω στο `hero.name`.

### Το _FormsModule_ που λείπει

Παρατηρήστε ότι η εφαρμογή σταμάτησε να λειτουργεί όταν προσθέσατε το `[(ngModel)]`.

Για να δείτε το σφάλμα, ανοίξτε τα developer tools του προγράμματος περιήγησης και ψάξτε στο console
για ένα μήνυμα όπως

<code-example language="sh">
Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'.
</code-example>

Αν και το `ngModel` είναι ένα έγκυρο directive του Angular, δεν είναι διαθέσιμο εξ αρχής.

Ανήκει στο προαιρετικό `FormsModule` και πρέπει να _το δηλώσετε ρητά_ για να το χρησιμοποιήσετε.

## _AppModule_

Το Angular πρέπει να γνωρίζει πώς ταιριάζουν τα κομμάτια της εφαρμογής σας
και ποια άλλα αρχεία και βιβλιοθήκες απαιτεί η εφαρμογή.
Αυτές οι πληροφορίες ονομάζονται _μεταδεδομένα_.

Ορισμένα από τα μεταδεδομένα βρίσκονται στους decorators `@Component` που προσθέσατε στα component classes.
Άλλα κρίσιμα μεταδεδομένα βρίσκονται σε decorators [`@NgModule`](guide/ngmodules).

Ο πιο σημαντικός decorator `@NgModule` ορίζεται στο class **AppModule** που βρίσκεται στο ανώτερο επίπεδο.

Το Angular CLI δημιούργησε ένα class `AppModule` στο `src/app/app.module.ts` όταν δημιούργησε το project.
Εκεί μπορείτε να _δηλώσετε ρητά_ το `FormsModule`.

### Κάντε import το _FormsModule_

Ανοίξτε το `AppModule` (`app.module.ts`) και κάντε import το σύμβολο `FormsModule` από την βιβλιοθήκη `@angular/forms`.

<code-example path="toh-pt1/src/app/app.module.ts" header="app.module.ts (FormsModule symbol import)"
 region="formsmodule-js-import">
</code-example>

Στη συνέχεια, προσθέστε το `FormsModule` στην λίστα `imports` των μεταδεδομένων του `@NgModule`, που περιέχει μια λίστα εξωτερικών modules που χρειάζεται η εφαρμογή.

<code-example path="toh-pt1/src/app/app.module.ts" header="app.module.ts (@NgModule imports)"
region="ng-imports">
</code-example>

Όταν το πρόγραμμα περιήγησης ανανεώνεται, η εφαρμογή θα πρέπει να λειτουργεί ξανά. Μπορείτε να επεξεργαστείτε το όνομα του ήρωα και να δείτε τις αλλαγές να εφαρμόζονται αμέσως στο `<h2>` πάνω από το πλαίσιο κειμένου.

### Δηλώστε το `HeroesComponent`

Κάθε component πρέπει να δηλωθεί σε _ακριβώς ένα_ [NgModule](guide/ngmodules).

Δεν δηλώσατε _εσεις_ το `HeroesComponent`.
Γιατί λοιπόν λειτούργησε η εφαρμογή;

Λειτούργησε επειδή το Angular CLI δήλωσε το `HeroesComponent` στο `AppModule` όταν δημιούργησε αυτό το component.

Ανοίξτε το `src/app/app.module.ts` και βρείτε το `HeroesComponent` που γίνεται import στην κορυφή του αρχείου.
<code-example path="toh-pt1/src/app/app.module.ts" header="src/app/app.module.ts" region="heroes-import" >
</code-example>

Το `HeroesComponent` δηλώνεται στον πίνακα `@NgModule.declarations`.
<code-example path="toh-pt1/src/app/app.module.ts" header="src/app/app.module.ts" region="declarations">
</code-example>

Παρατηρήστε ότι το `AppModule` δηλώνει και τα δύο components της εφαρμογής, `AppComponent` και `HeroesComponent`.


## Τελική επισκόπηση του κώδικα

Εδώ είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα.

<code-tabs>

  <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt1/src/app/heroes/heroes.component.ts">
  </code-pane>

  <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt1/src/app/heroes/heroes.component.html">
  </code-pane>

  <code-pane header="src/app/app.module.ts"
  path="toh-pt1/src/app/app.module.ts">
  </code-pane>

  <code-pane header="src/app/app.component.ts" path="toh-pt1/src/app/app.component.ts">
  </code-pane>

  <code-pane header="src/app/app.component.html" path="toh-pt1/src/app/app.component.html">
  </code-pane>

  <code-pane header="src/app/hero.ts"
  path="toh-pt1/src/app/hero.ts">
  </code-pane>

</code-tabs>

## Περίληψη

* Χρησιμοποιήσατε το CLI για να δημιουργήσετε ένα δεύτερο  `HeroesComponent`.
* Εμφανίσατε το `HeroesComponent` προσθέτοντάς το στο κέλυφος `AppComponent`.
* Εφαρμόσατε το `UppercasePipe` για να μορφοποιήσετε το όνομα.
* Χρησιμοποιήσατε two-way data binding με το directive `ngModel`.
* Μάθατε για το `AppModule`.
* Εισαγάγατε το `FormsModule` στο `AppModule` έτσι ώστε το Angular να αναγνωρίζει και να εφαρμόζει το directive `ngModel`.
* Μάθατε τη σημασία της δήλωσης components στο `AppModule`
και εκτιμήσατε ότι το CLI το δήλωσε για εσάς.
