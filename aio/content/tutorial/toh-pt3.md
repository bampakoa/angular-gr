# Δημιουργήστε ένα feature component

Προς το παρόν, το `HeroesComponent` εμφανίζει τόσο τη λίστα των ηρώων όσο και τα στοιχεία του επιλεγμένου ήρωα.

Δεν θα είναι διαχειρίσιμη η διατήρηση όλων των λειτουργιών σε ένα component καθώς μεγαλώνει η εφαρμογή.
Θα θέλετε να χωρίσετε μεγάλα components σε μικρότερα υπό-components, καθένα από τα οποία θα εστιάζει σε μια συγκεκριμένη εργασία ή ροή εργασίας.

Σε αυτήν τη σελίδα, θα κάνετε το πρώτο βήμα προς αυτή την κατεύθυνση μετακινώντας τις λεπτομέρειες του ήρωα σε ένα ξεχωριστό, επαναχρησιμοποιήσιμο `HeroDetailComponent`.

Το `HeroesComponent` θα παρουσιάζει μόνο τη λίστα των ηρώων.
Το `HeroDetailComponent` θα παρουσιάζει στοιχεία ενός επιλεγμένου ήρωα.

<div class="alert is-helpful">

  Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>

## Κατασκευάστε το `HeroDetailComponent`

Χρησιμοποιήστε το Angular CLI για να δημιουργήσετε ένα νέο component με το όνομα `hero-detail`.

<code-example format="shell" language="shell">

ng generate component hero-detail

</code-example>

Η εντολή δημιουργεί τα παρακάτω:

* Δημιουργεί έναν φάκελο `src/app/hero-detail`.

Μέσα σε αυτόν τον φάκελο δημιουργούνται τέσσερα αρχεία:

*   Ένα αρχείο CSS για τα στυλ του component.
*   Ένα αρχείο HTML για το template του component.
*   Ένα αρχείο TypeScript με ένα class του component που ονομάζεται `HeroDetailComponent`.
*   Ένα αρχείο test για το class `HeroDetailComponent`.

Η εντολή προσθέτει επίσης το `HeroDetailComponent` σαν ένα declaration στο decorator `@NgModule` του αρχείου `src/app/app.module.ts`.

### Δημιουργήστε το template

Αφαιρέστε το HTML για τη λεπτομέρεια του ήρωα από το κάτω μέρος του template του `HeroesComponent` και επικολλήστε το πάνω από το ήδη υπάρχων template του `HeroDetailComponent`.

Το επικολλημένο HTML αναφέρεται σε ένα `selectedHero`.
Το νέο `HeroDetailComponent` μπορεί να εμφανίσει *οποιονδήποτε* ήρωα, όχι απλώς έναν επιλεγμένο ήρωα.
Αντικαταστήστε λοιπόν το "selectedHero" με το "hero" παντού στο template.

Όταν τελειώσετε, το template του `HeroDetailComponent` θα πρέπει να μοιάζει με αυτό:

<code-example header="src/app/hero-detail/hero-detail.component.html" path="toh-pt3/src/app/hero-detail/hero-detail.component.html"></code-example>

### Προσθέστε την ιδιότητα hero `@Input()`

Το template του `HeroDetailComponent` δένεται με την ιδιότητα `hero` του component
που είναι τύπου `Hero`.

Ανοίξτε το αρχείο class του `HeroDetailComponent` και κάντε import το σύμβολο `Hero`.

<code-example header="src/app/hero-detail/hero-detail.component.ts (import Hero)" path="toh-pt3/src/app/hero-detail/hero-detail.component.ts" region="import-hero"></code-example>

Η ιδιότητα `hero`
[πρέπει να είναι μια ιδιότητα `Input`](guide/inputs-outputs "Ιδιότητες Input και Output"),
που ορίζεται με το decorator `@Input()`,
επειδή το *εξωτερικό* `HeroesComponent` [θα δεθεί με αυτήν](#heroes-component-template) ως εξής.

<code-example path="toh-pt3/src/app/heroes/heroes.component.html" region="hero-detail-binding"></code-example>

Τροποποιήστε την γραμμή import του `@angular/core` ώστε να συμπεριλαμβάνει το σύμβολο `Input`.

<code-example header="src/app/hero-detail/hero-detail.component.ts (import Input)" path="toh-pt3/src/app/hero-detail/hero-detail.component.ts" region="import-input"></code-example>

Προσθέστε μια ιδιότητα `hero`, χρησιμοποιώντας το decorator `@Input()`.

<code-example header="src/app/hero-detail/hero-detail.component.ts" path="toh-pt3/src/app/hero-detail/hero-detail.component.ts" region="input-hero"></code-example>

Αυτή είναι η μόνη αλλαγή που πρέπει να κάνετε στo class του `HeroDetailComponent`.
Δεν υπάρχουν άλλες ιδιότητες. Δεν υπάρχει λογική παρουσίασης.
Αυτό το component λαμβάνει μόνο ένα αντικείμενο ήρωα μέσω της ιδιότητας `hero` και το εμφανίζει.

## Εμφανίστε το `HeroDetailComponent`

Το `HeroesComponent` χρησιμοποιήθηκε για την εμφάνιση των λεπτομερειών του ήρωα από μόνο του, προτού αφαιρέσετε αυτό το τμήμα του template.
Αυτή η ενότητα σας καθοδηγεί στην ανάθεση λογικής στο `HeroDetailComponent`.

Τα δύο components θα έχουν σχέση parent/child.
Το parent `HeroesComponent` θα ελέγχει το child `HeroDetailComponent`
στέλνοντάς του έναν νέο ήρωα για εμφάνιση όποτε
ο χρήστης επιλέγει έναν ήρωα από τη λίστα.

Δεν θα αλλάξετε το *class* του `HeroesComponent` αλλά θα αλλάξετε το *template* του.

<a id="heroes-component-template"></a>

### Ενημερώστε το template του `HeroesComponent`

Το selector του `HeroDetailComponent` είναι το `'app-hero-detail'`.
Προσθέστε ένα στοιχείο `<app-hero-detail>` κοντά στο κάτω μέρος του template του `HeroesComponent`, όπου ήταν η προβολή λεπτομερειών ήρωα.

Συνδέστε το `HeroesComponent.selectedHero` στην ιδιότητα `hero` του στοιχείου ως εξής.

<code-example header="heroes.component.html (HeroDetail binding)" path="toh-pt3/src/app/heroes/heroes.component.html" region="hero-detail-binding"></code-example>

Το `[hero]="selectedHero"` είναι ένα [property binding](guide/property-binding) της Angular.

Είναι ένα *μονόδρομο* data binding από
την ιδιότητα `selectedHero` του `HeroesComponent` στην ιδιότητα `hero` του στοιχείου προορισμού, η οποία αντιστοιχίζεται στην ιδιότητα `hero` του `HeroDetailComponent`.

Τώρα, όταν ο χρήστης κάνει κλικ σε έναν ήρωα στη λίστα, αλλάζει το `selectedHero`.
Όταν το `selectedHero` αλλάζει, το *property binding* ενημερώνει το `hero`
και το `HeroDetailComponent` εμφανίζει τον νέο ήρωα.

Το αναθεωρημένο template του `HeroesComponent` θα πρέπει να μοιάζει με αυτό:

<code-example header="heroes.component.html" path="toh-pt3/src/app/heroes/heroes.component.html"></code-example>

Το πρόγραμμα περιήγησης ανανεώνεται και η εφαρμογή αρχίζει να λειτουργεί ξανά όπως πριν.

## Τι άλλαξε;

Όπως [και πριν](tutorial/toh-pt2), κάθε φορά που ένας χρήστης κάνει κλικ σε ένα όνομα ήρωα,
η λεπτομέρεια του ήρωα εμφανίζεται κάτω από τη λίστα των ηρώων.
Τώρα το `HeroDetailComponent` παρουσιάζει αυτές τις λεπτομέρειες αντί για το `HeroesComponent`.

Η τροποποίηση του αρχικού `HeroesComponent` σε δύο components αποφέρει οφέλη, τόσο τώρα όσο και στο μέλλον:

1. Μειώσατε τις ευθύνες του `HeroesComponent`.

1. Μπορείτε να εξελίξετε το `HeroDetailComponent` σε ένα εργαλείο επεξεργασίας ήρωα με πλούσιες δυνατότητες
χωρίς να αγγίξετε το parent `HeroesComponent`.

1. Μπορείτε να εξελίξετε το `HeroesComponent` χωρίς να αγγίξετε την προβολή λεπτομερειών του ήρωα.

1. Μπορείτε να χρησιμοποιήσετε ξανά το `HeroDetailComponent` στο template κάποιου μελλοντικού component.

## Τελική επισκόπηση του κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα.

<code-tabs>

  <code-pane header="src/app/hero-detail/hero-detail.component.ts" path="toh-pt3/src/app/hero-detail/hero-detail.component.ts"></code-pane>

  <code-pane header="src/app/hero-detail/hero-detail.component.html" path="toh-pt3/src/app/hero-detail/hero-detail.component.html"></code-pane>

  <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt3/src/app/heroes/heroes.component.html"></code-pane>

  <code-pane header="src/app/app.module.ts" path="toh-pt3/src/app/app.module.ts"></code-pane>

</code-tabs>

## Περίληψη

*   Δημιουργήσατε ένα ξεχωριστό, επαναχρησιμοποιήσιμο `HeroDetailComponent`.

*   Χρησιμοποιήσατε ένα [property binding](guide/property-binding) για να δώσετε στο `HeroesComponent` τον έλεγχο του child `HeroDetailComponent`.

*   Χρησιμοποιήσατε το [decorator `@Input`](guide/inputs-outputs)
για να καταστήσετε την ιδιότητα `hero` διαθέσιμη για binding
από το εξωτερικό `HeroesComponent`.

@reviewed 2022-05-21
