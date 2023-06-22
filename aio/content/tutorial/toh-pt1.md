# Επεξεργασία ήρωα

Η εφαρμογή έχει πλέον βασικό τίτλο.
Στη συνέχεια θα δημιουργήσετε ένα νέο component για να εμφανίσετε πληροφορίες του ήρωα
και θα τοποθετήσετε αυτό το στοιχείο στο κέλυφος της εφαρμογής.

<div class="alert is-helpful">

Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>

## Δημιουργήστε το component των ηρώων

Χρησιμοποιώντας το Angular CLI, δημιουργήστε ένα νέο component με το όνομα `heroes`.

<code-example format="shell" language="shell">

ng generate component heroes

</code-example>

Το CLI δημιουργεί έναν νέο φάκελο, `src/app/heroes/`, και δημιουργεί
τα τρία αρχεία του  `HeroesComponent` μαζί με ένα test αρχείο.

Το class αρχείο του `HeroesComponent` είναι το εξής:

<code-example header="app/heroes/heroes.component.ts (αρχική μορφή)" path="toh-pt1/src/app/heroes/heroes.component.ts" region="v1"></code-example>

Κάντε πάντα import το σύμβολο `Component` από την κεντρική βιβλιοθήκη της Angular
και προσθέστε το `@Component` στο class του component.

Το `@Component` είναι μια συνάρτηση decorator που καθορίζει τα μεταδεδομένα Angular για το component.

Το CLI δημιούργησε τρεις ιδιότητες για τα μεταδεδομένα:

| Ιδιοτητες    | Λεπτομερειες |
|:---           |:---     |
| `selector`    | Το selector CSS του στοιχείου του component       |
| `templateUrl` | Την θέση του αρχείου template του component.      |
| `styleUrls`   | Την θέση των στυλ CSS του component.              |

{@a selector}

Το [selector του στοιχείου CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors), `'app-heroes'`, αντιστοιχεί με το όνομα του στοιχείου HTML που προσδιορίζει αυτό το component μέσα στο template ενός άλλου component.

Το `ngOnInit()` είναι ένα [lifecycle hook](guide/lifecycle-hooks#oninit).
Η Angular καλεί το `ngOnInit()` λίγο μετά τη δημιουργία ενός component.
Είναι ένα καλό μέρος για να βάλετε τη λογική αρχικοποίησης.

Πάντα να κάνετε `export` το class του component για να μπορείτε να το κάνετε `import` αλλού &hellip; όπως στο `AppModule`.

### Προσθέστε μια ιδιότητα `hero`

Προσθέστε μια ιδιότητα `hero` στο `HeroesComponent` για έναν ήρωα που ονομάζεται "Windstorm".

<code-example header="heroes.component.ts (ιδιότητα hero)" path="toh-pt1/src/app/heroes/heroes.component.ts" region="add-hero"></code-example>

### Εμφανίστε τον ήρωα

Ανοίξτε το αρχείο template `heroes.component.html`.
Διαγράψτε το προεπιλεγμένο κείμενο που δημιουργήθηκε από το Angular CLI και
αντικαταστήστε το με ένα data binding για τη νέα ιδιότητα `hero`.

<code-example header="heroes.component.html" path="toh-pt1/src/app/heroes/heroes.component.1.html" region="show-hero-1"></code-example>

## Εμφανίστε την προβολή `HeroesComponent`

Για να εμφανίσετε το `HeroesComponent`, πρέπει να το προσθέσετε στο template του κελύφους `AppComponent`.

Να θυμάστε ότι το `app-heroes` είναι το [selector στοιχείου](#selector) για το `HeroesComponent`.
Προσθέστε λοιπόν ένα στοιχείο `<app-heroes>` στο αρχείο template του `AppComponent`, ακριβώς κάτω από τον τίτλο.

<code-example header="src/app/app.component.html" path="toh-pt1/src/app/app.component.html"></code-example>

Υποθέτοντας ότι η εντολή `ng serve` του CLI εξακολουθεί να εκτελείται,
το πρόγραμμα περιήγησης πρέπει να ανανεώσει και να εμφανίσει τόσο τον τίτλο της εφαρμογής όσο και το όνομα του ήρωα.

## Δημιουργήστε ένα interface Hero

Ένας πραγματικός ήρωας είναι κάτι περισσότερο από ένα όνομα.

Δημιουργήστε ένα interface `Hero` σε ξεχωριστό αρχείο στον φάκελο `src/app`.
Δώστε του ιδιότητες `id` και `name`.

<code-example header="src/app/hero.ts" path="toh-pt1/src/app/hero.ts"></code-example>

Επιστρέψτε στο class `HeroesComponent` και κάντε import το interface `Hero`.

Αλλάξτε την ιδιότητα `hero` του component ώστε να είναι τύπου `Hero`.
Αρχικοποιήστε το με ένα `id` `1` και όνομα `Windstorm`.

Το αναθεωρημένο αρχείο class του `HeroesComponent` θα πρέπει να μοιάζει με αυτό:

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt1/src/app/heroes/heroes.component.ts"></code-example>

Η σελίδα δεν εμφανίζεται πλέον σωστά επειδή αλλάξατε τον ήρωα από κείμενο σε αντικείμενο.

## Εμφανίστε το αντικείμενο ήρωα

Ενημερώστε το binding στο template για να προβάλλετε το όνομα του ήρωα
και εμφανίστε τόσο το `id` και το `name` σε μια διάταξη λεπτομερειών όπως αυτή:

<code-example header="heroes.component.html (HeroesComponent template)" path="toh-pt1/src/app/heroes/heroes.component.1.html" region="show-hero-2"></code-example>

Το πρόγραμμα περιήγησης ανανεώνει και εμφανίζει τις πληροφορίες του ήρωα.

## Μορφοποίηση με το `UppercasePipe`

Τροποποιήστε το binding `hero.name` ως εξής.

<code-example header="src/app/heroes/heroes.component.html" path="toh-pt1/src/app/heroes/heroes.component.html" region="pipe"></code-example>

Το πρόγραμμα περιήγησης ανανεώνεται και τώρα το όνομα του ήρωα εμφανίζεται με κεφαλαία γράμματα.

Η λέξη `uppercase` στο interpolation binding,
αμέσως μετά το σύμβολο του pipe \(<code>&verbar;</code>\),
ενεργοποιεί το ενσωματωμένο `UppercasePipe`.

Τα [pipes](guide/pipes) είναι ένας καλός τρόπος για να μορφοποιήσετε κείμενο, ποσά νομισμάτων, ημερομηνίες και άλλα δεδομένα εμφάνισης.
Η Angular περιέχει διάφορα ενσωματωμένα pipes και μπορείτε να δημιουργήσετε τα δικά σας.

## Επεξεργαστείτε τον ήρωα

Οι χρήστες θα πρέπει να μπορούν να επεξεργάζονται το όνομα του ήρωα σε ένα πλαίσιο κειμένου `<input>`.

Το πλαίσιο κειμένου θα πρέπει να *εμφανίζει* την ιδιότητα `name` του ήρωα
και να *ενημερώνει* αυτή την ιδιότητα καθώς πληκτρολογεί ο χρήστης.
Αυτό σημαίνει ότι τα δεδομένα θα ξεκινούν από το class του component *στην οθόνη* και
από την οθόνη *πίσω στο class*.

Για να αυτοματοποιήσετε αυτή τη ροή δεδομένων, ρυθμίστε ένα αμφίδρομο data binding μεταξύ του στοιχείου φόρμας `<input>` και της ιδιότητας `hero.name`.

### Αμφίδρομο binding

Τροποποιήστε την περιοχή λεπτομερειών στο template `HeroesComponent` ώστε να μοιάζει με αυτό:

<code-example header="src/app/heroes/heroes.component.html (HeroesComponent template)" path="toh-pt1/src/app/heroes/heroes.component.1.html" region="name-input"></code-example>

To `[(ngModel)]` είναι η σύνταξη αμφίδρομου data binding της Angular.

Εδώ συνδέει την ιδιότητα `hero.name` στο πλαίσιο κειμένου HTML έτσι ώστε τα δεδομένα να μπορούν να ρέουν *και προς τις δύο κατευθύνσεις:*
Από την ιδιότητα `hero.name` στο πλαίσιο κειμένου και από το πλαίσιο κειμένου πίσω στο `hero.name`.

### Το `FormsModule` που λείπει

Παρατηρήστε ότι η εφαρμογή σταμάτησε να λειτουργεί όταν προσθέσατε το `[(ngModel)]`.

Για να δείτε το σφάλμα, ανοίξτε τα developer tools του προγράμματος περιήγησης και ψάξτε στο console
για ένα μήνυμα όπως

<code-example format="output" hideCopy language="shell">

Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'.

</code-example>

Αν και το `ngModel` είναι ένα έγκυρο directive της Angular, δεν είναι διαθέσιμο εξ αρχής.

Ανήκει στο προαιρετικό `FormsModule` και πρέπει να *το δηλώσετε ρητά* για να το χρησιμοποιήσετε.

## `AppModule`

Η Angular πρέπει να γνωρίζει πώς ταιριάζουν τα κομμάτια της εφαρμογής σας
και ποια άλλα αρχεία και βιβλιοθήκες απαιτεί η εφαρμογή.
Αυτές οι πληροφορίες ονομάζονται *μεταδεδομένα*.

Ορισμένα από τα μεταδεδομένα βρίσκονται στα decorators `@Component` που προσθέσατε στα classes των components.
Άλλα κρίσιμα μεταδεδομένα βρίσκονται σε decorators [`@NgModule`](guide/ngmodules).

Το πιο σημαντικό decorator `@NgModule` ορίζεται στο class **AppModule** που βρίσκεται στο ανώτερο επίπεδο.

Το Angular CLI δημιούργησε ένα class `AppModule` στο `src/app/app.module.ts` όταν δημιούργησε το project.
Εκεί μπορείτε να *δηλώσετε ρητά* το `FormsModule`.

### Κάντε import το `FormsModule`

Ανοίξτε το `AppModule` \(`app.module.ts`\) και κάντε import το σύμβολο `FormsModule` από την βιβλιοθήκη `@angular/forms`.

<code-example header="app.module.ts (Σύμβολο import του FormsModule)" path="toh-pt1/src/app/app.module.ts" region="formsmodule-js-import"></code-example>

Στη συνέχεια, προσθέστε το `FormsModule` στην λίστα `imports` των μεταδεδομένων του `@NgModule`, που περιέχει μια λίστα εξωτερικών modules που χρειάζεται η εφαρμογή.

<code-example header="app.module.ts (@NgModule imports)" path="toh-pt1/src/app/app.module.ts" region="ng-imports"></code-example>

Όταν το πρόγραμμα περιήγησης ανανεώνεται, η εφαρμογή θα πρέπει να λειτουργεί ξανά. Μπορείτε να επεξεργαστείτε το όνομα του ήρωα και να δείτε τις αλλαγές να εφαρμόζονται αμέσως στο `<h2>` πάνω από το πλαίσιο κειμένου.

### Δηλώστε το `HeroesComponent`

Κάθε component πρέπει να δηλωθεί σε *ακριβώς ένα* [NgModule](guide/ngmodules).

Δεν δηλώσατε *εσείς* το `HeroesComponent`.
Γιατί λοιπόν λειτούργησε η εφαρμογή;

Λειτούργησε επειδή το Angular CLI δήλωσε το `HeroesComponent` στο `AppModule` όταν δημιούργησε αυτό το component.

Ανοίξτε το `src/app/app.module.ts` και βρείτε το `HeroesComponent` που γίνεται import στην κορυφή του αρχείου.

<code-example header="src/app/app.module.ts" path="toh-pt1/src/app/app.module.ts" region="heroes-import" ></code-example>

Το `HeroesComponent` δηλώνεται στην λίστα `@NgModule.declarations`.

<code-example header="src/app/app.module.ts" path="toh-pt1/src/app/app.module.ts" region="declarations"></code-example>

<div class="alert is-helpful">

**ΣΗΜΕΙΩΣΗ**: <br />
Το `AppModule` δηλώνει και τα δύο components της εφαρμογής, `AppComponent` και `HeroesComponent`.

</div>

## Τελική επισκόπηση του κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα.

<code-tabs>
    <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt1/src/app/heroes/heroes.component.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt1/src/app/heroes/heroes.component.html"></code-pane>
    <code-pane header="src/app/app.module.ts" path="toh-pt1/src/app/app.module.ts"></code-pane>
    <code-pane header="src/app/app.component.ts" path="toh-pt1/src/app/app.component.ts"></code-pane>
    <code-pane header="src/app/app.component.html" path="toh-pt1/src/app/app.component.html"></code-pane>
    <code-pane header="src/app/hero.ts" path="toh-pt1/src/app/hero.ts"></code-pane>
</code-tabs>

## Περίληψη

*   Χρησιμοποιήσατε το CLI για να δημιουργήσετε ένα δεύτερο  `HeroesComponent`
*   Εμφανίσατε το `HeroesComponent` προσθέτοντάς το στο κέλυφος `AppComponent`
*   Εφαρμόσατε το `UppercasePipe` για να μορφοποιήσετε το όνομα
*   Χρησιμοποιήσατε αμφίδρομο data binding με το directive `ngModel`
*   Μάθατε για το `AppModule`
*   Εισαγάγατε το `FormsModule` στο `AppModule` έτσι ώστε η Angular να αναγνωρίζει και να εφαρμόζει το directive `ngModel`
*   Μάθατε τη σημασία της δήλωσης components στο `AppModule` και εκτιμήσατε ότι το CLI το δήλωσε για εσάς

@reviewed 2022-05-21
